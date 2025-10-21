export default function PortfolioStats() {
    const stats = [
        { label: 'Total Balance', value: '$1,250.00', color: 'text-white' },
        { label: 'Position Value', value: '$299.50', color: 'text-white' },
        { label: 'Total P&L', value: '+$8.00', color: 'text-green-400' },
        { label: 'Active Positions', value: '3', color: 'text-white' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                    <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
            ))}
        </div>
    );
}