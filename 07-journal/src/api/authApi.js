
import axios from 'axios'

const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key: "AIzaSyCxJ5L_Cd_vgeuMOpdRB57RAToYr6mMthQ",
  },
});

export default authApi