import React from 'react';
import Section from './Section';
import { 
  Server, Shield, Brain, Laptop, GraduationCap, Globe, Code, Headset,
  CheckCircle, Clock, Zap, MessageSquare, PenTool, Settings, Smile
} from 'lucide-react';

const Services: React.FC = () => {
  const pillars = [
    {
      title: "Kompletní správa IT",
      icon: CheckCircle
    },
    {
      title: "Bez starostí pro klienta",
      icon: Smile
    },
    {
      title: "S dlouhodobou podporou",
      icon: Clock
    }
  ];

  const processSteps = [
    {
      title: "Komplexní poradenství",
      icon: MessageSquare,
      desc: "Klientovi se vším poradíme a navrhneme optimální řešení."
    },
    {
      title: "Návrh řešení",
      icon: PenTool,
      desc: "Připravíme na míru šité řešení specifických potřeb."
    },
    {
      title: "Realizace a delegace",
      icon: Settings,
      desc: "Práci provedeme vlastními silami nebo zajistíme externí dodavatele."
    },
    {
      title: "Bezstarostný provoz",
      icon: Zap,
      desc: "ThinkHome zajišťuje plynulý chod a plnou funkčnost IT."
    }
  ];

  const detailedServices = [
    {
      title: "Kompletní IT správa",
      description: "Správa e-mailů, webů, hardware, záloh a sítí. Podpora Google Workspace a Microsoft 365.",
      icon: Server
    },
    {
      title: "Prodej a repasování IT",
      description: "Nabízíme repasovanou techniku s garancí a prodej nových zařízení pro jednotlivce i firmy.",
      icon: Laptop
    },
    {
      title: "Bezpečnost a monitoring",
      description: "Nepřetržitý monitoring vašich systémů, detekce hrozeb a okamžitá reakce na incidenty.",
      icon: Shield
    },
    {
      title: "Školení a podpora",
      description: "Školení zaměstnanců, technická podpora a konzultace pro váš tým.",
      icon: GraduationCap
    },
    {
      title: "Optimalizace a AI",
      description: "Implementace umělé inteligence pro zvýšení efektivity a automatizaci procesů.",
      icon: Brain
    },
    {
      title: "Tvorba a správa webů",
      description: "Návrh, vývoj a údržba profesionálních webů. SEO optimalizace a správa obsahu.",
      icon: Globe
    },
    {
      title: "Vlastní systémy na míru",
      description: "Vývoj vlastních aplikací a systémů přesně podle potřeb vaší firmy.",
      icon: Code
    },
    {
      title: "Podpora",
      description: "Podpora 7 dní v týdnu se vzdálenou podporou.",
      icon: Headset
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero / Pillars Section */}
      <Section className="bg-neutral-50 border-b border-gray-200">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Co děláme?</h1>
          <p className="text-xl text-gray-600">
            Poskytujeme komplexní zázemí pro váš digitální růst.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white p-8 rounded-sm border border-gray-100 shadow-sm flex flex-col items-center text-center">
              <div className="text-thinkRed mb-4">
                <pillar.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold">{pillar.title}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section>
        <h2 className="text-3xl font-bold mb-12 text-center">Náš proces</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="mb-6 flex justify-center">
                 <div className="w-16 h-16 bg-thinkBlack text-white flex items-center justify-center rounded-full group-hover:bg-thinkRed transition-colors duration-300 z-10 relative">
                   <step.icon size={28} />
                 </div>
              </div>
              {/* Connector Line (Desktop) */}
              {idx !== processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-0"></div>
              )}
              
              <div className="text-center">
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Detailed Services Grid */}
      <Section dark className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">
            Co všechno <span className="text-thinkRed">nabízíme</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailedServices.map((service, index) => (
              <div 
                key={index} 
                className="group bg-neutral-900/50 backdrop-blur-sm p-6 border border-neutral-800 hover:border-thinkRed transition-all duration-300"
              >
                <div className="mb-4 text-thinkRed">
                  <service.icon size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-thinkRed transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;