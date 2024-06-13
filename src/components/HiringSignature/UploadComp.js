import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import { IoIosArrowRoundUp } from "react-icons/io";
import axios from "axios";

const dropZoneStyles = {
  width: "70%",
  height: "200px",
  border: "2px dashed #ccc",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

const imageStyles = {
  maxWidth: "100%",
  maxHeight: "100%",
};

export default function UploadComp({ onImageDrop, setRelated }) {
  const [image, setImage] = useState(null);

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    try {
      // Create a FormData object to send the file to the server
      const formData = new FormData();
      formData.append("Employement", file);

      // Make an HTTP request to upload the file
      const response = await axios.post(`${process.env.REACT_APP_NODE_URL}/hiring/signature/${setRelated}/save`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Handle the response as needed
      console.log(response.data);
      setImage(URL.createObjectURL(file));
      // onImageDrop(file);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });
  return (
    <div className="upload-comp">
      <div {...getRootProps()} style={dropZoneStyles}>
        <input {...getInputProps()} />
        {image ? (
          <img src={image} alt="Dropped" style={imageStyles} />
        ) : (
          <div className="dragDrop">
            <p>Drag & Drop a Signature image here</p>
            <div className="image_border">
              <span>
                <IoIosArrowRoundUp size={20} />
              </span>
            </div>
          </div>
        )}
      </div>
      <label>
        <input type="checkbox" />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </span>
      </label>
      <Button className="first_btn" onClick={() => {}}>
        Save
      </Button>
    </div>
  );
}
