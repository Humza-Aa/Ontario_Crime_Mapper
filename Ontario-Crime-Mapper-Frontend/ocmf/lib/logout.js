import axios from "./axios";


const logout = async (router, setAuth) => {
  const logout_url = "/api/logout";
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
  router.push(`${window.location.origin}/loginPage`);
};

module.exports = logout;