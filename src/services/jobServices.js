import { instance, protectedInstance } from "./instance";

const jobServices = {
  // create job
  createJob: async (job) => {
    return await protectedInstance.post("/jobs", job);
  },

  // get all jobs
  getAllJobs: async () => {
    return await protectedInstance.get("/jobs");
  },

  // get job by id
  getJobById: async (id) => {
    return await instance.get(`/jobs/${id}`);
  },

  // update job
  updateJob: async (id, job) => {
    return await protectedInstance.put(`/jobs/${id}`, job);
  },

  // delete job
  deleteJob: async (id) => {
    return await protectedInstance.delete(`/jobs/${id}`);
  },
};

export default jobServices;