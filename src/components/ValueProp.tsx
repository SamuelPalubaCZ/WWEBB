import React from 'react';
import Section from './Section';
import { Puzzle, Clock, ThumbsUp } from 'lucide-react';

const ValueProp: React.FC = () => {
  return (
    <Section id="value" className="bg-neutral-50">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center max-w-4xl mx-auto">
        Proč ThinkHome?
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-white border-2 border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(255,0,0,1)]">
            <Puzzle size={32} className="text-thinkBlack" />
          </div>
          <h3 className="text-xl font-bold mb-4">Konec fragmentace</h3>
          <p className="text-gray-600">
            Na rozdíl od roztříštěného trhu s mnoha externími dodavateli, kteří neznají specifika vaší firmy, nabízí ThinkHome komplexní řešení pod jednou střechou.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-white border-2 border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(255,0,0,1)]">
            <Clock size={32} className="text-thinkBlack" />
          </div>
          <h3 className="text-xl font-bold mb-4">Úspora času a peněz</h3>
          <p className="text-gray-600">
            Eliminujeme zbytečné prodlevy a náklady spojené s koordinací více dodavatelů. Ušetříte čas i finance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-white border-2 border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(255,0,0,1)]">
            <ThumbsUp size={32} className="text-thinkBlack" />
          </div>
          <h3 className="text-xl font-bold mb-4">Zvýšená spokojenost</h3>
          <p className="text-gray-600">
            S ThinkHome získáte jednotného partnera, který rozumí vašim potřebám, což vede k vyšší spokojenosti a lepším výsledkům.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ValueProp;