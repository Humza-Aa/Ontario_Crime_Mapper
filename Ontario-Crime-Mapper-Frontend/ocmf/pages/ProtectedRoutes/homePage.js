import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "../../api/axios";
import dynamic from "next/dynamic";
import TweetsTable from "../../Components/Tweets_Table/TweetsTable";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import TokenVerification from "../../Components/TokenVerification";

const MapWithNoSSR = dynamic(() => import("../../Components/Map/Map"), {
  ssr: false,
});

export default function homePage() {
  const logout_url = "/api/logout";
  const router = useRouter();
  const { auth, setAuth } = useContext(AuthContext);
  const [validLogin, setValidLogin] = useState("");

  useEffect(() => {
    TokenVerification().then((res) => {
      setValidLogin(res);
    });
  }, []);

  useEffect(() => {
    if (validLogin != 200) {
      router.push("http://localhost:3000/loginPage");
    }
  }, [validLogin]);

  const logout = async (e) => {
    try {
      const response = await axios.get(logout_url, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      setAuth({});
    } catch (error) {
      console.log(error);
    }
    router.push("http://localhost:3000/loginPage");
  };

  return (
    <>
      <div>homepage welcome</div>
      <button onClick={logout}>logout</button>
      <MapWithNoSSR />
      <TweetsTable />
    </>
  );
}
