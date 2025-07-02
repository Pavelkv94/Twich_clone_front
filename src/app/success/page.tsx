import { Button } from '@/components/ui/common/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/common/Card';
import { NO_INDEX_NO_FOLLOW } from '@/libs/constants/seo.constants';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export async function generateMetadata() {
    const t = await getTranslations('success');

    return {
        title: t('heading'),
        description: t('description'),
        ...NO_INDEX_NO_FOLLOW,
    };
}

export default async function SuccessPage(props: { searchParams: Promise<{ price: number, username: string }> }) {
    const t = await getTranslations('success');

    const { price, username } = await props.searchParams;

    if (!price || !username) {
        redirect('/');
    }

    return (
        <div className='flex min-h-screen items-center justify-center'>
            <Card className='w-full max-w-2xl'>
                <CardHeader>
                    <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10'>
                        <CheckCircle className="h-10 2-10 text-primary" />
                    </div>
                    <CardTitle className='text-3xl font-bold'>{t('heading')}</CardTitle>
                </CardHeader>
                <CardContent className='space-y-4'>
                    <div className='rounded-lg bg-muted p-4'>
                        <h3 className='mb-2font-semibold'>{t('details.heading')}</h3>
                        <ul className='space-y-2'>
                            <li className='flex items-center'>
                                <span>
                                    {t('details.price')} {price}
                                </span>
                            </li>
                            <li className='flex items-center'>
                                <span>
                                    {t('details.duration')} 1 month
                                </span>
                            </li>
                            <li className='flex items-center'>
                                <span>
                                    {t('details.channel')} {username}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <p className='text-center text-muted-foreground'>{t('congratulations')}</p>
                </CardContent>
                <CardFooter>
                    <div className='flex gap-x-4'>
                        <Link href='/'>
                            <Button className='w-full'>{t('backToHome')}</Button>
                        </Link>
                        <Link href={`/${username}`}>
                            <Button className='w-full'>{t('backToChannel')}</Button>
                        </Link>
                    </div>
                    <p className='text-center text-sm` text-muted-foreground'>{t('support')}</p>
                </CardFooter>

            </Card>
        </div>
    );
}