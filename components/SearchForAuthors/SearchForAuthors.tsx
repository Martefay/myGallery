import React from 'react'
import clsx from 'clsx'
import { Search } from 'lucide-react'

export const SearchForAuthors = () => {
    return (
        <div className="relative w-[350px]">
            <input type="search" placeholder='Поиск по автору' className={clsx(
                'block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )} />
            <button className='group absolute top-1 right-3 '><Search className='' strokeWidth={0.5} absoluteStrokeWidth /></button>
        </div>
    )
}
