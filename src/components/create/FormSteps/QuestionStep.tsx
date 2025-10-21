import { categories } from '@/lib/mockData';

interface QuestionStepProps {
    formData: any;
    setFormData: (data: any) => void;
}

export default function QuestionStep({ formData, setFormData }: QuestionStepProps) {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Market Question</h2>
            <div>
                <label className="block text-gray-300 mb-2">Question</label>
                <input
                    type="text"
                    placeholder="e.g., Will Bitcoin reach $100,000 by end of 2025?"
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block text-gray-300 mb-2">Description</label>
                <textarea
                    rows={4}
                    placeholder="Provide clear resolution criteria..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <label className="block text-gray-300 mb-2">Category</label>
                <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                >
                    {categories.filter((c) => c !== 'All').map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}