import React from 'react'
import { SignIn } from '@clerk/nextjs'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <SignIn />
      </div>
    </div>
  )
}

export default Page


