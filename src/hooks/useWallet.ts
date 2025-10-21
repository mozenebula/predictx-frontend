"use client";

import { useCallback, useEffect, useMemo, useState } from 'react';

type Eip1193Provider = {
  request: (args: { method: string; params?: unknown[] | object }) => Promise<any>;
  on?: (event: string, handler: (...args: any[]) => void) => void;
  removeListener?: (event: string, handler: (...args: any[]) => void) => void;
};

function getEthereumFromWindow(): Eip1193Provider | undefined {
  if (typeof window === 'undefined') return undefined;
  return (window as any).ethereum as Eip1193Provider | undefined;
}

export function useWallet() {
  const [address, setAddress] = useState<string | null>(null);
  const [chainId, setChainId] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const STORAGE_KEY = 'px:wallet:autoConnect';

  const isConnected = !!address;

  const connect = useCallback(async () => {
    setError(null);
    const ethereum = getEthereumFromWindow();
    if (!ethereum) {
      setError('No Ethereum provider found. Please install MetaMask.');
      return;
    }
    try {
      setIsConnecting(true);
      const accounts: string[] = await ethereum.request({ method: 'eth_requestAccounts' });
      const nextAddress = accounts?.[0] ?? null;
      setAddress(nextAddress);
      const nextChainId: string = await ethereum.request({ method: 'eth_chainId' });
      setChainId(nextChainId);
      if (typeof window !== 'undefined') {
        try { window.localStorage.setItem(STORAGE_KEY, 'true'); } catch (_) {}
      }
    } catch (e: any) {
      setError(e?.message ?? 'Failed to connect wallet');
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    // MetaMask does not support programmatic disconnect; we clear local state
    setAddress(null);
    setChainId(null);
    setError(null);
    if (typeof window !== 'undefined') {
      try { window.localStorage.setItem(STORAGE_KEY, 'false'); } catch (_) {}
    }
  }, []);

  useEffect(() => {
    const ethereum = getEthereumFromWindow();
    if (!ethereum || !ethereum.on) return;

    const handleAccountsChanged = (accounts: string[]) => {
      setAddress(accounts?.[0] ?? null);
    };
    const handleChainChanged = (nextChainId: string) => {
      setChainId(nextChainId);
    };

    ethereum.on('accountsChanged', handleAccountsChanged);
    ethereum.on('chainChanged', handleChainChanged);

    // Initialize from existing connection if present, but only if autoConnect is enabled
    (async () => {
      try {
        let shouldAutoConnect = true;
        if (typeof window !== 'undefined') {
          try {
            const v = window.localStorage.getItem(STORAGE_KEY);
            if (v === 'false') shouldAutoConnect = false;
          } catch (_) {}
        }
        if (!shouldAutoConnect) return;
        const accounts: string[] = await ethereum.request({ method: 'eth_accounts' });
        if (accounts && accounts.length > 0) {
          setAddress(accounts[0]);
          const initialChainId: string = await ethereum.request({ method: 'eth_chainId' });
          setChainId(initialChainId);
        }
      } catch (_) {
        // ignore
      }
    })();

    return () => {
      if (!ethereum.removeListener) return;
      ethereum.removeListener('accountsChanged', handleAccountsChanged);
      ethereum.removeListener('chainChanged', handleChainChanged);
    };
  }, []);

  const shortAddress = useMemo(() => {
    if (!address) return null;
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  }, [address]);

  return {
    address,
    shortAddress,
    chainId,
    isConnected,
    isConnecting,
    error,
    connect,
    disconnect,
  } as const;
}


