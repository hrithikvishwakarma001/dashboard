import React from "react";

const Header = ({ text, date,navigation,right }) => {
	return (
		<div className='flex justify-between items-center w-full py-8 px-4'>
			<h1 className='font-bold text-xl max-sm:text-lg'>{text}</h1>
			<p className='font-[300] text-gray-500 max-sm:text-xs'>{date} </p>
		</div>
	);
};

export default Header;
