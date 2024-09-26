import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Search } from 'lucide-react'
import { connectWallet, disconnectWallet } from '@/lib/web3'
import { Wallet } from '@/lib/types'

export default function Navigation() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectedWallet, setConnectedWallet] = useState<Wallet | null>(null)

  useEffect(() => {
    const checkConnection = async () => {
      const wallet = await connectWallet()
      if (wallet) {
        setConnectedWallet(wallet)
      }
    }
    checkConnection()
  }, [])

  const handleConnectWallet = async (walletType: string) => {
    setIsConnecting(true)
    try {
      const wallet = await connectWallet(walletType)
      if (wallet) {
        setConnectedWallet(wallet)
      }
    } catch (error) {
      console.error('Error connecting wallet:', error)
    }
    setIsConnecting(false)
  }

  const handleDisconnectWallet = async () => {
    await disconnectWallet()
    setConnectedWallet(null)
  }

  return (
    <nav className="bg-white p-4 flex flex-col sm:flex-row items-center justify-between border-b space-y-2 sm:space-y-0">
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <span className="text-2xl font-bold text-orange-600">🍕 PapaSwap</span>
        <div className="relative flex-grow sm:flex-grow-0">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            className="pl-10 pr-4 py-2 w-full sm:w-96 bg-orange-100 border-none"
            placeholder="Search token name, symbol or address..."
          />
        </div>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-end">
        <Select>
          <SelectTrigger className="w-[120px] sm:w-[180px]">
            <SelectValue placeholder="Learn More" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="about">About PapaSwap</SelectItem>
            <SelectItem value="faq">FAQ</SelectItem>
            <SelectItem value="blog">Blog</SelectItem>
          </SelectContent>
        </Select>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">
              {connectedWallet ? 'Connected' : 'Connect'}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{connectedWallet ? 'Wallet Connected' : 'Connect your wallet'}</DialogTitle>
              <DialogDescription>
                {connectedWallet
                  ? 'Your wallet is connected. You can now use PapaSwap.'
                  : 'Choose how you want to connect. There are several wallet providers.'}
              </DialogDescription>
            </DialogHeader>
            {!connectedWallet ? (
              <div className="grid gap-4 py-4">
                <Button
                  onClick={() => handleConnectWallet('MetaMask')}
                  disabled={isConnecting}
                  className="w-full"
                >
                  Connect with MetaMask
                </Button>
                <Button
                  onClick={() => handleConnectWallet('WalletConnect')}
                  disabled={isConnecting}
                  className="w-full"
                >
                  Connect with WalletConnect
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center py-4">
                <p className="mb-4">Connected: {connectedWallet.address.slice(0, 6)}...{connectedWallet.address.slice(-4)}</p>
                <Button onClick={handleDisconnectWallet} variant="destructive">
                  Disconnect Wallet
                </Button>
              </div>
            )}
          </DialogContent>
        </Dialog>
        <Button variant="ghost" size="icon">
          <span className="text-xl">⋯</span>
        </Button>
      </div>
    </nav>
  )
}