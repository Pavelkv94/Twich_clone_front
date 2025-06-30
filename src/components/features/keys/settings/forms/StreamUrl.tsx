import { Input } from '@/components/ui/common/Input';
import CardContainer from '@/components/ui/elements/CardContainer';
import CopyButton from '@/components/ui/elements/CopyButton';
import { useTranslations } from 'next-intl';
import React from 'react'

interface StreamUrlProps {
    value: string | null;
}

const StreamUrl = ({ value }: StreamUrlProps) => {
    const t = useTranslations("dashboard.keys.url");

    return <CardContainer heading={t("heading")} description={t("description")} rightContent={
        <div className="flex items-center gap-x-4 w-full">
            <Input value={value ?? ""} placeholder={t("heading")} disabled />
            <CopyButton value={value} />
        </div>
    } />

}

export default StreamUrl