import React, { useState } from 'react';
import axios from 'axios';

const ImageFile = ({ onUploadSuccess }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleImageFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios.post('/api/upload', formData)
      .then((response) => {
        console.log('Uploaded successfully:', response.data);
        onUploadSuccess(response.data.imageUrl);
        
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleImageFileUpload}>Upload File</button>
    </div>
  );
};

export default ImageFile;
