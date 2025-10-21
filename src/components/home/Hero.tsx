import Link from 'next/link';

export default function Hero() {
    return (
        <div className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Predict the Future, Earn Rewards
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8">
                Trade on real-world events with the most accurate prediction market
            </p>
            <div className="flex justify-center space-x-4 flex-wrap gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                    Explore Markets
                </button>
                <Link href="/create">
                    <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                        Create Market
                    </button>
                </Link>
            </div>
        </div>
    );
}