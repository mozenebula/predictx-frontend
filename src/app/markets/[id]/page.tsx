import { notFound } from 'next/navigation';
import MarketDetails from '@/components/market/MarketDetails';
import PriceChart from '@/components/market/PriceChart';
import TradingPanel from '@/components/market/TradingPanel';
import { getMarketById } from '@/lib/mockData';

export default function MarketDetailPage({ params }: { params: { id: string } }) {
    const market = getMarketById(params.id);

    if (!market) {
        notFound();
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <MarketDetails market={market} />
                    <PriceChart market={market} />
                </div>
                <div className="lg:col-span-1">
                    <TradingPanel market={market} />
                </div>
            </div>
        </div>
    );
}