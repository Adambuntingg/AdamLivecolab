import React from 'react'
import Link  from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'


const header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
        <Link href='/' className='md:flex-1'>
        <Image
        src="/assets/icons/logo.svg"
        alt ='Logo with name'
        width= {32}
        height= {32}
        className= 'hidden md:hidden'

          />

        <Image
        src="/assets/icons/logo-icon.svg"
        alt ='Logo without name'
        width= {32}
        height= {32}
        className= 'mr-2 md:hidden'

        /> 
        <span className="ml-2 text-lg font-bold hidden md:inline-block">
          <span className="text-blue-500">Co-</span>
          <span>Docs</span>
        </span>
        </Link>
        {children}
    </div>
  )
}

export default header