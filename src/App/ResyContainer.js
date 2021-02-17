import React from 'react';
import './ResyContainer.css'

const ResyContainer = ({ reservations }) => {
  const reservsToDisplay = reservations.map((res, index) => {
    return <h1 key={index}>{res.name}</h1>
  })

  return (
    <section className="resy-container">
      {reservsToDisplay}
    </section>
  )
}

export default ResyContainer;
