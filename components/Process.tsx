import React from 'react';
import Section from './Section';
import { MessageSquare, PenTool, Settings, Smile } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  {
    title: "Komplexní poradenství",
    description: "Klientovi se vším poradíme a navrhneme optimální řešení jeho specifických potřeb.",
    icon: MessageSquare
  },
  {
    title: "Návrh řešení",
    description: "Připravíme na míru šité řešení, které efektivně vyřeší stávající problémy a podpoří růst.",
    icon: PenTool
  },
  {
    title: "Realizace a delegace",
    description: "Práci provedeme vlastními silami, nebo zajistíme externí dodavatele, vždy s dohledem ThinkHome.",
    icon: Settings
  },
  {
    title: "Bezstarostný provoz",
    description: "Zákazník se nemusí o nic starat. ThinkHome zajišťuje plynulý chod a plnou funkčnost IT.",
    icon: Smile
  }
];

const Process: React.FC = () => {
  return (
    <Section id="process">
      <h2 className="text-3xl md:text-5xl font-bold mb-16">Jak Realizujeme</h2>
      
      <div className="space-y-0">
        {steps.map((step, index) => (
          <div key={index} className="flex group">
            {/* Step Number/Icon Column */}
            <div className="mr-6 md:mr-10 flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-thinkBlack text-white flex items-center justify-center rounded-none group-hover:bg-thinkRed transition-colors duration-300 flex-shrink-0 z-10">
                <step.icon size={24} />
              </div>
              {index !== steps.length - 1 && (
                <div className="w-0.5 flex-grow bg-gray-200"></div>
              )}
            </div>
            
            {/* Content Column */}
            <div className={`pt-2 ${index === steps.length - 1 ? 'pb-0' : 'pb-12'}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Process;