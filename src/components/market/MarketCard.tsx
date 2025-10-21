import Link from 'next/link';
import { Clock, DollarSign, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Market } from '@/types';
import { formatDate } from '@/lib/utils';


interface MarketCardProps {
    market: Market;
}

export default function MarketCard({ market }: MarketCardProps) {
    return (
        <Link href={`/markets/${market.id}`}>
            <div className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition cursor-pointer border border-slate-700 hover:border-slate-600">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2 flex-wrap">
              <span className="text-xs font-semibold px-2 py-1 bg-blue-600 text-white rounded">
                {market.category}
              </span>
                            <span className="text-xs text-gray-400 flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                Ends {formatDate(market.endDate)}
              </span>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                            {market.title}
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                        <p className="text-xs text-gray-400 mb-1">YES</p>
                        <p className="text-2xl font-bold text-green-400">
                            {(market.yesPrice * 100).toFixed(0)}¢
                        </p>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                        <p className="text-xs text-gray-400 mb-1">NO</p>
                        <p className="text-2xl font-bold text-red-400">
                            {(market.noPrice * 100).toFixed(0)}¢
                        </p>
                    </div>
                </div>

                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center space-x-4">
            <span className="text-gray-400 flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
                {market.volume}
            </span>
                        <span className="text-gray-400 flex items-center">
              <Users className="w-4 h-4 mr-1" />
                            {market.traders}
            </span>
                    </div>
                    <span className={`flex items-center font-semibold ${
                        market.change24h > 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
            {market.change24h > 0 ? (
                <ArrowUpRight className="w-4 h-4" />
            ) : (
                <ArrowDownRight className="w-4 h-4" />
            )}
                        {Math.abs(market.change24h)}%
          </span>
                </div>
            </div>
        </Link>
    );
}