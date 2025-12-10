import type { Metadata } from 'next';
import Affiliate from '@/src/components/Affiliate';

export const metadata: Metadata = {
    title: 'Affiliate Program | ThinkHome',
    description: 'Staňte se naším partnerem a vydělávejte s námi. Provize za doporučení našich IT služeb.',
};

export default function AffiliatePage() {
    return (
        <div className="pt-20">
            <Affiliate />
        </div>
    );
}
