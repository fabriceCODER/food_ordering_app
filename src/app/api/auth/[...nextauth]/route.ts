import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = nextAuth({
     providers: [
          CredentialsProvider({
               name: "Credentials",
               credentials: {
                 username: { label: "Email", type: "email", placeholder: "test@gmail.com" },
                 password: { label: "Password", type: "password" }
               },
               async authorize(credentials, req) {
                 const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
           
                 if (user) {
                   return user
                 } else {
                 
                   return null
           
                      }
               }
             })
     ]

})

