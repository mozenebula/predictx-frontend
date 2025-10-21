export interface Market {
    id: string;
    title: string;
    category: string;
    endDate: string;
    volume: string;
    yesPrice: number;
    noPrice: number;
    traders: number;
    change24h: number;
    description: string;
}

export const mockMarkets: Market[] = [
    {
        id: '1',
        title: 'Will Bitcoin reach $100,000 by end of 2025?',
        category: 'Crypto',
        endDate: '2025-12-31',
        volume: '$2.4M',
        yesPrice: 0.67,
        noPrice: 0.33,
        traders: 1243,
        change24h: 5.2,
        description:
            'This market resolves YES if Bitcoin (BTC) trades at or above $100,000 on any major exchange before December 31, 2025 23:59 UTC.',
    },
    {
        id: '2',
        title: 'Will SpaceX successfully land humans on Mars by 2030?',
        category: 'Science',
        endDate: '2030-12-31',
        volume: '$1.8M',
        yesPrice: 0.23,
        noPrice: 0.77,
        traders: 892,
        change24h: -2.1,
        description:
            'Resolves YES if SpaceX successfully lands at least one human on Mars surface before 2030.',
    },
    {
        id: '3',
        title: 'Will there be a US recession in 2025?',
        category: 'Economics',
        endDate: '2025-12-31',
        volume: '$3.1M',
        yesPrice: 0.45,
        noPrice: 0.55,
        traders: 2156,
        change24h: 1.8,
        description:
            'Market resolves YES if NBER officially declares a recession occurring in 2025.',
    },
    {
        id: '4',
        title: 'Will AI pass the Turing Test by 2026?',
        category: 'Technology',
        endDate: '2026-12-31',
        volume: '$980K',
        yesPrice: 0.72,
        noPrice: 0.28,
        traders: 745,
        change24h: 8.3,
        description:
            'YES if a credible AI system passes an official Turing Test before end of 2026.',
    },
];

export const categories = [
    'All',
    'Crypto',
    'Politics',
    'Sports',
    'Science',
    'Technology',
    'Economics',
    'Entertainment',
];

export function getMarketById(id: string): Market | undefined {
    return mockMarkets.find((market) => market.id === id);
}