import { NextRequest, NextResponse } from "next/server";

// middleware to check if the user is logged in and redirect to the dashboard if they are
export default function middleware(request: NextRequest) {
    const session = request.cookies.get("epic_session")?.value;
    const isAuthPage = request.url.includes("/account");
    if (isAuthPage) {
        if (session) {
            return NextResponse.redirect(new URL("/dashboard/settings", request.url));
        }
        return NextResponse.next();
    }


    if (!session) {
        return NextResponse.redirect(new URL("/account/login", request.url));
    }

}
export const config = {
    matcher: ["/account/:path*", "/dashboard/:path*"],
}