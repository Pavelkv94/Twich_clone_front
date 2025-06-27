"use client"
import { useFindSocialLinksQuery, useReorderSocialLinksMutation } from '@/graphql/generated/graphql';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable, DropResult } from '@hello-pangea/dnd';
import { Separator } from '@/components/ui/common/Separator';
import SocialLinkItem from './SocialLinkItem';
import { toast } from 'sonner';

const SocialLinksList = () => {
    const t = useTranslations("dashboard.settings.profile.socialLinks");

    const { data, loading, error, refetch } = useFindSocialLinksQuery();

    const items = data?.socialLinks ?? [];

    const [socialLinks, setSocialLinks] = useState(items);

    useEffect(() => {
        setSocialLinks(items);
    }, [items]);

    const [reorderSocialLinks, { loading: isReorderingSocialLinks }] = useReorderSocialLinksMutation({
        onCompleted: () => {
            // refetch();
            toast.success(t("successReorderMessage"));
        },
        onError: () => {
            toast.error(t("errorReorderMessage"));
        }
    });

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const items = Array.from(socialLinks);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        const bulkUpdateSocialLinks = items.map((link, index) => ({
            id: link.id,
            position: index
        }));
        setSocialLinks(items);
        reorderSocialLinks({ variables: { list: bulkUpdateSocialLinks } });
    }

    return socialLinks.length > 0 ? (
        <>
            <Separator />
            <div className='px-5 mt-5'>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId='social-links'>
                        {provided => <div ref={provided.innerRef} {...provided.droppableProps}>
                            {socialLinks.map((link, index) => (
                                <Draggable key={index} draggableId={link.id} index={index} isDragDisabled={loading || isReorderingSocialLinks}>
                                    {provided => (<SocialLinkItem key={index} link={link} provided={provided} />)}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>}
                    </Droppable>
                </DragDropContext>
            </div>

        </>
    ) : null;

}

export default SocialLinksList