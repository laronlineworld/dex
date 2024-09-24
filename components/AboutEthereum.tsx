import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe } from 'lucide-react'

export default function AboutEthereum() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Ethereum</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">
          Ethereum is a global, open-source platform for decentralized applications. In other words,
          the vision is to create a world computer that anyone can build applications in a
          decentralized manner; while all states and data are distributed and publicly accessible.
        </p>
        <Button variant="link" className="text-orange-600 p-0">show more</Button>
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Links</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Globe className="mr-2 h-4 w-4" />
              www.ethereum.org
            </Button>
            <Button variant="outline" size="sm">
              <span className="mr-2">𝕏</span>
              x.com
            </Button>
            <Button variant="outline" size="sm">
              <span className="mr-2">🐰</span>
              Reddit
            </Button>
            <Button variant="outline" size="sm">
              <span className="mr-2">🦎</span>
              Coingecko
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}