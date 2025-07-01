import React from 'react'
import { Button } from '@/components/ui/common/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/common/Popover';
import { FindChannelByUsernameQuery } from '@/graphql/generated/graphql';
import { Share } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { TelegramShareButton, WhatsappShareButton, FacebookShareButton, TwitterShareButton } from 'react-share';
import { FaFacebook, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

interface ShareActionsProps {
    channel: FindChannelByUsernameQuery['findChannelByUsername'];
}

export default function ShareActions({ channel }: ShareActionsProps) {
    const t = useTranslations('stream.actions.share');

    const shareUrl = `${window.location.origin}/${channel.username}`;


    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant='ghost' size='icon'>
                    <Share className='size-5' />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[300px]' side='top'>
                <h2 className='font-medium'>{t('heading')}</h2>
                <div className='mt-4 grid grid-cols-4 gap-3'>
                    <TelegramShareButton url={shareUrl}>
                        <div className='flex h-14 items-center justify-center rounded-md bg-sky-500 transition-transform hover:-translate-y-1.5'>
                            <FaTelegram className='size-7 text-white' />
                        </div>
                    </TelegramShareButton>
                    <WhatsappShareButton url={shareUrl}>
                        <div className='flex h-14 items-center justify-center rounded-md bg-green-500 transition-transform hover:-translate-y-1.5'>
                            <FaWhatsapp className='size-7 text-white' />
                        </div>
                    </WhatsappShareButton>
                    <FacebookShareButton url={shareUrl}>
                        <div className='flex h-14 items-center justify-center rounded-md bg-sky-500 transition-transform hover:-translate-y-1.5'>
                            <FaFacebook className='size-7 text-white' />
                        </div>
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl}>
                        <div className='flex h-14 items-center justify-center rounded-md bg-sky-500 transition-transform hover:-translate-y-1.5'>
                            <FaTwitter className='size-7 text-white' />
                        </div>
                    </TwitterShareButton>
                </div>


            </PopoverContent>
        </Popover>
    )
}