import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ArrowDownUp } from 'lucide-react'

interface SwapInterfaceProps {
  connectedWallet: string | null;
}

export default function SwapInterface({ connectedWallet }: SwapInterfaceProps) {
  const [fromToken, setFromToken] = useState("Select Token")
  const [toToken, setToToken] = useState("ETH")
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")
  const [activeTab, setActiveTab] = useState("market")

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value)
    setToAmount((parseFloat(value) * 2642.86).toFixed(2))
  }

  const renderSwapInterface = () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm mb-2">Sell</p>
        <Select value={fromToken} onValueChange={setFromToken}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Select Token">Select Token</SelectItem>
            <SelectItem value="ETH">ETH</SelectItem>
            <SelectItem value="USDT">USDT</SelectItem>
            <SelectItem value="USDC">USDC</SelectItem>
          </SelectContent>
        </Select>
        <Input
          className="mt-2"
          placeholder="0.0"
          value={fromAmount}
          onChange={(e) => handleFromAmountChange(e.target.value)}
        />
        <p className="text-right text-sm text-gray-500 mt-1">${(parseFloat(fromAmount) * 2642.86 || 0).toFixed(2)}</p>
      </div>
      <div className="flex justify-center">
        <Button variant="ghost" size="icon">
          <ArrowDownUp className="h-6 w-6" />
        </Button>
      </div>
      <div>
        <p className="text-sm mb-2">Buy</p>
        <Select value={toToken} onValueChange={setToToken}>
          <SelectTrigger>
            <SelectValue>
              <div className="flex items-center">
                <div className="bg-orange-100 rounded-full p-1 mr-2">
                  <span className="text-sm">Ξ</span>
                </div>
                ETH
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ETH">ETH</SelectItem>
            <SelectItem value="USDT">USDT</SelectItem>
            <SelectItem value="USDC">USDC</SelectItem>
          </SelectContent>
        </Select>
        <Input className="mt-2" placeholder="0.0" value={toAmount} readOnly />
        <p className="text-right text-sm text-gray-500 mt-1">${toAmount}</p>
      </div>
      <Button 
        className="w-full bg-orange-600 text-white hover:bg-orange-700" 
        onClick={() => connectedWallet ? alert('Swap functionality not implemented in this example') : null}
      >
        {connectedWallet ? 'Swap' : 'Connect wallet'}
      </Button>
    </div>
  )

  return (
    <Card>
      <CardContent className="pt-6">
        <Tabs defaultValue="market" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="w-full mb-4">
            <TabsTrigger value="market" className="flex-1">Market</TabsTrigger>
            <TabsTrigger value="limit" className="flex-1">Limit</TabsTrigger>
            <TabsTrigger value="cross-chain" className="flex-1">Cross chain</TabsTrigger>
          </TabsList>
          <TabsContent value="market">
            {renderSwapInterface()}
          </TabsContent>
          <TabsContent value="limit">
            <div className="space-y-4">
              <p className="text-sm text-gray-600">Set a price to buy or sell automatically when the market reaches it.</p>
              {renderSwapInterface()}
              <div>
                <p className="text-sm mb-2">Limit Price</p>
                <Input placeholder="0.0" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="cross-chain">
            <div className="space-y-4">
              <p className="text-sm text-gray-600">Swap tokens across different blockchain networks.</p>
              {renderSwapInterface()}
              <div>
                <p className="text-sm mb-2">Destination Chain</p>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Chain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ethereum">Ethereum</SelectItem>
                    <SelectItem value="bsc">Binance Smart Chain</SelectItem>
                    <SelectItem value="polygon">Polygon</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}