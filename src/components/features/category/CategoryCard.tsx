"use client"

import { FindRandomCategoriesQuery } from '@/graphql/generated/graphql';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useSidebar } from '@/hooks/useSidebar';
import { getRandomColor } from '@/utils/color';
import { cn } from '@/utils/tw-merge';
import Image from 'next/image';
import img from './2.jpg'

interface CategoryCardProps {
    category: FindRandomCategoriesQuery['findRandomCategories'][number];
}

const CategoryCard = ({ category }: CategoryCardProps) => {
    const [randomColor, setRandomColor] = useState('');
    const { isCollapsed } = useSidebar();

    useEffect(() => {
        setRandomColor(getRandomColor());
    }, []);

    return (
        <Link href={`/categories/${category.slug}`} className='w-full h-full space-y-3'>
            <div className={cn('group relative cursor-pointer rounded-xl', isCollapsed ? 'h-60' : 'h-52')}>
                <div className='absolute inset-0 flex items-center justify-center rounded-xl opcity-0 transition-opacity group-hover:opacity-100' style={{ backgroundColor: randomColor }} />
                <Image
                    // src={getMediaSource(url)}
                    src={img}

                    alt={category.title}
                    fill
                    className='rounded-xl object-cover transition-transform group-hover:translate-x-2 group-hover:-translate-y-2'
                />
            </div>
            <h2 className='mt-3 text-base font-semibold truncate text-foreground hover:text-primary'>{category.title}</h2>
        </Link>

    )
}

export default CategoryCard