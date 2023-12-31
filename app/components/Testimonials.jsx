import React from "react";
import { IoPricetagsOutline } from "react-icons/io5";
import { AiOutlineLike, AiOutlineMoneyCollect } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
const Testimonials = ({
	data: { totalRevenue, totalLikes, totalUsers, totalTransactions },
}) => {
	const testimonials = [
		{
			title: "Total Revenue",
			icon: AiOutlineMoneyCollect,
			amount:
				totalRevenue !== undefined &&
				"$" + totalRevenue.toLocaleString("en-US"),
			bg: "bg-[#ddefe0]",
		},
		{
			title: "Total Transaction",
			icon: IoPricetagsOutline,
			amount: totalTransactions,
			bg: "bg-[#f4ecdd]",
		},
		{
			title: "Total Likes",
			icon: AiOutlineLike,
			amount: totalLikes,
			bg: "bg-[#efdada]",
		},
		{
			title: "Total Users",
			icon: FiUsers,
			amount: totalUsers,
			bg: "bg-[#dee0ef]",
		},
	];
	return (
		<div
			className={`mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 ${
				!totalRevenue ? "animate-pulse" : ""
			}`}>
			{testimonials.map((test, index) => (
				<div
					className={` p-6 text-black ${test.bg} rounded-3xl`}
					key={index}>
					<div className=' flex justify-end'>
						<test.icon
							className={`text-4xl ${
								test.title === "Total Transaction" &&
								"transform scale-x-[-1]"
							}`}
						/>
					</div>
					<p className='py-2'>{test.title}</p>
					<h1 className='text-2xl font-bold'>
						{test.amount || "Loading..."}
					</h1>
				</div>
			))}
		</div>
	);
};

export default Testimonials;
