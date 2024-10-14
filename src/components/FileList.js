import React, { useState, useEffect } from 'react';

function FileList({ folderId }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch(`/api/folders/${folderId}/files`)
      .then(response => response.json())
      .then(data => setFiles(data));
  }, [folderId]);

  return (
    <div >
      {/* <h2 className="text-center mb-4">File List</h2> */}
      
      {files.length > 0 ? (
        
            files.map(file => (
                                    <li key={file.id} className="list-group-item">
                                    
                                        <i className="bi bi-file-earmark-text me-2 text-dark" ></i>
                                        {file.name}
                                    
                                    </li>
                                )
                        )
             
         
      ) : (
        <p>No files available</p>
      )}
    </div>
  );
}

export default FileList;
