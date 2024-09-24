import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X, Globe } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: '1 PM', price: 2600 },
  { name: '2 PM', price: 2620 },
  { name: '3 PM', price: 2590 },
  { name: '4 PM', price: 2630 },
  { name: '5 PM', price: 2650 },
  { name: '6 PM', price: 2640 },
  { name: '7 PM', price: 2660 },
]

export default function PriceChart() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-orange-100 rounded-full p-2">
            <span className="text-2xl">Ξ</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold">Ethereum ETH</h1>
          <Button variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Globe className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">$2,642.86</h2>
            <p className="text-green-500">+2.11% Last 24 Hours</p>
          </div>
          <Tabs defaultValue="1H">
            <TabsList className="grid grid-cols-5 sm:flex">
              <TabsTrigger value="1H">1H</TabsTrigger>
              <TabsTrigger value="1D">1D</TabsTrigger>
              <TabsTrigger value="1W">1W</TabsTrigger>
              <TabsTrigger value="1M">1M</TabsTrigger>
              <TabsTrigger value="1Y">1Y</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="h-64 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
          <div>
            <p>4 PM</p>
          </div>
          <div className="text-center">
            <p>Sep 23</p>
          </div>
          <div className="text-right">
            <p>2 PM</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}