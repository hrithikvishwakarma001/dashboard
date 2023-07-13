import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
const authenticationHandler = NextAuth({
	providers: [
		GoogleProvider({
			clientId:
				"124399473651-un2e0mg8lvgpgg87cr44du1nb15k99j2.apps.googleusercontent.com",
			clientSecret: "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",
		}),
	],
	secret: "hrithikisgoodboy",
});

export { authenticationHandler as GET, authenticationHandler as POST };
