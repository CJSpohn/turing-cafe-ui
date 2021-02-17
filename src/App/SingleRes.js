import React from 'react'

const SingleRes = ({res}) => {
  console.log(res)
  return (
    <article>
      <h2>{res.name}</h2>
    </article>
  )
}

export default SingleRes;
