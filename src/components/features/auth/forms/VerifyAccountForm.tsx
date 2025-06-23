'use client'

import React, { useEffect } from 'react'
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useVerifyAccountMutation } from '@/graphql/generated/graphql';
import { toast } from 'sonner';
import AuthWrapper from '../AuthWrapper';
import { Loader } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const VerifyAccountForm = () => {
  const t = useTranslations('auth.verify');

  const router = useRouter();
  const searchParams = useSearchParams();
  const { auth } = useAuth();

  const token = searchParams.get('token') ?? "";

  const [verifyAccount] = useVerifyAccountMutation({
    onCompleted: () => {
      auth();
      toast.success(t('successMessage'));
      router.push('/dashboard/settings');
    },
    onError: () => {
      toast.error(t('errorMessage'));
    }
  });

  useEffect(() => {
    verifyAccount({
      variables: {
        data: { token }
      }
    });
  }, [token]);


  return (
    <AuthWrapper heading={t('heading')}>
      <div className='flex justify-center items-center'>
        <Loader className='size-8 animate-spin' />
      </div>
    </AuthWrapper>
  )
}

export default VerifyAccountForm
