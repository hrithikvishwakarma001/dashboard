import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
const authenticationHandler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
			clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
		}),
	],
	secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
});

export { authenticationHandler as GET, authenticationHandler as POST };
