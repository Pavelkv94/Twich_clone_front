import { NextRequest, NextResponse } from "next/server";

// middleware to check if the user is logged in and redirect to the dashboard if they are
export default function middleware(request: NextRequest) {
    const session = request.cookies.get("epic_session")?.value;
    const pathname = request.nextUrl.pathname;

    const isAuthPage = pathname.startsWith("/account");
    const isDeactivatePage = pathname === "/account/deactivate";
    const isDashboardPage = pathname.startsWith("/dashboard");

    if (!session && isDashboardPage) {
        return NextResponse.redirect(new URL("/account/login", request.url));
    }

    if (!session && isDeactivatePage) {
        return NextResponse.redirect(new URL("/account/login", request.url));
    }

    if (session && isAuthPage && !isDeactivatePage) {
        return NextResponse.redirect(new URL("/dashboard/settings", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/account/:path*", "/dashboard/:path*"],
};
