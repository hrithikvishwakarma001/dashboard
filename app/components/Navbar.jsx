"use client"

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiUserCircle } from "react-icons/hi";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
const Navbar = () => {
	const [isProfileOpen, setProfileOpen] = useState(false);
  const [search, setSearch] = useState('');
	const { data, status } = useSession();
	const toggleProfilePopup = () => {
		setProfileOpen(!isProfileOpen);
	};

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
	return (
		<nav className='px-4 py-3'>
			<div className='flex items-center justify-between'>
				<div className='text-black font-bold text-lg max-lg:hidden'>
					Dashboard
				</div>
				<div className='flex items-center'>
					<div className='relative'>
						<input
							type='text'
							className='bg-white text-gray-800 rounded-xl px-4 py-2 focus:outline-none w-52'
							placeholder='Search...'
							value={search}
							onChange={handleSearch}
						/>
						<div className='absolute top-1/2 right-2 transform -translate-y-1/2 '>
							<AiOutlineSearch className='text-gray-400 text-xl' />
						</div>
					</div>
					<div className='ml-4'>
						<IoNotificationsOutline className='text-2xl cursor-pointer' />
					</div>
					<div className='ml-4 relative w-[40px] h-[40px]'>
						{status === "unauthenticated" && <HiUserCircle />}
						<Image
							onClick={toggleProfilePopup}
							className='rounded-full cursor-pointer '
							src={data?.user?.image}
							alt='profile'
							width={40}
							height={40}
						/>
						{isProfileOpen && (
							<div className='bg-[#fff] rounded-s-3xl p-4 absolute right-0 top-16'>
								<div className='flex items-center mb-4'>
									<span className='ml-2 text-gray-800 font-bold'>
										{data?.user?.name}
									</span>
								</div>
								<button
									className='bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 focus:outline-none'
									onClick={() => signOut()}>
									Logout
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
