import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MarketStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-gray-500">Market Cap</p>
            <p className="text-lg font-bold">$319.48B</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">24h Volume</p>
            <p className="text-lg font-bold">$16.5B</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Circulating Supply</p>
            <p className="text-lg font-bold">120.35M</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}