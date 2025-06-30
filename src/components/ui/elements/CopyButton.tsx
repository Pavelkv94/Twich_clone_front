import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'
import { Button } from '../common/Button';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';
import { Check } from 'lucide-react';

interface CopyButtonProps {
    value: string | null;
}

const CopyButton = ({ value }: CopyButtonProps) => {
    const t = useTranslations("components.copyButton");

    const [isCopied, setIsCopied] = useState(false);

    const onCopy = () => {
        if (!value) return

        navigator.clipboard.writeText(value);
        setIsCopied(true);
        toast.success(t("successMessage"));
        setTimeout(() => setIsCopied(false), 2000);
    }

    const Icon = isCopied ? Check : Copy;

    return (
        <Button variant="ghost" size="icon" onClick={onCopy} disabled={!value || isCopied}>
            <Icon className="size-4" />
        </Button>
    )
}

export default CopyButton