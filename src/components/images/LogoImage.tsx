import { useConfig } from '@/hooks/useConfig';
import { BASE_COLORS } from '@/libs/constants/colors.contstants';
import React from 'react'

const LogoImage = () => {
    const config = useConfig();
    const color = BASE_COLORS.find(color => color.name === config.theme)?.color;

    return (
        <div className='flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
                <path d="M5.7 0L1.4 10.985V55.88h15.284V64h8.597l8.12-8.12h12.418l16.716-16.716V0H5.7zm51.104 36.3L47.25 45.85H31.967l-8.12 8.12v-8.12H10.952V5.73h45.85V36.3zM47.25 16.716v16.716h-5.73V16.716h5.73zm-15.284 0v16.716h-5.73V16.716h5.73z" fill={color} fillRule="evenodd" />
            </svg>
        </div>
    )
}

export default LogoImage;