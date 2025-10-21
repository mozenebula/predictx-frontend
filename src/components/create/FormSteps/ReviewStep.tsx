interface ReviewStepProps {
    formData: any;
}

export default function ReviewStep({ formData }: ReviewStepProps) {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Review & Submit</h2>
            <div className="bg-slate-900 rounded-lg p-6 space-y-4">
                <div>
                    <p className="text-gray-400 text-sm">Question</p>
                    <p className="text-white font-medium">{formData.question || 'Not set'}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Category</p>
                    <p className="text-white">{formData.category}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">End Date</p>
                    <p className="text-white">{formData.endDate || 'Not set'}</p>
                </div>
                <div>
                    <p className="text-gray-400 text-sm">Initial Liquidity</p>
                    <p className="text-white">
                        {formData.initialLiquidity ? `${formData.initialLiquidity}` : 'Not set'}
                    </p>
                </div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-400 text-sm">
                    ⚠️ Market creation requires a 100 USDC deposit.
                </p>
            </div>
        </div>
    );
}