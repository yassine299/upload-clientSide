import React, { useEffect, useState } from 'react'
import FileUploadscreen from './scrreens/FileUploadscreen';
import { getsingleFiles, getMultipleFiles, multipfileUpload } from "./data/api"

function App() {
  const [singleFiles, setSingleFiles] = useState([]);
  const [MultipFiles, setMultipFiles] = useState([]);
 


  const getsingleFileslist = async () => {
    try {
      const filesList = await getsingleFiles();
      setSingleFiles(filesList);
      // console.log(filesList);

    }
    catch (err) {
      console.log(err);
    }
  }

  const getMultipleFilesList = async () => {
    try {
      const MultipfilesList = await getMultipleFiles();
      setMultipFiles(MultipfilesList);
    }
    catch (err) {
      console.log(err);
    }
  }



  useEffect(() => {
    getsingleFileslist();
    getMultipleFilesList();
    //fetchdata();

  }, [])
  return (
    <>
      <div className="container-lg">
        <h1 className="text-center font-weight-bolder text-danger border-bottom">upload app</h1>
        <FileUploadscreen getsingle={() => getsingleFileslist()} getmultipe={() => getMultipleFilesList()} />
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-6">
              <h4>single files list</h4>
              <div className="row">
                {singleFiles.map((file, index) =>
                  <div className="col-6">
                    <div className="card mb-2 border-0 p-0">
                      <img src={`https://uploadfilenodejs.herokuapp.com/${file.filePath}`} height="220" width="300" className="card-img-top img-responsive" alt="" />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-6 ">
              <h4>Multip files list</h4>
              {MultipFiles.map((file, index) =>
                <div  key={file._id}>
                  <h6 >{"collection name: " + file.title}</h6>
                  <div className="row">
                    {file.files.map((pic) =>
                      <div className="col-6 border">
                        <div className="card mb-2 border-0 p-0">
                          <img src={`https://uploadfilenodejs.herokuapp.com/${pic.filePath}`} height="220" width="400" className="card-img-top img-responsive" alt="" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
