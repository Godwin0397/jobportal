import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {

  const [active, setActive] = useState("Overview")
  const items = ["Overview", "JobListing", "Application", "Profile"]

  return (
    <div className='list-group' style={{ height: "100vh" }}>
      {
        items.map((item, index) => {
          return (
            <Link key={index} to={`/dashboard/${item.toLowerCase()}`} className={`list-group-item list-group-item-action ${active===item ? 'active' : ''}`} onClick={() => setActive(item)}>
              {item}
            </Link>
          )
        })
      }
    </div>
  )
}

export default Sidebar