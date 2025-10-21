export interface Market {
    id: string;
    title: string;
    category: string;
    endDate: string;
    volume: string;
    yesPrice: number;
    noPrice: number;
    traders: number;
    change24h: number;
    description: string;
    creator?: string;
    resolutionSource?: string;
    createdAt?: string;
}

export interface Position {
    id: string;
    marketId: string;
    market: string;
    position: 'YES' | 'NO';
    shares: number;
    avgPrice: number;
    currentPrice: number;
    value: number;
    pnl: number;
    pnlPercent: number;
}

export interface Transaction {
    id: string;
    type: 'Buy' | 'Sell';
    marketId: string;
    market: string;
    amount: string;
    shares: string;
    timestamp: string;
    status: 'Completed' | 'Pending' | 'Failed';
}

export interface User {
    address: string;
    balance: number;
    totalPnL: number;
    activePositions: number;
    accuracy?: number;
}