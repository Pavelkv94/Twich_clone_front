import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/common/Card";
import { PropsWithChildren } from "react";
import { Button } from "@/components/ui/common/Button";
import Link from "next/link";
import LogoImage from "@/components/images/LogoImage";

type AuthWrapperProps = {
    heading: string;
    backButtonLabel?: string;
    backButtonHref?: string;
}


export default function AuthWrapper({ children, heading, backButtonLabel, backButtonHref }: PropsWithChildren<AuthWrapperProps>) {
    return <div className="flex h-full items-center justify-center">
        <Card className="w-[450px]">
            <CardHeader className="flex flex-row items-center justify-center gap-x-4">
                <LogoImage />
                <CardTitle>{heading}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter className="-mt-2">
                {backButtonLabel && backButtonHref && <Button variant="ghost" className="w-full">
                    <Link href={backButtonHref}>{backButtonLabel}</Link>
                </Button>}
            </CardFooter>
        </Card>
    </div>;
}