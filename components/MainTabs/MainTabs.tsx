"use client";
import React, { Fragment, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import { Author } from '../Author/Author';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { Check, ChevronDown, Search } from 'lucide-react'
import { SearchForAuthors } from '../SearchForAuthors/SearchForAuthors';
import usePictures from '@/Hooks/usePictures';
import Image from 'next/image'
import Link from 'next/link';

const years = [
    { id: 1, name: '2024' },
    { id: 2, name: '2023' },
    { id: 3, name: '2022' },
    { id: 4, name: '2021' },
    { id: 5, name: '2020' },
]

export const MainTabs = () => {

    const [selected, setSelected] = useState(years[1])
    const getPictures = usePictures();

    return (
        <div className="w-full">
            <div className="container mx-auto">
                <div className="flex w-full">
                    <div className="w-full relative top-0 w-full">
                    <TabGroup>
      <TabList className={'relative z-50'}>
        <Tab as={Fragment}>
          {({ hover, selected }) => (
            <button className={clsx(hover && 'bg-white/5', selected && 'outline-1 bg-white/10 outline-white', 'rounded-full py-1 px-3 text-sm/6 font-semibold text-white')}>Галерея</button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ hover, selected }) => (
            <button className={clsx(hover && 'bg-white/5', selected && 'outline-1 bg-white/10 outline-white', 'rounded-full py-1 px-3 text-sm/6 font-semibold text-white')}>Авторы</button>
          )}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel className={'w-full absolute top-0'}>
        <div className='w-full'>
            <div className="container mx-auto">
                <div className="w-full">
                    <div className="w-full flex justify-center mb-20">
                        <h2 className='uppercase text-6xl'>Галерея</h2>
                    </div>
                    <div className="w-full flex gap-4">
                        <div className="">
                            <div className="w-52">
                                <Listbox value={selected} onChange={setSelected}>

                                    <ListboxButton
                                        className={clsx(
                                            'relative flex justify-between w-full rounded-lg bg-white/5 py-1.5 px-3 text-left text-sm/6 text-white',
                                            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                                        )}
                                    >
                                        {selected.name}
                                        <ChevronDown strokeWidth={0.5} />
                                    </ListboxButton>

                                    <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                                        <ListboxOptions
                                            anchor="bottom"
                                            className="w-[var(--button-width)] rounded-xl border border-white/5 bg-options p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none"
                                        >
                                            {years.map((person) => (
                                                <ListboxOption
                                                    key={person.name}
                                                    value={person}
                                                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                                                >
                                                    <Check strokeWidth={0.5} absoluteStrokeWidth />
                                                    <div className="text-sm/6 text-white">{person.name}</div>
                                                </ListboxOption>
                                            ))}
                                        </ListboxOptions>
                                    </Transition>
                                </Listbox>
                            </div>
                        </div>
                        <div className="">
                            <SearchForAuthors />
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <div className="grid grid-cols-3 gap-5">
                        {getPictures.map((item, index) => {
                            return (
                                <Link key={index} href={'/picture/' + item.attributes?.slug} className="relative group cursor-pointer">
                                <div className="absolute top-[40%] z-[-100]">
                                    <p className='text-5xl'>{item.attributes?.name}</p>
                                    <p className='text-3xl'>Иоан Вазовский</p>
                                </div>
                                <Image width={500} height={500} src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url} alt='' className='object-cover group-hover:opacity-50 transition-all duration-150' />

                            </Link>
                            )
                        })}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </TabPanel>
        <TabPanel className={'w-full absolute top-0'}>
            <Author />
        </TabPanel>
      </TabPanels>
    </TabGroup>
                    </div>
                </div>
            </div>
        </div>
    )
}
