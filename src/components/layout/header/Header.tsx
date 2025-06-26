import React from 'react'
import Logo from './Logo'
import Search from './Search'
import HeaderMenu from './HeaderMenu'

const Header = () => {
    return (
        <header className='flex h-full items-center gap-x-4 border-b border-border bg-card p-4'>
            <Logo />
            <Search />
            <HeaderMenu />
        </header>
    )
}

export default Header