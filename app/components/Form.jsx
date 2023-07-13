
import { CustomButton } from ".";
const Header = () => {
	return (
		<div>
			<h1 className='text-4xl font-bold '>Sign In</h1>
			<p className='text-md  text-gray-800 mt-2'>Sign in to your account</p>
		</div>
	);
};

const SignInButtons = () => {
	return (
		<div className='flex justify-between items-center'>
			<CustomButton text='Sign in with Google' isGoogle />
			<CustomButton text='Sign in with Apple' isApple />
		</div>
	);
};

const InputBoxes = () => {

	return (
		<div className='flex flex-col justify-center'>
			<form
				className='max-w-[400px] w-full mx-auto rounded-xl bg-white px-8 py-4'
				>
				<div className='flex flex-col py-2'>
					<label>Email address</label>
					<input
						className='rounded-lg bg-[#f5f5f5] mt-2 p-2 focus:bg-gray-200 focus:outline-none'
						type='text'
						placeholder='Enter your email'
						name='email'
					/>
				</div>
				<div className='flex flex-col py-2'>
					<label>Password</label>
					<input
						className='rounded-lg bg-[#f5f5f5] mt-2 p-2 focus:bg-gray-200 focus:outline-none'
						type='password'
						placeholder='Enter your password'
						name='password'
					/>
				</div>
				<div className='flex justify-between text-gray-400 py-2'>
					<p className='cursor-pointer text-[#346bd4]'>
						Forgot Password?
					</p>
				</div>
				<button
					className='w-full my-5 py-2 bg-black text-white font-semibold rounded-lg'
					type='submit'>
					Sign In
				</button>
			</form>
		</div>
	);
};

const Footer = () => {
	return (
		<div className='flex items-center w-full justify-center'>
			<p className='text-gray-500'>Don't have an account? </p>
			<p className='cursor-pointer text-[#346bd4]'>
				&nbsp; Register here
			</p>
		</div>
	);
};
const Form = () => {
	return (
		<div className='w-[470px] h-[80%] p-10 flex flex-col justify-around max-md:h-[600px]'>
			<Header />
			<SignInButtons />
			<InputBoxes />
			<Footer />
		</div>
	);
};

export default Form;
