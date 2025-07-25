import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/common/Tabs';
import Heading from '@/components/ui/elements/Heading';
import { useTranslations } from 'next-intl';
import React from 'react'
import ChangeAvatarForm from './profile/ChangeAvatarForm';
import ChangeInfoForm from './profile/ChangeInfoForm';
import SocialLinksForm from './profile/social-links-form/SocialLinksForm';
import ChangeEmailForm from './account/ChangeEmailForm';
import ChangePasswordForm from './account/ChangePasswordForm';
import WrapperTotp from './account/totp/WrapperTotp';
import DeactivateCard from './account/DeactivateCard';
import ChangeThemeForm from './appearence/ChangeThemeForm';
import ChangeLangForm from './appearence/ChangeLangForm';
import ChangeColorForm from './appearence/ChangeColorForm';
import ChangeNotificationsSettingsForm from './notifications/ChangeNotificationsSettingsForm';
import SessionsList from './sessions/SessionsList';

const UserSettings = () => {
    const t = useTranslations("dashboard.settings");


    return (
        <div>
            <Heading title={t("header.heading")} description={t("header.description")} size='lg' />
            <Tabs defaultValue='profile' className='mt-3 w-full'>
                <TabsList className='grid max-w-2xl grid-cols-5'>
                    <TabsTrigger value='profile'>{t("header.profile")}</TabsTrigger>
                    <TabsTrigger value='account'>{t("header.account")}</TabsTrigger>
                    <TabsTrigger value='appearence'>{t("header.appearence")}</TabsTrigger>
                    <TabsTrigger value='notifications'>{t("header.notifications")}</TabsTrigger>
                    <TabsTrigger value='sessions'>{t("header.sessions")}</TabsTrigger>
                </TabsList>
                <TabsContent value='profile'>
                    <div className='mt-5 space-y-6'>
                        <Heading title={t("profile.header.heading")} description={t("profile.header.description")} />
                        <ChangeAvatarForm />
                        <ChangeInfoForm />
                        <SocialLinksForm />
                    </div>
                </TabsContent>
                <TabsContent value='account'>
                    <div className='mt-5 space-y-6'>
                        <Heading title={t("account.header.heading")} description={t("account.header.description")} />
                        <ChangeEmailForm />
                        <ChangePasswordForm />
                        <Heading title={t("account.header.securityHeading")} description={t("account.header.securityDescription")} />
                        <WrapperTotp />
                        <Heading title={t("account.deactivation.heading")} description={t("account.deactivation.description")} />
                        <DeactivateCard />
                    </div>
                </TabsContent>
                <TabsContent value='appearence'>
                    <div className='mt-5 space-y-6'>
                        <Heading title={t("appearence.header.heading")} description={t("appearence.header.description")} />
                        <ChangeThemeForm />
                        <ChangeLangForm />
                        <ChangeColorForm />
                    </div>
                </TabsContent>
                <TabsContent value='notifications'>
                    <div className='mt-5 space-y-6'>
                        <Heading title={t("notifications.header.heading")} description={t("notifications.header.description")} />
                        <ChangeNotificationsSettingsForm />
                    </div>
                </TabsContent>
                <TabsContent value='sessions'>
                    <div className='mt-5 space-y-6'>
                        <Heading title={t("sessions.header.heading")} description={t("sessions.header.description")} />
                        <SessionsList />
                    </div>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default UserSettings