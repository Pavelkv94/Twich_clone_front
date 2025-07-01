import { Button } from '@/components/ui/common/Button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/common/Dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/common/Tabs';
import { FindChannelByUsernameQuery, useFindSponsorsByChannelQuery, useMakePaymentMutation } from '@/graphql/generated/graphql';
import { useAuth } from '@/hooks/useAuth';
import { useCurrent } from '@/hooks/useCurrent';
import { Medal } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

interface SupportButtonProps {
    channel: FindChannelByUsernameQuery['findChannelByUsername'];
}

const SupportButton = ({ channel }: SupportButtonProps) => {
    const t = useTranslations('stream.actions.support');
    const router = useRouter();

    const { isAuthenticated } = useAuth();
    const { user, isLoadingProfile } = useCurrent();

    const { data, loading: sponsorsLoading } = useFindSponsorsByChannelQuery({
        variables: {
            channelId: channel.id,
        },
        skip: !isAuthenticated,
    });

    const sponsors = data?.findSponsorsByChannel;

    const [makePayment, { loading: makePaymentLoading }] = useMakePaymentMutation({
        onCompleted: (data) => {
            router.push(data.makePayment.url);
        },
        onError: (error) => {
            toast.error(t('errorSupportMessage'));
        },
    });

    const isSponsor = sponsors?.some((sponsor) => sponsor.user.id === user?.id);
    const isOwnerChannel = user?.id === channel.id;

    if (isOwnerChannel || isLoadingProfile) return null;

    if (isSponsor) return (
        <Button disabled variant='secondary'>
            <Medal className='size-4' />
            {t('alreadySponsoring')}
        </Button>
    );

    return isAuthenticated ? (
        <Dialog>
            <DialogTrigger asChild>
                <Button disabled={sponsorsLoading} variant='secondary'>
                    <Medal className='size-4' />
                    {t('supportAuthor')}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <Tabs defaultValue={channel.sponsorshipPlans?.[0]?.id || ''}>
                    <TabsList className='mb-1'>
                        {channel.sponsorshipPlans?.map((plan, index) => (
                            <TabsTrigger key={index} value={plan.id}>
                                {plan.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {channel.sponsorshipPlans?.map((plan, index) => (
                        <TabsContent key={index} value={plan.id}>
                            <DialogTitle className='text-2xl'>{plan.price} {t('perMonth')}</DialogTitle>
                            {plan.description && <DialogDescription className='mt-2'>{plan.description}</DialogDescription>}
                            <Button className='mt-3 w-full' onClick={() => makePayment({ variables: { planId: plan.id } })} disabled={makePaymentLoading}>{t('choose')}</Button>
                        </TabsContent>
                    ))}
                </Tabs>
            </DialogContent>
        </Dialog>
    ) : (
        <Button disabled={sponsorsLoading} onClick={() => router.push('/account/login')} variant='secondary'>
            <Medal className='size-4' />
            {t('supportAuthor')}
        </Button>
    )
}

export default SupportButton