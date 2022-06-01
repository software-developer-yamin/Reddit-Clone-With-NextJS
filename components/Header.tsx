import Image from 'next/image'
import React from 'react'
import {
  BellIcon,
  ChartBarIcon,
  ChatIcon,
  GlobeIcon,
  PlusIcon,
  SparklesIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline'
import {
  ChevronDownIcon,
  HomeIcon,
  MenuIcon,
  SearchIcon,
} from '@heroicons/react/solid'

const Header = () => {
  return (
    <header className="flex items-center px-4 py-2 bg-white shadow-sm sticky top-0 z-50 max-[">
      <section className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          src="https:links.papareact.com/fqy"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </section>
      <section className="flex items-center mx-7 xl:min-w-[300px]">
        <HomeIcon className="w-5 h-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="w-5 h-5" />
      </section>

      {/* Search Box */}
      <form className="flex flex-grow items-center space-x-2 px-3 py-1 rounded-sm border border-gray-200 bg-gay-100">
        <SearchIcon className="w-6 h-6 text-gray-400" />
        <input
          type="search"
          className="flex-grow bg-transparent outline-none"
          placeholder="Search Reddit"
        />
        <button type="submit" className="hidden" />
      </form>

      {/* User Icon */}
      <section className="items-center space-x-2 text-gray-500 mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </section>

      {/* Mobile Menu */}
      <section className="lg:hidden text-gray-500 ml-5">
        <MenuIcon className="icon" />
      </section>

      {/* Sign In / Sign Up */}
      <section className=" hidden lg:flex items-center space-x-2 border rounded-lg border-gray-100 p-2 cursor-pointer">
        <div className='relative h-5 w-5 flex-shrink-0' >
          <Image src='https:links.papareact.com/23l' alt="" layout='fill' objectFit="contain" />
        </div>
        <p className="text-gray-400" >Sign In</p>
      </section>
    </header>
  )
}

export default Header
