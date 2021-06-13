import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
         <h1 className="saction-title">oops! it's dead end</h1>
         <Link to="/" className="btn btn-primary">Back to the home page</Link>
      </div>
     
    </section>
  );
}

export default Error
