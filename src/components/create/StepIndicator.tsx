interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
    return (
        <div className="flex items-center justify-between mb-12">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
                <div key={step} className="flex items-center flex-1">
                    <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                            currentStep >= step
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-700 text-gray-400'
                        }`}
                    >
                        {step}
                    </div>
                    {step < totalSteps && (
                        <div
                            className={`flex-1 h-1 mx-2 ${
                                currentStep > step ? 'bg-blue-600' : 'bg-slate-700'
                            }`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}