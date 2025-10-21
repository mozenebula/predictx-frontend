import PortfolioStats from '@/components/portfolio/PortfolioStats';
import PositionsTable from '@/components/portfolio/PositionsTable';
import TransactionHistory from '@/components/portfolio/TransactionHistory';

export default function PortfolioPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-4xl font-bold text-white mb-8">My Portfolio</h1>
            <PortfolioStats />
            <PositionsTable />
            <TransactionHistory />
        </div>
    );
}