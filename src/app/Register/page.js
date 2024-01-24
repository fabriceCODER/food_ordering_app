"use client";
import Image from "next/image";
import { use, useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        setUserCreated(true);
        setError(false);
      } else {
        throw new Error('Failed to register');
      }
    } catch (e) {
      setError(true);
      setUserCreated(false);
    } finally {
      setCreatingUser(false);
    }
  }

  return (
    <>
      <section className="my-8">
        <h1 className="text-center text-primary text-4xl">Register</h1>
        <form className="block max-w-sm mx-auto" onSubmit={handleFormSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            disabled={creatingUser}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            disabled={creatingUser}
          /> 
          <button type="submit" disabled={creatingUser}>
            Register
          </button>
          {error && <p>Error registering user. Please try again.</p>}
          {userCreated && <p>User created successfully!</p>}
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
