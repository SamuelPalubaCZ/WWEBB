import React from 'react';
import Section from './Section';
import { Unlink, Lightbulb, MessageCircle, Puzzle, Clock, ThumbsUp } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    { name: "Samuel Paluba", role: "Founder", initials: "SP" },
    { name: "Vojtěch Pell", role: "Vedoucí komunikace, Technik", initials: "VP" },
    { name: "Erdinc Daskin", role: "Developer, Technik", initials: "ED" },
    { name: "Ondřej Jansa", role: "Vedoucí developmentu", initials: "OJ" },
    { name: "Kateřina Břeňová", role: "UI/UX", initials: "KB" },
    { name: "Tobiáš Mokošín", role: "Nový člen týmu", initials: "TM" }
  ];

  return (
    <div className="pt-20">
      {/* Intro / Why We Exist */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Proč jsme vznikli?</h1>
          <p className="text-xl text-gray-600">
            Viděli jsme problémy, které brzdily firmy, a rozhodli se je vyřešit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-red-50 p-8 rounded-sm border-l-4 border-thinkRed">
            <div className="w-12 h-12 bg-thinkRed text-white rounded-full flex items-center justify-center mb-4">
              <Unlink size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Fragmentace IT</h3>
            <p className="text-gray-600">Mnoho dodavatelů, roztříštěná odpovědnost a chaos v infrastruktuře.</p>
          </div>
          <div className="bg-red-50 p-8 rounded-sm border-l-4 border-thinkRed">
            <div className="w-12 h-12 bg-thinkRed text-white rounded-full flex items-center justify-center mb-4">
              <Lightbulb size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Zkušenost z odvětví</h3>
            <p className="text-gray-600">Roky praxe nám ukázaly, kde firmy nejčastěji krvácejí peníze a čas.</p>
          </div>
          <div className="bg-red-50 p-8 rounded-sm border-l-4 border-thinkRed">
             <div className="w-12 h-12 bg-thinkRed text-white rounded-full flex items-center justify-center mb-4">
              <MessageCircle size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Složitá komunikace</h3>
            <p className="text-gray-600">Technický žargon a nepochopení potřeb byznysu ze strany IT dodavatelů.</p>
          </div>
        </div>
      </Section>

      {/* Value Prop (moved from Home) */}
      <Section className="bg-neutral-900 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Co přinášíme
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
           <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-transparent border-2 border-white rounded-full flex items-center justify-center mb-6 group-hover:bg-thinkRed group-hover:border-thinkRed transition-all duration-300">
                <Puzzle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Konec fragmentace</h3>
              <p className="text-gray-400">Vše pod jednou střechou. Jeden partner, jedna faktura, jedna odpovědnost.</p>
           </div>
           <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-transparent border-2 border-white rounded-full flex items-center justify-center mb-6 group-hover:bg-thinkRed group-hover:border-thinkRed transition-all duration-300">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Úspora času a peněz</h3>
              <p className="text-gray-400">Eliminujeme prostoje a neefektivní procesy. Platíte za výsledky, ne za hodiny.</p>
           </div>
           <div className="text-center group">
              <div className="w-20 h-20 mx-auto bg-transparent border-2 border-white rounded-full flex items-center justify-center mb-6 group-hover:bg-thinkRed group-hover:border-thinkRed transition-all duration-300">
                <ThumbsUp size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Zvýšená spokojenost</h3>
              <p className="text-gray-400">Funkční IT znamená spokojené zaměstnance a hladký chod firmy.</p>
           </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Náš tým</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Avatar Placeholder */}
              <div className="w-40 h-40 mb-6 rounded-full bg-neutral-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg relative group">
                {/* Use UI Avatars for consistent look without external images */}
                <img 
                  src={`https://ui-avatars.com/api/?name=${member.name}&background=1a1a1a&color=fff&size=256&font-size=0.35`} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-thinkRed font-medium text-sm uppercase tracking-wider">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;