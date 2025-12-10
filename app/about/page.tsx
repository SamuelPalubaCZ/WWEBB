import type { Metadata } from 'next';
import About from '@/src/components/About';

export const metadata: Metadata = {
    title: 'O nás | ThinkHome',
    description: 'Jsme tým IT expertů, kteří pomáhají firmám růst. Zjistěte více o naší misi a hodnotách.',
};

export default function AboutPage() {
    return <About />;
}
