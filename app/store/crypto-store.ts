'use client'



import { create} from "zustand"
import { Coins } from "../types/Coins"


type Store = {
    coins: Coins[]
    setCoins: (coins: Coins[]) => void
    updatePrice: (
        symbol:string,
        price: number
    ) => void
}



export const useCryptoStore = create<Store>((set) => ({
    coins: [],
    setCoins: (coins) => set({ coins }),
    updatePrice:(symbol, price) => set((state) => ({
        coins: state.coins.map((coin) => {
            if(coin.symbol !== symbol) return coin
            const history = [
                ...coin.history,
                price,
            ].slice(-30)

            return {
                ...coin,
                price,
                history
            }
        })
    }))
}))

