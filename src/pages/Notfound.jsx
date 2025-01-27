import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <section className='page notfound'>
          <div className="content text-center">
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg" alt="notfound" />
            <Link to={'/'}>RETURN TO HOME PAGE</Link>
          </div>
        </section>
    </>
  )
}

export default NotFound