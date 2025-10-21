'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TrendingUp, Wallet } from 'lucide-react';
import { useWallet } from '@/hooks/useWallet';

export default function Navigation() {
    const { isConnected, shortAddress, connect, disconnect, isConnecting, error } = useWallet();
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="flex items-center space-x-2">
                            <TrendingUp className="w-8 h-8 text-blue-500" />
                            <span className="text-2xl font-bold text-white">PredictX</span>
                        </Link>
                        <div className="hidden md:flex space-x-6">
                            <Link
                                href="/"
                                className={`${
                                    isActive('/') ? 'text-blue-400' : 'text-gray-300'
                                } hover:text-white transition`}
                            >
                                Markets
                            </Link>
                            <Link
                                href="/create"
                                className={`${
                                    isActive('/create') ? 'text-blue-400' : 'text-gray-300'
                                } hover:text-white transition`}
                            >
                                Create Market
                            </Link>
                            <Link
                                href="/portfolio"
                                className={`${
                                    isActive('/portfolio') ? 'text-blue-400' : 'text-gray-300'
                                } hover:text-white transition`}
                            >
                                Portfolio
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        {isConnected ? (
                            <div className="flex items-center space-x-3">
                                <button
                                  onClick={disconnect}
                                  className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition"
                                >
                                    <Wallet className="w-4 h-4" />
                                    <span className="hidden sm:inline">{shortAddress}</span>
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={connect}
                                disabled={isConnecting}
                                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white px-4 sm:px-6 py-2 rounded-lg transition"
                            >
                                <Wallet className="w-4 h-4" />
                                <span>{isConnecting ? 'Connecting...' : 'Connect'}</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}