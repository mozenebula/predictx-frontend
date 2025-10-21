interface ResolutionStepProps {
    formData: any;
    setFormData: (data: any) => void;
}

export default function ResolutionStep({ formData, setFormData }: ResolutionStepProps) {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Resolution Details</h2>
            <div>
                <label className="block text-gray-300 mb-2">End Date</label>
                <input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block text-gray-300 mb-2">Resolution Source</label>
                <input
                    type="text"
                    placeholder="e.g., CoinMarketCap"
                    value={formData.resolution}
                    onChange={(e) => setFormData({ ...formData, resolution: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
            </div>
        </div>
    );
}