"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { signIn } from "next-auth/react";
const CustomButton = ({ isGoogle, text, isApple }) => {
	return (
		<button
			className='flex items-center justify-center w-50 max-w-md rounded-xl  bg-[#fff] text-gray-500 hover:bg-gray-100 focus:outline-none transition duration-500 ease-in-out font-[300] text-sm py-2 px-4 md:px-6 max-sm:text-xs max-sm:px-2 lg:my-3'
			onClick={() =>
				isApple ||
				signIn("google", {
					callbackUrl: process.env.NEXT_PUBLIC_URL,
				})
			}>
			{isGoogle && <FcGoogle className='mr-2' />}
			{isApple && <FaApple className='mr-2' />}
			{text}
		</button>
	);
};

export default CustomButton;



