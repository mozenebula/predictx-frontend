import { Clock, DollarSign, Users } from 'lucide-react';
import { Market } from '@/types';
import { formatDate } from '@/lib/utils';

interface MarketDetailsProps {
    market: Market;
}

export default function MarketDetails({ market }: MarketDetailsProps) {
    return (
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="flex items-center space-x-2 mb-4 flex-wrap">
        <span className="text-xs font-semibold px-2 py-1 bg-blue-600 text-white rounded">
          {market.category}
        </span>
                <span className="text-xs text-gray-400 flex items-center">
          <Clock className="w-3 h-3 mr-1" />
          Ends {formatDate(market.endDate)}
        </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {market.title}
            </h1>
            <p className="text-gray-300 mb-6">{market.description}</p>
            <div className="flex items-center space-x-6 text-sm flex-wrap gap-2">
        <span className="text-gray-400 flex items-center">
          <DollarSign className="w-4 h-4 mr-1" />
          Volume: {market.volume}
        </span>
                <span className="text-gray-400 flex items-center">
          <Users className="w-4 h-4 mr-1" />
                    {market.traders} Traders
        </span>
            </div>
        </div>
    );
}