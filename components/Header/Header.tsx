"use client";


import React, { useEffect } from 'react'
import { MenuProfile } from '../MenuProfile/MenuProfile';
import { LoginLink, LogoutLink, RegisterLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Link from 'next/link';

const Header = () => {

  const { user } = useKindeBrowserClient();
  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <header className='w-full py-4 ' id='header'>
      <div className="header-rrr">
        <div className="  h-full container mx-auto">
          <div className=" w-full h-full flex items-center justify-between">
            <Link href={'/'}>
              <img src="assets/img/header/logo.svg" alt="" />
            </Link>
            <div className="flex items-center gap-2">
              {user ?
                <>
                  <div className='flex items-center gap-2'>
                    <p className='text-white'>{user?.given_name}</p>
                    <div className="">
                      <MenuProfile />
                    </div>
                  </div>
                </>
                :
                <>
                  <li className="inline-flex">
                    <RegisterLink className='uppercase text-white/50 hover:text-white transition-all'>Регистрация</RegisterLink>
                  </li>
                  <li className="inline-flex">
                    <LoginLink className='uppercase text-white/50 hover:text-white transition-all'>Войти</LoginLink>
                  </li>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
