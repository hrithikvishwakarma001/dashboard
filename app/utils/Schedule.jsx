import React from "react";
import { Header } from "../components";

const Schedule = () => {
	return (
		<div>
			<Header
				text="Today's schedule"
				date='See All &gt;'
				navigation
				right
			/>
			<div
				className='w-full px-4
       border-green-500 border-s-8 border-opacity-10 
      '>
				<p className='font-semibold text-md'>
					Meeting with suppliers from kuta bali
				</p>
				<p className='text-gray-500'>14.00-15.00</p>
				<p className='text-gray-500'>at Sunset Road, Kuta, Bali</p>
			</div>
			<div
				className='w-full px-4 mt-4
       border-indigo-500 border-s-8 border-opacity-10 
      '>
				<p className='font-semibold text-md'>
					Check operation at Giga Factory 1
				</p>
				<p className='text-gray-500'>18.00-20.00</p>
				<p className='text-gray-500'>at Central Jakarta</p>
			</div>
		</div>
	);
};

export default Schedule;
