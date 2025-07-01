import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/common/Card';
import { Skeleton } from '@/components/ui/common/Skeleton';
import { FindChannelByUsernameQuery } from '@/graphql/generated/graphql';
import { getSocialIcon } from '@/utils/get-social-icon';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'

interface AboutChannelProps {
    channel: FindChannelByUsernameQuery['findChannelByUsername'];
}

const AboutChannel = ({ channel }: AboutChannelProps) => {
    const t = useTranslations('stream.aboutChannel');
    return (
        <Card className='mt-6'>
            <CardHeader className='p-4'>
                <CardTitle className='text-xl'>{t('heading')} {channel.displayName}</CardTitle>
            </CardHeader>
            <CardContent className='-mt-1 space-y-2 px-4'>
                <div className='text-[15px] text-foreground'>
                    {channel.followings?.length} {t('followersCount')}
                </div>
                <div className='text-[15px] text-muted-foreground'>
                    {channel.bio || t('noDescription')}
                </div>
                {channel.socialLinks?.length ? (
                    <div className='grid gap-x-3 md:grid-cols-3 xl:grid-cols-8'>
                        {channel.socialLinks?.map((link, index) => {
                            const Icon = getSocialIcon(link.url);

                            return <Link
                                key={index}
                                href={link.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center pr-1 text-[15px] hover:text-primary'
                            >
                                <Icon className='size-4 mr-2' />
                                {link.title}
                            </Link>
                        }
                        )}
                    </div>
                ) : null}
            </CardContent>
        </Card>
    )
}

export default AboutChannel

export const AboutChannelSkeleton = () => {
    return <Skeleton className='mt-6 h-36 w-full' />
}