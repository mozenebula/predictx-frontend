export default function StatsCards() {
    const stats = [
        { label: 'Total Volume', value: '$8.3M', change: '+12.5% this week', color: 'text-green-400' },
        { label: 'Active Markets', value: '247', change: '+18 new today', color: 'text-blue-400' },
        { label: 'Total Traders', value: '5,036', change: '+234 this week', color: 'text-green-400' },
        { label: 'Accuracy Rate', value: '94.2%', change: 'Market predictions', color: 'text-gray-400' },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className={`${stat.color} text-sm mt-2`}>{stat.change}</p>
                </div>
            ))}
        </div>
    );
}