import NextAuth from 'next-auth'
import RedditProvider from 'next-auth/providers/reddit'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
    })
  ],
  secret:"Ca91o88853v6b+vlaL23dKKO0UvZxBa2eww9DTbx2CI="
})
