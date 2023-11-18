import NextAuth from 'next-auth';

import GitHubProviders from 'next-auth/providers/github'

const nextOptions = {
    providers:[
        GitHubProviders({
            clientId = process.env.GITHUB_ID,
            clientSecret = process.env.GITHUB_SECRET

        })
    ]
}

export default NextAuth(nextOptions);