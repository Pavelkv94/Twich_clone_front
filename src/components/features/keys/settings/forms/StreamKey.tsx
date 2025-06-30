import { Button } from '@/components/ui/common/Button';
import { Input } from '@/components/ui/common/Input';
import CardContainer from '@/components/ui/elements/CardContainer';
import CopyButton from '@/components/ui/elements/CopyButton';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'

interface StreamKeyProps {
    value: string | null;
}

const StreamKey = ({ value }: StreamKeyProps) => {
    const t = useTranslations("dashboard.keys.key");

    const [isShow, setIsShow] = useState(false);


    const Icon = isShow ? EyeOffIcon : EyeIcon;

    return <CardContainer heading={t("heading")} description={t("description")} rightContent={
        <div className="flex items-center gap-x-4 w-full">
            <Input value={value ?? ""} placeholder={t("heading")} disabled type={isShow ? "text" : "password"} />
            <CopyButton value={value} />
            <Button variant="ghost" size="icon" onClick={() => setIsShow(!isShow)}>
                <Icon className="size-4" />
            </Button>
        </div>
    } />

}

export default StreamKey