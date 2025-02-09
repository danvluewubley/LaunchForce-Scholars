import React, { useEffect } from 'react'

export const EmailList = () => {
  useEffect(()=>{
    document.title = "Email List"
  })

  return (
    <div>
      <p>Email List</p>
    </div>
  );
}