const positions = [
    {
        id: 1,
        market: 'Will Bitcoin reach $100,000 by end of 2025?',
        position: 'YES',
        shares: 150,
        avgPrice: 0.65,
        currentPrice: 0.67,
        value: 100.5,
        pnl: 3.0,
        pnlPercent: 3.08,
    },
    {
        id: 2,
        market: 'Will AI pass the Turing Test by 2026?',
        position: 'YES',
        shares: 200,
        avgPrice: 0.68,
        currentPrice: 0.72,
        value: 144.0,
        pnl: 8.0,
        pnlPercent: 5.88,
    },
    {
        id: 3,
        market: 'Will there be a US recession in 2025?',
        position: 'NO',
        shares: 100,
        avgPrice: 0.58,
        currentPrice: 0.55,
        value: 55.0,
        pnl: -3.0,
        pnlPercent: -5.17,
    },
];

export default function PositionsTable() {
    return (
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
            <div className="p-6 border-b border-slate-700">
                <h2 className="text-xl font-semibold text-white">Active Positions</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-slate-900">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase">
                            Market
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase">
                            Position
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase">
                            Shares
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase">
                            Avg Price
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase">
                            Current
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase">
                            Value
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase">
                            P&L
                        </th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                    {positions.map((pos) => (
                        <tr key={pos.id} className="hover:bg-slate-750">
                            <td className="px-6 py-4">
                                <p className="text-white font-medium max-w-xs truncate">
                                    {pos.market}
                                </p>
                            </td>
                            <td className="px-6 py-4">
                  <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          pos.position === 'YES'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-red-500/20 text-red-400'
                      }`}
                  >
                    {pos.position}
                  </span>
                            </td>
                            <td className="px-6 py-4 text-white">{pos.shares}</td>
                            <td className="px-6 py-4 text-gray-300">
                                {(pos.avgPrice * 100).toFixed(0)}¢
                            </td>
                            <td className="px-6 py-4 text-white">
                                {(pos.currentPrice * 100).toFixed(0)}¢
                            </td>
                            <td className="px-6 py-4 text-white font-medium">
                                ${pos.value.toFixed(2)}
                            </td>
                            <td className="px-6 py-4">
                                <div className={pos.pnl >= 0 ? 'text-green-400' : 'text-red-400'}>
                                    <p className="font-semibold">
                                        {pos.pnl >= 0 ? '+' : ''}${pos.pnl.toFixed(2)}
                                    </p>
                                    <p className="text-xs">
                                        ({pos.pnl >= 0 ? '+' : ''}
                                        {pos.pnlPercent.toFixed(2)}%)
                                    </p>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                                    Sell
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}