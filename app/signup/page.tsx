import LoginForm from '@/components/loginForm'
import SignupForm from '@/components/signupForm'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-start h-screen overflow-hidden ">
      <div className="flex-shrink-0 items-center justify-items-center py-8 sm:py-16 pb-20 gap-16 px-8 sm:px-10 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/logo.png"
            alt="Next.js logo"
            width={400}
            height={38}
            priority
          />
          <SignupForm />
        </main>
      </div>

      {/* Background section filling the viewport with bg-top and no scroll */}
      <div 
        className="w-full h-screen bg-top bg-cover sm:bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('/bg.png')`,
        }}
      ></div>
    </div>
  )
}

export default page