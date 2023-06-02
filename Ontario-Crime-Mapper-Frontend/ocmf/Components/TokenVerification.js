import { useContext } from "react";
import axios from "../api/axios";

export default async function TokenVerification(req) {
  //   console.log(`err: ${err}`);
  const checkTokenURL = "/api/verifyToken";
  const cookies = req.cookies.refresh_jwt;
  // console.log(cookies);
  try {
    const result = await axios.get(
      checkTokenURL,
      {
        withCredentials: true,
        headers: {
          cookies: cookies,
        },
      },
    );
    // console.log(result.status);
    return result.status;
  } catch (err) {
    console.log(`err: ${err}`);
    return 401;
  }
}
