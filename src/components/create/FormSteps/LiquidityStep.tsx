interface LiquidityStepProps {
    formData: any;
    setFormData: (data: any) => void;
}

export default function LiquidityStep({ formData, setFormData }: LiquidityStepProps) {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Initial Liquidity</h2>
            <div>
                <label className="block text-gray-300 mb-2">Liquidity Amount (USDC)</label>
                <input
                    type="number"
                    placeholder="Minimum 100 USDC"
                    value={formData.initialLiquidity}
                    onChange={(e) =>
                        setFormData({ ...formData, initialLiquidity: e.target.value })
                    }
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
                <p className="text-sm text-gray-400 mt-2">
                    Initial liquidity helps bootstrap your market.
                </p>
            </div>
        </div>
    );
}