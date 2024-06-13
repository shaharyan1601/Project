import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import "./employeetenure.css";
import TenureGraphGraph from './tenuregraph';
import TenureGraph from './tenuregraph';
import icon from "components/icon.png";

export default function Tenure() {
    const data = [
        { name: '25-34 years', tenure: 18 },
        { name: '35-44 years', tenure: 16 },
        { name: '45-54 years', tenure: 11 },
        { name: '54-65 years', tenure: 6 },
        { name: '65 years & older', tenure: 2 },
        { name: '18 years & over', tenure: 18 },
      ];
      return (
        <div className="leave__history__container loan_list">
        
      <h3>
        <img src= {icon} alt='' /> EMPLOYEE TENURE RATE
      </h3>
      <div className="leave__history__header">
        <p className='faq-paragraph'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas
          dolor saepe necessitatibus deserunt!
        </p>
      </div>
          <div>
            <TenureGraph />
          </div>
        </div>
      );
}