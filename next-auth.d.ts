import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    role?: string
  }

  interface Session {
    user: User & {
      role?: any,
      id?: any,
      provider?: any,
      firstName?: any,
      lastName?: any,
      phone?: any,
      address1?: any,
      address2?: any,
      city?: any,
      county?: any,
      postcode?: any,
      country?: any
      
    }
  }
}