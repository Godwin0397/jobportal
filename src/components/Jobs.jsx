import React from 'react'
import { useLoaderData } from 'react-router-dom'
import jobServices from '../services/jobServices'

export const loader = async () => {
    // get all jobs
    try {
        const { data } = await jobServices.getAllJobs()
        console.log("All jobs", data)
        return data
    } catch (error) {
        console.log("Error in loader", error.message)
    }
}

function Jobs() {
    const jobs = useLoaderData()
    console.log("Jobs", jobs)
  return (
    <>
        <h1>Jobs</h1>
        {
            jobs.map((item, index)=>{
                return <li key={index}>{item.title}</li>
            })
        }
    </>
  )
}

export default Jobs