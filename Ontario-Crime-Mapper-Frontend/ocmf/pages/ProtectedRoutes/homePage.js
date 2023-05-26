import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import axios from '../../api/axios';


export default function homePage() {
  const logout_url = "/api/logout";
  const router = useRouter();

  // const logout = () => {
  //   Cookies.remove('refresh_jwt');
  //   router.push('/')
  // }

  const logout = async (e) => {
    try {
      const response = await axios.get(
        logout_url,
        {},
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
          credentials: "include",
          // path: COOKIE_PATH,
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>homepage welcome</div>
      <button onClick={logout}>
        logout
      </button>
    </>
  );
}
