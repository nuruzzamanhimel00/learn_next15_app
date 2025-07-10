import {NextResponse} from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  // your async logic here step: 1
  //  return NextResponse.redirect(new URL('/', request.url))
  // step: 2 
  if(request.nextUrl.pathname === '/profile') {   return NextResponse.redirect(new URL('/', request.url)) } 
  return NextResponse.next()
  // step:3 Get a cookie from the request
  // const cookieValue = request
  //   .cookies
  //   .get('myCookie')
  //   ?.value;

  // // Create a response (could be a redirect or NextResponse.next())
  // const response = NextResponse.next();
  // if (cookieValue != 'cookieValueHere') {
  //   // Set a cookie in the response
  //   response
  //     .cookies
  //     .set('myCookie', 'cookieValueHere', {
  //       httpOnly: true,
  //       path: '/',
  //       maxAge: 60 * 60 * 24, // 1 day
  //     });
  // }

  // return response

}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/profile/:path*'
}