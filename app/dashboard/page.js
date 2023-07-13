"use client"
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { DashboardSidebar, Navbar } from "../components";
import Testimonials from "../components/Testimonials";
import { LineChart } from "../utils";
import FooterChats from "../components/FooterChats";
export default function page() {
	const { data, status } = useSession();
	if (status === "loading")
		return (
			<div className='flex flex-col items-center justify-center h-screen w-screen'>
				<h1 className='text-4xl font-bold text-[#000] mb-4'>
					Loading...
				</h1>
			</div>
		);
	if (status === "unauthenticated") {
		return (
			<div className='flex flex-col items-center justify-center h-screen w-screen'>
				<div className='text-2xl font-bold text-[#000] mb-4'>
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
