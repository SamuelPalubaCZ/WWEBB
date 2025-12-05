import React from 'react';
import Section from './Section';
import { Users, Recycle } from 'lucide-react';

const Affiliate: React.FC = () => {
  return (
    <Section id="affiliate" className="bg-neutral-100">
      <h2 className="text-3xl md:text-5xl font-bold mb-12">Affiliate Program</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Program 1 */}
        <div className="bg-white p-8 border-t-4 border-thinkRed shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-14 h-14 bg-red-100 text-thinkRed rounded-full flex items-center justify-center mb-6">
            <Users size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Doporučte nového klienta</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Získejte <span className="text-thinkRed font-bold">20 % z profitu</span> za každého klienta, kterého nám doporučíte a který úspěšně využije naše digitální nebo IT služby. Je to skvělý způsob, jak monetizovat vaše kontakty.
          </p>
        </div>

        {/* Program 2 */}
        <div className="bg-white p-8 border-t-4 border-thinkRed shadow-lg hover:shadow-xl transition-shadow">
          <div className="w-14 h-14 bg-red-100 text-thinkRed rounded-full flex items-center justify-center mb-6">
            <Recycle size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-4">Tip na vyřazenou IT techniku</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Odměníme vás <span className="text-thinkRed font-bold">20 % z profitu</span> z prodeje repasované techniky. Stačí nám dát tip na firmu nebo jednotlivce, kteří vyřazují notebooky a další IT vybavení. Pomáháte tak chránit životní prostředí a vyděláváte.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Affiliate;