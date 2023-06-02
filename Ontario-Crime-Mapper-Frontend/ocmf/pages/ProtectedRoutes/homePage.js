import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "../../api/axios";
import dynamic from "next/dynamic";
import TweetsTable from "../../Components/Tweets_Table/TweetsTable";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import TokenVerification from "../../Components/TokenVerification";
import GetTweetData from "../../api/GetTweetData";

const MapWithNoSSR = dynamic(() => import("../../Components/Map/Map"), {
  ssr: false,
});

export async function getServerSideProps({ req }) {
  // const { token } = cookie.parse(req.headers.cookie.refresh_jwt)
  // console.log(req)
  const data = await TokenVerification(req);
  const tweets = await GetTweetData(req);
  const tweet = tweets.data;

  // console.log(tweets);
  // does not allow access to page if not logged in
  if (data != 200) {
    return {
      redirect: {
        destination: "/loginPage",
        permanent: false,
      },
    };
  }

  return {
    props: { tweet },
  };
}

export default function homePage({ tweet }) {
  const logout_url = "/api/logout";
  const router = useRouter();
  console.log(tweet)
  // const { auth, setAuth } = useContext(AuthContext);
  // const [validLogin, setValidLogin] = useState("");

  // useEffect(() => {
  //   getServerSideProps(auth);
  // }, []);

  // useEffect(() => {
  //   if (validLogin != 200) {
  //     router.push("http://localhost:3000/loginPage");
  //   }
  // }, [validLogin]);

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
      <TweetsTable props={tweet}/>
    </>
  );
}
