import CreateMarketForm from '@/components/create/CreateMarketForm';

export default function CreateMarketPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Create New Market
            </h1>
            <CreateMarketForm />
        </div>
    );
}