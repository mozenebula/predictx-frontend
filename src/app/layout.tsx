import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/layout/Navigation';

export const metadata: Metadata = {
    title: 'PredictX - Prediction Market Platform',
    description: 'Trade on real-world events with the most accurate prediction market',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-slate-900 font-sans">
        <Navigation />
        <main className="min-h-screen">
            {children}
        </main>
        </body>
        </html>
    );
}
