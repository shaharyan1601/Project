import React from 'react'
import { useNavigate } from 'react-router-dom'


const ErrorPage = () => {

  const navigate = useNavigate()


  return (
    <div>
      <h1>Unauthorized Page</h1>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default ErrorPage