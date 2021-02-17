import React from 'react';
import SingleRes from './SingleRes'
import './ResyContainer.css'

const ResyContainer = ({ reservations, deleteReservation }) => {
  const reservsToDisplay = reservations.map((res, index) => {
    return (
      <SingleRes
        key={index}
        res={res}
        deleteReservation={deleteReservation}
      />
    )
  })

  return (
    <section className="resy-container">
      {reservsToDisplay}
    </section>
  )
}

export default ResyContainer;
