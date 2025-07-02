import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../common/Popover';
import { Smile } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Picker, { EmojiClickData, EmojiStyle, Theme } from 'emoji-picker-react';
import { useTheme } from 'next-themes';

interface EmojiPickerProps {
    onChange: (value: string) => void;
    isDisabled: boolean;
}

const EmojiPicker = ({ onChange, isDisabled }: EmojiPickerProps) => {
    const t = useTranslations('stream.chat.sendMessage');

    const theme = useTheme()

    return (
        <Popover>
            <PopoverTrigger className='disabled:cursor-not-allowed' disabled={isDisabled}>
                <Smile className='size-[22px]' />
            </PopoverTrigger>
            <PopoverContent className='p-0 mr-28 mb-4' side='top'>
                <Picker
                    onEmojiClick={(emoji: EmojiClickData) => onChange(emoji.emoji)}
                    emojiStyle={EmojiStyle.APPLE}
                    searchPlaceHolder={t('emojiPlaceholder')}
                    theme={theme.theme === 'dark' ? Theme.DARK : Theme.LIGHT}
                />
            </PopoverContent>
        </Popover>
    )
}

export default EmojiPicker