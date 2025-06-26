'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/common/Input'
import { Button } from '@/components/ui/common/Button'
import { SearchIcon } from 'lucide-react'

const Search = () => {
    const t = useTranslations("layout.header.search")
    const [searchTerm, setSearchTerm] = useState("")
    const router = useRouter()

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (searchTerm.trim()) {
            router.push(`/streams?searchTerm=${searchTerm}`)
        } else {
            router.push("/streams")
        }
    }

    return (
        <div className='ml-auto hidden lg:block'>
            <form onSubmit={onSubmit} className='relative flex items-center'>
                <Input
                    type="text"
                    placeholder={t("placeholder")}
                    value={searchTerm}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    className='w-full rounded-full pl-4 pr-10 lg:w-[400px]'
                />
                <Button type='submit' className='absolute right-0.5 h-9'>
                    <SearchIcon className='absolute size-[18px]' />
                </Button>
            </form>
        </div>
    )
}

export default Search