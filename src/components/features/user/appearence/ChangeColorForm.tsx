"use client"

import CardContainer from '@/components/ui/elements/CardContainer'
import { useConfig } from '@/hooks/useConfig'
import { BASE_COLORS } from '@/libs/constants/colors.contstants'
import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React, { CSSProperties } from 'react'

const ChangeColorForm = () => {
    const t = useTranslations("dashboard.settings.appearence.color")

    const config = useConfig();


    return <CardContainer heading={t("heading")} description={t("description")} rightContent={
        <div className='grid grid-cols-4 gap-2 md:grid-cols-8'>
            {BASE_COLORS.map((color, index) => {
                const isActive = color.name === config.theme;
                return <button
                    key={color.name}
                    onClick={() => config.setTheme(color.name)}
                >
                    <span
                        className="flex size-9 shrink-8 -translate-x-1 items-center justify-center rounded-lg hover:border-2 hover:border-foreground"
                        style={{ backgroundColor: color.color } as CSSProperties}
                    >
                        {isActive && <Check className='size-5 text-white' />}
                    </span>

                </button>
            })}
        </div>
    } />
}

export default ChangeColorForm