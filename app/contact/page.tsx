import type { Metadata } from 'next';
import Contact from '@/src/components/Contact';

export const metadata: Metadata = {
    title: 'Kontakt | ThinkHome',
    description: 'Kontaktujte nás pro nezávaznou konzultaci. Jsme tu pro vaše IT potřeby.',
};

export default function ContactPage() {
    return (
        <div className="pt-20">
            <Contact />
        </div>
    );
}
