"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
	DashboardSidebar,
	Navbar,
	Testimonials,
	FooterChats,
} from "../components";
import { LineChart } from "../utils";

export default function page() {
	const { status } = useSession();
	if (status === "loading")
		return (
			<div className='flex flex-col items-center justify-center h-screen w-screen'>
				<h1 className='text-4xl font-bold text-[#000] mb-4'>
					<div className='animate-spin rounded-full h-10 w-10 border-[5px] border-b-[#f5f5f5] border-gray-900'></div>
				</h1>
					<p className='text-sm font-semibold text-[#000] mb-4 max-sm:text-lg'>
						Redirecting to dashboard...
					</p>
			</div>
		);
	if (status === "unauthenticated") {
		return (
			<div className='flex flex-col items-center justify-center h-screen w-screen'>
				<div className='text-2xl font-bold text-[#000] mb-4 max-sm:text-lg'>
					This route is protected, please sign in
				</div>
				<div className='flex items-center justify-center gap-4 mt-4'>
					<Link
						href='/api/auth/signin'
						className='text-2xl font-bold mb-4 bg-black text-white rounded-lg p-4 '>
						Sign in
					</Link>
					<Link
						href='/'
						className='text-2xl font-bold mb-4 bg-black text-white rounded-lg p-4'>
						Go back
					</Link>
				</div>
			</div>
		);
	}

	return (
		<DashboardSidebar>
			<Navbar />
			<Testimonials />
			<LineChart />
			<FooterChats />
		</DashboardSidebar>
	);
}
