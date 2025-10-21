const transactions = [
    {
        type: 'Buy',
        market: 'Bitcoin $100k',
        amount: '$50.00',
        shares: '75 YES',
        time: '2 hours ago',
    },
    {
        type: 'Sell',
        market: 'US Recession 2025',
        amount: '$30.00',
        shares: '50 NO',
        time: '1 day ago',
    },
    {
        type: 'Buy',
        market: 'AI Turing Test',
        amount: '$72.00',
        shares: '100 YES',
        time: '3 days ago',
    },
];

export default function TransactionHistory() {
    return (
        <div className="bg-slate-800 rounded-xl border border-slate-700">
            <div className="p-6 border-b border-slate-700">
                <h2 className="text-xl font-semibold text-white">Recent Transactions</h2>
            </div>
            <div className="p-6">
                <div className="space-y-4">
                    {transactions.map((tx, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between p-4 bg-slate-900 rounded-lg"
                        >
                            <div className="flex items-center space-x-4">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                        tx.type === 'Buy'
                                            ? 'bg-green-500/20 text-green-400'
                                            : 'bg-red-500/20 text-red-400'
                                    }`}
                                >
                                    {tx.type === 'Buy' ? '↑' : '↓'}
                                </div>
                                <div>
                                    <p className="text-white font-medium">
                                        {tx.type} {tx.shares}
                                    </p>
                                    <p className="text-gray-400 text-sm">{tx.market}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-white font-medium">{tx.amount}</p>
                                <p className="text-gray-400 text-sm">{tx.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}