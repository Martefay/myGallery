import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { CircleUserRound, LogOut, User } from 'lucide-react';
import Link from 'next/link';
import { LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs';

export const MenuProfile = () => {
  return (
    <div>
        <Menu>
        <MenuButton className="items-center gap-2 py-1.5 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[open]:bg-gray-700 data-[focus]:outline-10 ">
          <CircleUserRound strokeWidth={0.5} color="#6A6A6A" className='w-[50px] h-[50px]' />
        </MenuButton>
        <Transition
          enter="transition ease-out duration-75"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems
            anchor="bottom end"
            className=" w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            <MenuItem>
            
              <Link href={'/profile'} className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <User strokeWidth={0.5} absoluteStrokeWidth />
                Профиль
              </Link>
            </MenuItem>
            <div className="my-1 h-px bg-white/5" />
            <MenuItem>
           
              <LogoutLink className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <LogOut strokeWidth={0.5} color="#D04343" absoluteStrokeWidth />
                Выйти из аккаунта
              </LogoutLink>
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}
