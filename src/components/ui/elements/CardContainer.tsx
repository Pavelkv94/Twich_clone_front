import { PropsWithChildren, ReactNode } from "react";
import { Card } from "../common/Card";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

interface CardContainerProps {
    heading: string;
    description: string;
    Icon?: IconType | LucideIcon;
    rightContent?: ReactNode;
}

const CardContainer = ({ children, heading, description, rightContent, Icon }: PropsWithChildren<CardContainerProps>) => {

    return <Card className="p-4">
        <div className="flex justify-between items-center">
            <div className="flex flex-row items-center gap-x-4">
                {Icon && <div className="rounded-full bg-foreground p-2.5">
                    <Icon className="size-7 text-secondary" />
                </div>}
            <div className="space-y-1">
                <h2 className="tracking-wide font-semibold">{heading}</h2>
                <p className="text-sm text-muted-foreground max-w-4xl">{description}</p>
            </div>
            </div>
            {rightContent && <div>{rightContent}</div>}
        </div>

        {children && <div className="mt-4">{children}</div>}
    </Card>
}

export default CardContainer;