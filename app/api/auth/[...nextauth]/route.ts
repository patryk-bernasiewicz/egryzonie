import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      authorization: { params: { scope: 'user:email' } },
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      const allowedEmails = process.env.ALLOWED_EMAILS?.split(';');

      if (
        allowedEmails?.length &&
        profile?.email &&
        allowedEmails.includes(profile.email)
      ) {
        return true;
      }

      return false;
    },
  },
});

export { handler as GET, handler as POST };
