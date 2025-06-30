import { Button } from '@/components/ui/common/Button';
import { DialogFooter, DialogHeader, Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/common/Dialog';
import { useTranslations } from 'next-intl';
import React from 'react'

const InstructionModal = () => {
    const t = useTranslations("dashboard.keys.instructionModal");
    return <Dialog>
        <DialogTrigger asChild>
            <Button variant="secondary">
                {t("trigger")}
            </Button>
        </DialogTrigger>
        <DialogContent className="max-h-[80vh] max-w-[800px] overflow-y-auto">
            <DialogHeader>
                <DialogTitle className="text-xl">{t("heading")}</DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">{t("description")}</DialogDescription>
            </DialogHeader>
            <h2 className="text-lg font-semibold">{t("step1Title")}</h2>
            <p className="text-sm text-muted-foreground">{t("step1Description")}</p>
            <ol>
                <li className="text-sm text-muted-foreground">
                    <strong>{t("downloadOBS")}</strong>
                    <br />
                    {t("downloadOBSDescription")}
                    <a href="https://obsproject.com/download" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{t("obsLinkText")}</a>
                </li>
                <li className="text-sm text-muted-foreground">
                    <strong>{t("copyKeys")}</strong>
                    <br />
                    {t("copyKeysDescription")}
                </li>
            </ol>
            <h2 className="text-lg font-semibold">{t("step2Title")}</h2>
            <p className="text-sm text-muted-foreground">{t("step2Description")}</p>
            <ol>
                <li className="text-sm text-muted-foreground">
                    <strong>{t("openOBS")}</strong>
                    <br />
                    {t("openOBSDescription")}
                </li>
                <li className="text-sm text-muted-foreground">
                    <strong>{t("openStreamSettings")}</strong>
                    <br />
                    {t("openStreamSettingsDescription")}
                </li>
                <li className="text-sm text-muted-foreground">
                    <strong>{t("enterDetails")}</strong>
                    <br />
                    {t("enterDetailsDescription")}
                </li>
                <li className="text-sm text-muted-foreground">
                    <strong>{t("saveSettings")}</strong>
                    <br />
                    {t("saveSettingsDescription")}
                </li>
            </ol>
            <h2 className="text-lg font-semibold">{t("step3Title")}</h2>
            <p className="text-sm text-muted-foreground">{t("step3Description")}</p>
            <ol>
                <li className="text-sm text-muted-foreground">
                    <strong>{t("startStreaming")}</strong>
                    <br />
                    {t("startStreamingDescription")}
                </li>
                <li className="text-sm text-muted-foreground">
                    <strong>{t("monitorStreaming")}</strong>
                    <br />
                    {t("monitorStreamingDescription")}
                </li>
            </ol>

            <p className="mt-4 text-sm text-muted-foreground">{t("congratulations")}</p>
            <DialogFooter>
                <DialogClose asChild>
                    <Button variant="secondary">{t("close")}</Button>
                </DialogClose>
            </DialogFooter>
        </DialogContent>
    </Dialog>
}

export default InstructionModal