import React from 'react';
import './SingleRes.css'

const SingleRes = ({res}) => {
  console.log(res)
  return (
    <article className="res-wrapper">
      <h2 className="res-name">{res.name}</h2>
      <h3 className="res-date">{res.date}</h3>
      <p className="res-time">{res.time}</p>
      <p className="res-guests">Number of guests: {res.number}</p>
      <button className="res-cancel">Cancel</button>
    </article>
  )
}

export default SingleRes;
