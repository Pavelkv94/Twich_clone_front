import { PropsWithChildren, ReactNode } from "react";
import { Card } from "../common/Card";

interface CardContainerProps {
    heading: string;
    description: string;
    rightContent?: ReactNode;
}

const CardContainer = ({ children, heading, description, rightContent }: PropsWithChildren<CardContainerProps>) => {

    return <Card className="p-4">
        <div className="flex justify-between items-center">
            <div className="space-y-1">
                <h2 className="tracking-wide font-semibold">{heading}</h2>
                <p className="text-sm text-muted-foreground max-w-4xl">{description}</p>
            </div>
            {rightContent && <div>{rightContent}</div>}
        </div>
        {children && <div className="mt-4">{children}</div>}
    </Card>
}

export default CardContainer;