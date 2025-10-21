'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Market } from '@/types';

interface TradingPanelProps {
    market: Market;
}

export default function TradingPanel({ market }: TradingPanelProps) {
    const [tradeAmount, setTradeAmount] = useState('');
    const [tradeType, setTradeType] = useState<'yes' | 'no'>('yes');
    const [walletConnected, setWalletConnected] = useState(false);

    const potentialProfit = tradeAmount
        ? (
            parseFloat(tradeAmount) /
            (tradeType === 'yes' ? market.yesPrice : market.noPrice) -
            parseFloat(tradeAmount)
        ).toFixed(2)
        : '0.00';

    return (
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 sticky top-24">
            <h2 className="text-xl font-semibold text-white mb-6">Place Trade</h2>

            <div className="grid grid-cols-2 gap-2 mb-6">
                <button
                    onClick={() => setTradeType('yes')}
                    className={`py-3 rounded-lg font-semibold transition ${
                        tradeType === 'yes'
                            ? 'bg-green-600 text-white'
                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                >
                    <Check className="w-4 h-4 inline mr-2" />
                    YES {(market.yesPrice * 100).toFixed(0)}¢
                </button>
                <button
                    onClick={() => setTradeType('no')}
                    className={`py-3 rounded-lg font-semibold transition ${
                        tradeType === 'no'
                            ? 'bg-red-600 text-white'
                            : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                >
                    <X className="w-4 h-4 inline mr-2" />
                    NO {(market.noPrice * 100).toFixed(0)}¢
                </button>
            </div>

            <div className="mb-6">
                <label className="block text-gray-400 text-sm mb-2">
                    Amount (USDC)
                </label>
                <input
                    type="number"
                    placeholder="0.00"
                    value={tradeAmount}
                    onChange={(e) => setTradeAmount(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
                <div className="flex justify-between mt-2 text-sm">
                    {['10', '50', '100', '500'].map((amount) => (
                        <button
                            key={amount}
                            onClick={() => setTradeAmount(amount)}
                            className="text-gray-400 hover:text-white transition"
                        >
                            ${amount}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-slate-900 rounded-lg p-4 mb-6 space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">You Pay</span>
                    <span className="text-white">${tradeAmount || '0.00'}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Potential Profit</span>
                    <span className="text-green-400">${potentialProfit}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Est. Shares</span>
                    <span className="text-white">
            {tradeAmount
                ? (
                    parseFloat(tradeAmount) /
                    (tradeType === 'yes' ? market.yesPrice : market.noPrice)
                ).toFixed(2)
                : '0.00'}
          </span>
                </div>
            </div>

            {walletConnected ? (
                <button
                    className={`w-full py-4 rounded-lg font-semibold text-white transition ${
                        tradeAmount
                            ? tradeType === 'yes'
                                ? 'bg-green-600 hover:bg-green-700'
                                : 'bg-red-600 hover:bg-red-700'
                            : 'bg-slate-700 cursor-not-allowed'
                    }`}
                >
                    {tradeAmount ? `Buy ${tradeType.toUpperCase()}` : 'Enter Amount'}
                </button>
            ) : (
                <button
                    onClick={() => setWalletConnected(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition"
                >
                    Connect Wallet to Trade
                </button>
            )}
        </div>
    );
}