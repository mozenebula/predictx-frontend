import { BarChart3 } from 'lucide-react';

export default function PriceChart({ market }: { market: any }) {
    return (
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-semibold text-white mb-4">Price History</h2>
            <div className="h-64 flex items-center justify-center bg-slate-900 rounded-lg">
                <BarChart3 className="w-16 h-16 text-gray-600" />
                <p className="text-gray-500 ml-4">Chart coming soon</p>
            </div>
        </div>
    );
}