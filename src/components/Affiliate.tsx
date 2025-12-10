import React from 'react';
import Section from './Section';
import { Users, Recycle } from 'lucide-react';

interface AffiliateProps {
  onCtaClick: () => void;
}

const Affiliate: React.FC<AffiliateProps> = ({ onCtaClick }) => {
  return (
    <Section id="affiliate" className="bg-neutral-100">
      <h2 className="text-3xl md:text-5xl font-bold mb-12">Affiliate Program</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Program 1 */}
        <div className="bg-white p-8 border-t-4 border-thinkRed shadow-lg hover:shadow-xl transition-shadow flex flex-col items-start">
          <div className="w-14 h-14 bg-red-100 text-thinkRed rounded-full flex items-center justify-center mb-6">
            <Users size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Doporučte nového klienta</h3>
          <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
            Získejte <span className="text-thinkRed font-bold">20 % z profitu</span> za každého klienta, kterého nám doporučíte a který úspěšně využije naše digitální nebo IT služby. Je to skvělý způsob, jak monetizovat vaše kontakty.
          </p>
          <button
            onClick={onCtaClick}
            className="w-full md:w-auto px-6 py-3 bg-thinkBlack text-white font-bold hover:bg-thinkRed transition-colors duration-300"
          >
            Mám zájem
          </button>
        </div>

        {/* Program 2 */}
        <div className="bg-white p-8 border-t-4 border-thinkRed shadow-lg hover:shadow-xl transition-shadow flex flex-col items-start">
          <div className="w-14 h-14 bg-red-100 text-thinkRed rounded-full flex items-center justify-center mb-6">
            <Recycle size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Tip na vyřazenou IT techniku</h3>
          <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
            Odměníme vás <span className="text-thinkRed font-bold">20 % z profitu</span> z prodeje repasované techniky. Stačí nám dát tip na firmu nebo jednotlivce, kteří vyřazují notebooky a další IT vybavení. Pomáháte tak chránit životní prostředí a vyděláváte.
          </p>
          <button
            onClick={onCtaClick}
            className="w-full md:w-auto px-6 py-3 bg-thinkBlack text-white font-bold hover:bg-thinkRed transition-colors duration-300"
          >
            Mám zájem
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Affiliate;