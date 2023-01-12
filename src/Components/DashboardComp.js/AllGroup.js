import React from 'react'

const AllGroup = ({amount, status, type, date}) => {
  return (
    <div>
      <p>{type}</p>
      <p>{amount}</p>
      <p>{date}</p>
      <p>{status}</p>
    </div>
  )
}

export default AllGroup
