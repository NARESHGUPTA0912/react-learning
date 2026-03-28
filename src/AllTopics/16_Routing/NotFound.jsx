import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen grid place-items-center text-5x1'>
        <span> Oops...</span>
        <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFound;
