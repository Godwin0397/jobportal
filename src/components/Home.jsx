import React from 'react'

function Home() {
  return (
    <>
    <div
      className="container d-flex justify-content-center mt-5"
    //   style={{ height: "100vh" }}
    >
      <div className="card w-50 p-4">
        <div className="card-header text-center">
          <h3>Home</h3>
        </div>
        <div className="card-body">
            <div className="mb-3">
             <p>Welcome to the Job Portal! Please register or login to continue.</p>
             <p className='text-muted'>This is a simpe Job Portal application built with React and Node JS. It allows user to register, login and view job listing.</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home