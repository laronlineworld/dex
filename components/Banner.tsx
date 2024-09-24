import React from 'react'
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'

export default function Banner() {
  return (
    <div className="bg-white p-2 flex items-center justify-between border-b">
      <div className="flex items-center space-x-2 text-xs sm:text-sm">
        <span className="bg-orange-100 text-orange-800 font-medium px-2 py-0.5 rounded">New</span>
        <span className="hidden sm:inline">PapaSwap's pricing engine upgraded for serious onchain trades.</span>
        <a href="#" className="text-orange-600 hover:underline">
          Learn more →
        </a>
      </div>
      <Button variant="ghost" size="icon">
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}