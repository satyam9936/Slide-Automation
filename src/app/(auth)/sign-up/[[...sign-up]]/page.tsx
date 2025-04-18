import React from 'react'
import { SignUp} from '@clerk/nextjs'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <SignUp />
      </div>
    </div>
  )
}

export default Page



