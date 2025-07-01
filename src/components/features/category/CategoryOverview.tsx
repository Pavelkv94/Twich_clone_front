import { FindCategoryBySlugQuery } from '@/graphql/generated/graphql';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react'
import img from './2.jpg'
import Heading from '@/components/ui/elements/Heading';
import StreamsList from '../stream/list/StreamsList';

interface CategoryOverviewProps {
    category: FindCategoryBySlugQuery['findCategoryBySlug'];
}

const CategoryOverview = ({ category }: CategoryOverviewProps) => {
    const t = useTranslations("categories.overview");
    return (
        <div className='space-y-8'>
            <div className='gap-x-6 lg:flex lg:items-center lg:space-y-6'>
                <Image src={img} alt={category.title} className='rounded-xl object-cover' width={192} height={256} />
                <Heading title={category.title} description={category.description || ''} size='xl' />
            </div>
            <StreamsList streams={category.streams || []} heading={t("heading")} />
        </div>
    )

}

export default CategoryOverview