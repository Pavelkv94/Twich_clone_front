import { PropsWithChildren } from "react";
import CardContainer from "./CardContainer";
import { Switch } from "../common/Switch";
import { Skeleton } from "../common/Skeleton";

interface ToggleCardProps {
    heading: string;
    description: string;
    onChange: (value: boolean) => void;
    isDisabled?: boolean;
    value: boolean;
}

export default function ToggleCard({ heading, description, onChange, isDisabled, value, children }: PropsWithChildren<ToggleCardProps>) {
    return <CardContainer heading={heading} description={description} rightContent={
        <Switch checked={value} onCheckedChange={onChange} disabled={isDisabled} />
    } />

}


export const ToggleCardSkeleton = () => {
    return <Skeleton className="mt-6 h-20 w-full" />
}