import React, { useState, useEffect } from 'react'
import { singleFileUpload, multipfileUpload } from "../data/api"


function FileUploadscreen(props) {
    const [singleFile, setSingleFile] = useState("");
    const [MultipFile, setMultipleFile] = useState("");
    const [title, setitle] = useState("");


    const SingleFilechange = (e) => {
        setSingleFile(e.target.files[0]);
        console.log(e)
    }

    const Multiplefilechange = (e) => {
        setMultipleFile(e.target.files)
        console.log(e.target.files)
    }
    //upload one single file
    const SinglefileUpload = async () => {
        const formData = new FormData();
        formData.append("file", singleFile);
        await singleFileUpload(formData)
        props.getsingle();
    }

    const UploadMultipFiles = async () => {
        const formData = new FormData();
        formData.append('title', title);
        for (let i = 0; i < MultipFile.length; i++) {
            formData.append('files', MultipFile[i]);
        }
        await multipfileUpload(formData);
        props.getmultipe();
    }

    return (
        <div className="row mt-3">
            <div className="col-6">
                <div className="form-group">
                    <label>Select Single File</label>
                    <input type="file" className="form-control" onChange={(e) => SingleFilechange(e)} />
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn btn-danger" onClick={() => SinglefileUpload()}>Upload</button>
                    </div>
                    <div className="col-2">

                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6">
                        <label >Title</label>
                        <input type="text" placeholder="enter title for your gallery" className="form-control" onChange={(e) => setitle(e.target.value)} />
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label>Select Multiple Files</label>
                            <input type="file" className="form-control" onChange={(e) => Multiplefilechange(e)}  multiple/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn btn-danger" onClick={() => UploadMultipFiles()}>Upload</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FileUploadscreen;
