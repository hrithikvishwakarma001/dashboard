"use client"

const { SessionProvider } = require("next-auth/react");

export const NextAuthProvider = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>;
};
