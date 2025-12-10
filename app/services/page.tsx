import type { Metadata } from 'next';
import Services from '@/src/components/Services';

export const metadata: Metadata = {
    title: 'Co děláme | ThinkHome',
    description: 'Nabízíme komplexní IT služby: správu sítě, cloudová řešení, kybernetickou bezpečnost a IT poradenství.',
};

export default function ServicesPage() {
    return <Services />;
}
