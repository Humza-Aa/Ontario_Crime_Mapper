import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import axios from "../../api/axios";

export default function homePage() {
  const logout_url = "/api/logout";
  const router = useRouter();

  // const logout = () => {
  //   Cookies.remove('refresh_jwt');
  //   router.push('/')
  // }

  const logout = async (e) => {
    try {
      const response = await axios.get(logout_url, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
    } catch (error) {
      console.log(error);
    }
    router.push("http://localhost:3000/loginPage");
  };

  return (
    <>
      <div>homepage welcome</div>
      <button onClick={logout}>logout</button>
    </>
  );
}
