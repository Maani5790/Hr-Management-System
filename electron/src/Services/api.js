import axios from "axios";

const URL = "http://localhost:8000"

export const addUser = async (data) => {
  try {
    return await axios.post(`${URL}/add`)
  } catch (error) {
    console.log("error while fetching", error)
  }
}

export const getUsers = async () => {
  try {
    return await axios.get(`${URL}/`)

  } catch (error) {
    console.log("error while calling api", error)

  }
}

