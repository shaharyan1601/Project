import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "react-bootstrap";
import { BiSolidDownArrow } from "react-icons/bi";

export default function DrawTypeComp({ compType }) {
  const [color, setColor] = useState({
    draw: "",
    text: "",
  });
  const signatureCanvasRef = useRef();
  //   const clearSignature = () => {
  //     signatureCanvasRef.current.clear();
  //   };
  const getSignatureImage = () => {
    return signatureCanvasRef.current.toDataURL();
  };
  const handleColor = (colour, compType) => {
    if (compType === "draw") {
      setColor({ ...color, draw: colour });
    } else {
      setColor({ ...color, text: colour });
    }
  };
  
  return (
    <div className="draw-comp">
      {compType === "draw" ? (
        <SignatureCanvas
          ref={signatureCanvasRef}
          canvasProps={{
            width: 700,
            height: 200,
            className: "signature-canvas",
          }}
          penColor={color.draw}
        />
      ) : null}
      {compType === "type" ? (
        <div className="custom-select-container">
          <div className="custom-select-wrapper">
            <div className="custom-select">
              <select id="customSelect" className="custom-select">
                <option hidden>Select Type Face</option>
                <option value="option1">Option 2</option>
                <option value="option2">Option 3</option>
              </select>
              <div className="custom-select-icon">
                <BiSolidDownArrow className="icon" />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {compType === "type" ? (
        <input
          className="type-text"
          placeholder="Draw your text here...."
          style={{ "--color": color.text }}
        />
      ) : (
        <span className="draw-text">Draw your text here....</span>
      )}

      <div className="color-list">
        <div
          style={{ backgroundColor: "black" }}
          onClick={() => handleColor("black", compType)}
        ></div>
        <div
          style={{ backgroundColor: "blue" }}
          onClick={() => handleColor("blue", compType)}
        ></div>
        <div
          style={{ backgroundColor: "green" }}
          onClick={() => handleColor("green", compType)}
        ></div>
        <div
          style={{ backgroundColor: "red" }}
          onClick={() => handleColor("red", compType)}
        ></div>
      </div>
      <label>
        <input type="checkbox" />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </span>
      </label>

      <Button
        className="first_btn"
        onClick={() => alert(`Signature Image URL: ${getSignatureImage()}`)}
      >
        Save
      </Button>
    </div>
  );
}
