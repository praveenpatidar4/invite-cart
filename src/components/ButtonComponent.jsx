import React from 'react'

function ButtonComponent({ children, outlined }) {
  return (
    <button className={`ic_btn btn ${!outlined ? 'ic_btn_primary' : 'ic_btn_primary_outline'}`}>
      {children}
    </button>
  )
}

export default ButtonComponent
