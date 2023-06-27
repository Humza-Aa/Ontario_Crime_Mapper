import { NextResponse } from "next/server";
import TokenVerification from "./Components/TokenVerification";

export default function middleware(req) {
  // // const result = TokenVerification();
  const token = req.cookies.get("refresh_jwt");
  const url = req.url;
  // console.log(`Result: ${result}`);
  // if (!token && url.includes("/ProtectedRoutes")) {
  //   return NextResponse.redirect(`${req.nextUrl.origin}/loginPage`);
  // }
}

