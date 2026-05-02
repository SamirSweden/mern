export const codes = new Map<string , {code: string , expires: number}>();





type Position = {
    side: "LONG" | "SHORT",
    entry: number,
    size:number,
    createdAt: number
}




type Account  = {
    balance:number,
    positions: Position[]
}



const account: Account = {
    balance: 100000,
    positions: []
};



export function getAccount(): Account  {
    if(!account) {
        return {
            balance: 0,
            positions: []
        }
    }
    return account;
}





export function addPosition(position: Position){
    account.positions.push(position)
}






export function removePosition(index: number){
    account.positions.splice(index,1)
}






export function updateBalance(amount: number){
    account.balance += amount
}



