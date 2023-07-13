"use client";

import React from "react";
import { PieChart, Schedule } from "../utils";

const InfoCard = ({ children }) => {
	return (
		<div className='px-4 py-2 bg-white rounded-3xl h-[360px] gap-3 w-[45%] max-md:w-full max-md:mt-4'>
			{children}
		</div>
	);
};

const FooterChats = () => {
	return (
		<div className='flex w-full justify-between items-center mt-10 max-md:flex-col'>
			<InfoCard>
				<PieChart />
			</InfoCard>
			<InfoCard>
				<Schedule />
			</InfoCard>
		</div>
	);
};

export default FooterChats;
