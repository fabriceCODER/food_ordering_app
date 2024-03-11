"use client";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage(){
     const[email, setEmail] = useState('')
     const[password, setPassword] = useState('')
   
     return(
          <>
          <section className="my-8">
            <h1 className="text-center text-primary text-4xl">Login</h1>
            <form className="block max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
              /> 
              <button type="submit">
                Login
              </button>
              <div className="my-4 text-center text-gray-500">
                or login with provider
              </div>
              <button className="flex border gap-4 px-2
                border-gray-700 rounded-xl justify-center
                text-black-700 mt-4 w-full py-2">
                {/* Image component and login with Google button */}
                <Image src={'/google.png'} 
        alt={'login with google.com'}
        width={24} height={32} />
        Login with Google
              </button>
            </form>
          </section>
        </>
      );
}