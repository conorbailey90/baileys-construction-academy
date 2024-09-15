import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import { getUserByEmail } from "@/data/user";
import { sql } from "@vercel/postgres";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Github
  ],
  session: {strategy: 'jwt'},
  callbacks: {
    async signIn({user, profile, account}){
        try{
            const {rows } = await sql`SELECT * FROM users WHERE email = ${profile?.email} and provider = ${account?.provider}`;

            if(rows.length < 1){
                const {name, email} = user;
                const provider = account?.provider;
                let date = new Date().toISOString();
                const newUser = await sql`INSERT INTO users (name, email, provider, email_verified, role ) VALUES (${name}, ${email}, ${provider}, ${date}, 'USER') RETURNING id;`
                console.log({newUser})
            }
        }catch(err){
            console.log(err)
        }
   
        return true;
    },
    async session({token, session}){
      if(token.role && session.user){
        session.user.role = token.role;
        session.user.id = token.id;
        session.user.provider = token.provider;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.phone = token.phone;
        session.user.address1 = token.address1;
        session.user.address2 = token.address2;
        session.user.city = token.city;
        session.user.county = token.county;
        session.user.postcode = token.postcode;
        session.user.country = token.postcode;
      }
      return session;
    },
    async jwt({token, account}){
  
      if(!token.sub) return token; // Logged out

      const existingUser = await getUserByEmail(token.email, account?.provider);
 
    
      if(!existingUser) return token;

      const {
        id, 
        role, 
        first_name,
        last_name,
        phone_number, 
        address_line1, 
        address_line2,
        city,
        county,
        postcode,
        country} = existingUser;

      token.id = id
      token.role = role;
      token.firstName = first_name;
      token.lastName = last_name;
      token.phone = phone_number;
      token.address1 = address_line1;
      token.address2 = address_line2;
      token.city = city;
      token.county = county;
      token.postcode = postcode;
      token.country = country;
      token.provider = account?.provider;

      return token;
    }
  },
})