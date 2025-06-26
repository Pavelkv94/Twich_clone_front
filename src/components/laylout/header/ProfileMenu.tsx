'use client'

import { useCurrent } from '@/hooks/useCurrent';
import { useAuth } from '@/hooks/useAuth';
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation';
import React from 'react'
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/common/DropdownMenu';
import { DropdownMenu } from '@/components/ui/common/DropdownMenu';
import { LayoutDashboard, Loader, LogOut, User } from 'lucide-react';
import ChannelAvatar from '@/components/ui/elements/ChannelAvatar';
import Link from 'next/link';
import { useLogoutUserMutation } from '@/graphql/generated/graphql';
import { toast } from 'sonner';
import Notifications from './notifications/Notifications';

const ProfileMenu = () => {
    const t = useTranslations("layout.headerMenu.profileMenu");
    const router = useRouter();

    const { exit } = useAuth();
    const { user, isLoadingProfile } = useCurrent();

    const [logoutUser, { loading: isLoggingOut }] = useLogoutUserMutation({
        onCompleted: () => {
            exit();
            toast.success(t("logoutSuccess"));
            router.push("/");
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    return isLoadingProfile || !user ?
        <Loader className='size-6 animate-spin text-muted-foreground' /> :
        <>
            <Notifications />
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <ChannelAvatar channel={{
                        username: user?.username || "",
                        avatar: user?.avatar || "",
                    }} size="sm" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-[230px]'>
                    <div className="flex items-center gap-x-3 p-2">
                        <ChannelAvatar channel={{
                            username: user?.username || "",
                            avatar: user?.avatar || "",
                        }} />
                        <h2 className='font-medium text-foreground'>{user.username}</h2>
                    </div>

                    <DropdownMenuSeparator />
                    <Link href={`/${user.username}`}>
                        <DropdownMenuItem>
                            <User className='size-4 mr-2' />
                            {t("channel")}
                        </DropdownMenuItem>
                    </Link>
                    <Link href="/dashboard/settings">
                        <DropdownMenuItem>
                            <LayoutDashboard className='size-4 mr-2' />
                            {t("dashboard")}
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={() => logoutUser()}>
                        <LogOut className='size-4 mr-2' />
                        {t("logout")}
                    </DropdownMenuItem>



                </DropdownMenuContent>
            </DropdownMenu>
        </>

}

export default ProfileMenu