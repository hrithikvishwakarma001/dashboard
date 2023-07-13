import React from "react";

const Header = ({ text, date,navigation,right }) => {
	return (
		<div className='flex justify-between items-centern w-full py-8 px-4'>
			<h1 className='font-bold text-xl'>{text}</h1>
			<p className='font-[300] text-gray-500'>{date} </p>
		</div>
	);
};

export default Header;
