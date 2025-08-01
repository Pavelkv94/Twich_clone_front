import Heading from '@/components/ui/elements/Heading';
import { FindRandomCategoriesQuery, FindRandomStreamsQuery } from '@/graphql/generated/graphql';
import React from 'react'
import EmptyState from '@/components/ui/elements/EmptyState';
import CategoryCard from './CategoryCard';

interface CategoriesListProps {
    heading?: string;
    categories: FindRandomCategoriesQuery['findRandomCategories'];
}

const CategoriesList = ({ heading, categories }: CategoriesListProps) => {
    return categories.length ?
        <>
            {heading && <Heading title={heading} />}
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 xl::grid-cols-7">
                {categories.map((category, index) => (
                    <CategoryCard key={index} category={category} />
                ))}
            </div>
        </> :
        <EmptyState />;
}

export default CategoriesList