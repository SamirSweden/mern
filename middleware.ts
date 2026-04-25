// import { withAuth } from "next-auth/middleware"
//
// export default withAuth({
//     pages: {
//         signIn: "/login",
//     },
// })
//
// export const config = {
//     matcher: ["/chart/:path*", "/coins/:path*", "/dashboard/:path*"],
// }











import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    if (pathname.startsWith('/_next/static/') ||
        pathname.includes('.')) {
        return NextResponse.next()
    }

    if (pathname.startsWith('/start')) {
        return NextResponse.next()
    }

    // @ts-expect-error - next-auth типы ожидают Request,
    return withAuth(request, {
        pages: {
            signIn: "/login",
        },
    })
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|login|api/auth|start|start/.*).*)",
        "/chart/:path*",
        "/coins/:path*",
        "/dashboard/:path*"
    ],
}