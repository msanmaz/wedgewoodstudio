import { useState } from "react";
import { database } from "../../firebase/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const [url, setUrl] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    const storageRef = ref(database, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get upload progress as a percentage
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        // Upload completed successfully
       alert("File uploaded successfully");
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl(url);
        });
      }
    );
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {url && <img src={url} alt="Uploaded file" />}
      {progress}
    </div>
  );
};

export default FileUpload;
