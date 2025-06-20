import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/shared/Card";
import { PropsWithChildren } from "react";
import Image from "next/image";
import { Button } from "@/components/shared/Button";
import Link from "next/link";

type AuthWrapperProps = {
    heading: string;
    backButtonLabel?: string;
    backButtonHref?: string;
}


export default function AuthWrapper({ children, heading, backButtonLabel, backButtonHref }: PropsWithChildren<AuthWrapperProps>) {
    return <div className="flex h-full items-center justify-center">
        <Card className="w-[450px]">
            <CardHeader className="flex flex-row items-center justify-center gap-x-4">
                <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
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