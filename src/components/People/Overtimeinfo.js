import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { FaCheck, FaRegFileAlt } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "./Overtime.css";
import ModalDetails from "../ToDoLeave/Modal";
import { tableData } from "./constants";

export function Overtime() {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_NODE_URL}/api/all/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any additional headers if required
                },
            });
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const responseData = await response.json();
            setData(responseData.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="compensation_list">
            {/* Your existing JSX code */}
        </div>
    );
}
