import { useContext } from "react";
import axios from "../api/axios";

export default async function TokenVerification() {
  //   console.log(`err: ${err}`);
  const checkTokenURL = "/api/verifyToken";
 
  try {
    const result = await axios.get(checkTokenURL, {
      withCredentials: true,
    });
    // console.log(result.status);
    return result.status;
  } catch (err) {
    console.log(`err: ${err}`);
    return result.status;
  }
}
