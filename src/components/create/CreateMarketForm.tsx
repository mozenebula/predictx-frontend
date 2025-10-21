'use client';

import { useState } from 'react';
import StepIndicator from './StepIndicator';
import QuestionStep from './FormSteps/QuestionStep';
import ResolutionStep from './FormSteps/ResolutionStep';
import LiquidityStep from './FormSteps/LiquidityStep';
import ReviewStep from './FormSteps/ReviewStep';

export default function CreateMarketForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        question: '',
        description: '',
        category: 'Crypto',
        endDate: '',
        resolution: '',
        initialLiquidity: '',
    });

    const handleNext = () => setCurrentStep((prev) => Math.min(4, prev + 1));
    const handlePrev = () => setCurrentStep((prev) => Math.max(1, prev - 1));

    return (
        <>
            <StepIndicator currentStep={currentStep} totalSteps={4} />

            <div className="bg-slate-800 rounded-xl p-6 sm:p-8 border border-slate-700">
                {currentStep === 1 && (
                    <QuestionStep formData={formData} setFormData={setFormData} />
                )}
                {currentStep === 2 && (
                    <ResolutionStep formData={formData} setFormData={setFormData} />
                )}
                {currentStep === 3 && (
                    <LiquidityStep formData={formData} setFormData={setFormData} />
                )}
                {currentStep === 4 && <ReviewStep formData={formData} />}

                <div className="flex justify-between mt-8">
                    <button
                        onClick={handlePrev}
                        disabled={currentStep === 1}
                        className="px-6 py-3 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:text-gray-600 text-white rounded-lg font-semibold transition"
                    >
                        Previous
                    </button>
                    {currentStep < 4 ? (
                        <button
                            onClick={handleNext}
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
                        >
                            Next
                        </button>
                    ) : (
                        <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition">
                            Create Market
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}