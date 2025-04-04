import { instance, protectedInstance } from "./instance";

const userServices = {
  // register user
  registerUser: async (name, email, password, location) => {
    return await instance.post("/users/", {
      name: name,
      username: email,
      passwordHash: password,
      location: location,
    });
  },

  // login user
  loginUser: async (email, password) => {
    return await instance.post(
      "/users/login",
      {
        username: email,
        passwordHash: password,
      },
      {
        withCredentials: true,
      }
    );
  },

  // get all users
  getAllUsers: async () => {
    return await protectedInstance.get("/users");
  },

  // get user by id
  getUserById: async (id) => {
    return await protectedInstance.get(`/users/getUser`);
  },

  // update user
  updateUser: async (id, user) => {
    return await protectedInstance.put(`/users/${id}`, user);
  },

  // delete user
  deleteUser: async (id) => {
    return await protectedInstance.delete(`/users/${id}`);
  },
  
  //   logout user
  logoutUser: async () => {
    return await protectedInstance.get("/users/logout", {
      withCredentials: true,
    });
  },
};

export default userServices;
