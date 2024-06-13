import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";

const ProgressBars = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [progress]);

  return <ProgressBar now={progress} style={{ height: 10 }} />;
};

export default ProgressBars;
