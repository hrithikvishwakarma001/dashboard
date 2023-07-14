import Image from "next/image";
import { Form, Sidebar } from "./components";

export default function Home() {
	return (
		<main className='flex w-screen max-md:flex-col h-screen '>
			<Sidebar />
			<div
				className=' text-[#000] md:container flex items-center justify-center 
			'>
				<Form />
			</div>
		</main>
	);
}
