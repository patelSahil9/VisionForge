import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import React from 'react'

export default function Logo() {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <div className="flex items-center gap-2">
        <Sparkles className="h-6 w-6 fill-white text-primary" />
        <span className="text-lg font-white font-bold">VisionFlare</span>
      </div>
    </Link>
  )
}

