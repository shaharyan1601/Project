import OrganizationHeader from "components/Utils/OrganizationHeader";
import { CiSearch } from "react-icons/ci";
import { GoUpload } from "react-icons/go";
import { FaRegFileAlt, FaRegFolderOpen } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import "./Documents.css";
import { useEffect } from "react";
import DocumentModal from "./DocumentModal";
import UpdateModal from "components/ToDoTask/UpdateModal";
import { useCallback, useState } from "react";
import { MdOutlineUploadFile } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IconButton } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import ProgressBar from "./ProgressBar";
import ProgressBars from "./ProgressBar";
import axios from "axios";



const boxData = [
  { title: "EMPLOYEMENT RELATED", count: 3 },
  { title: "IDENTIFICATION RELATED", count: 3 },
  { title: "EMPLOYEE UPLOADS", count: 0 },
  { title: "HR UPLOADS", count: 0 },

];

const Box = ({ title, count, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        width: 300,
        height: 170,
        marginRight: 20,
        marginBottom: 20,
        padding: 20,
        boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.1) inset",
        borderRadius: 10,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: hovered ? "#520d52" : "#ffffff",
        color: hovered ? "white" : "black",
        marginLeft: 20,
        cursor: "pointer", // Add cursor pointer on hover
        transition: "background-color 0.3s ease, color 0.3s ease", // Add smooth transition on hover
      }}
      onMouseEnter={() => setHovered(true)} // Set hovered state to true on mouse enter
      onMouseLeave={() => setHovered(false)} // Set hovered state to false on mouse leave
      onClick={onClick} // Handle click event
    >
      <h4>{title}</h4>
      <p style={{ color: "gray" }}>{count} files</p>
    </div>
  );
};

const rows = [];
  let currentRow = [];

  for (let i = 0; i < boxData.length; i++) {
    if (i % 4 === 0 && i !== 0) {
      rows.push(currentRow);
      currentRow = [];
    }
    currentRow.push(boxData[i]);
  }
  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

const Documents = () => {
  const [files, setFiles] = useState([]);
  const [boxData, setBoxData] = useState([]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const result = files.concat([{ id: files.length + 1, name: file.name }]);
    setFiles(result);
  };

  useEffect(() => {
    fetchBoxData();
  }, []);

  const fetchBoxData = async () => {
    try {
      const response = await axios.get("/myinfo/documents/Document");
      setBoxData(response.data);
    } catch (error) {
      console.error("Error fetching box data: ", error);
    }
  };

  const uploadFiles = async () => {
    try {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("Employment", file);
      });

      const response = await axios.post(`${process.env.REACT_APP_NODE_URL}/documents/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const [openUploadFiles, setOpenUploadFiles] = useState(false);
  const [openNewFolder, setOpenNewFolder] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    // accept: "image/*",
  });

  const [selectedBox, setSelectedBox] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleViewDetails = (data) => {
    setSelectedBox(data);
    setShowDetails(true);
  };
  return (
    <div
      className="leave__history__container loan_list"
      style={{ width: "auto" }}
    >
      <OrganizationHeader
        heading="Documents"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              voluptas dolor saepe necessitatibus deserunt!"
      />
      <div className="loan_field" style={{ marginTop: 40 }}>
        <div className="input-container" style={{ marginRight: 20 }}>
          <input
            className="loan_search"
            date="text"
            name=""
            id=""
            placeholder="Search here..."
          />
          <div className="loan-icon-container">
            <CiSearch className="icon" />
          </div>
        </div>
        <div>
          <select
            style={{
              boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.1) inset",
              border: "none",
              padding: "5px 10px",
              marginRight: 20,
            }}
          >
            <option value="" hidden>
              sort by
            </option>
            <option value="option1">2</option>
            <option value="option2">3</option>
          </select>
        </div>

        <div
          style={{
            display: "flex",
            boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.1) inset",
            border: "none",
            padding: "7px 10px 5px 10px",
            height: 32,
            marginRight: 20,
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => setOpenUploadFiles(true)}
        >
          <GoUpload />
          <p>Upload</p>
        </div>
        <div
          style={{
            display: "flex",
            boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.1) inset",
            border: "none",
            padding: "7px 10px 5px 10px",
            height: 32,
            marginRight: 20,
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => setOpenNewFolder(true)}
        >
          <FaRegFolderOpen />
          <p>New Folder</p>
        </div>
        <div
          style={{
            padding: 10,
            boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.1) inset",
            height: 32,
          }}
        >
          <IoGrid />
        </div>
      </div>
      <div style={{ marginTop: 40 }}>
            {rows.map((row, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  marginBottom: 20,
                }}
              >
                {row.map((box, idx) => (
                  <Box
                    key={idx}
                    title={box.title}
                    count={box.count}
                    onClick={() => handleViewDetails(box)} // Pass data to the handleViewDetails function
                  />
                ))}
              </div>
            ))}
          </div>
      <DocumentModal
        title="Upload Files"
        content={
          <>
            <div
              style={{
                textAlign: "center",
                width: "70%",
                border: "2px dashed black",
                borderRadius: 4,
                cursor: "pointer",
                margin: "30px auto 0px",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(180deg,#d2a3d7,transparent)",
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <div>
                  <span>
                    <MdOutlineUploadFile size={30} />
                  </span>
                </div>
                <p>Drag and Drop your files here</p>
                <p>or</p>
                <p style={{ color: "blue" }}>Browse</p>
              </div>
            </div>
            <div style={{ width: "70%", margin: "auto" }}>
              {files.map((file) => (
                <div
                  key={file.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <div>
                    <FaRegFileAlt size={20} />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      marginLeft: "10px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h5>{file.name}</h5>
                      <span className="close_btn">
                        <IconButton
                          onClick={() => {
                            setFiles(files.filter((fi) => fi.id !== file.id));
                          }}
                        >
                          <RxCross1 size={10} />
                        </IconButton>
                      </span>
                    </div>
                    <ProgressBars />
                  </div>
                </div>
              ))}
            </div>
          </>
        }
        okBtn="Upload"
        cancelBtn="Cancel"
        open={openUploadFiles}
        handleClose={() => {
          setOpenUploadFiles(false);
        }}
      />

      <DocumentModal
        title="New Folder"
        content={
          <div
            className="task_form"
            style={{ width: "70%", margin: "30px auto 0px" }}
          >
            <div className="task_field full-width">
              <span>Folder Name</span>
              <input type="text" style={{ border: "1px solid #ccc" }} />
            </div>
            <div className="full-width">
              <span>Description (Optional)</span>
              <textarea cols="30" rows="10"></textarea>
            </div>
          </div>
        }
        okBtn="Save"
        cancelBtn="Cancel"
        open={openNewFolder}
        handleClose={() => setOpenNewFolder(false)}
      />
    </div>
  );
};

export default Documents;
