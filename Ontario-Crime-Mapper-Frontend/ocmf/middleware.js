import { NextResponse } from "next/server";

export default function middleware(req) {
  const token = req.cookies.get('refresh_jwt');
  const url = req.url;
  // console.log(`token: ${token}`);
  
  if (!token && url.includes('/ProtectedRoutes')) {
    return NextResponse.redirect('http://localhost:3000/loginPage')
  }
  
  if (token && url === 'http://localhost:3000/loginPage') {
    return NextResponse.redirect('http://localhost:3000/ProtectedRoutes/homePage')
  }
  
  
}