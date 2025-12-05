import React from 'react';
import Section from './Section';
import { Mail, MapPin, Phone, Building2 } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-white border-t border-gray-100 min-h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="inline-block w-12 h-1 bg-thinkRed mb-6"></span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Kontakt
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Jsme tu pro vás. Ozvěte se nám s jakýmkoliv dotazem, poptávkou nebo návrhem spolupráce.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Address Card */}
          <div className="bg-neutral-50 p-8 border-t-4 border-thinkRed text-center hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-lg mb-3">Sídlo společnosti</h3>
            <p className="text-gray-600 leading-relaxed">
              ThinkHome s.r.o.<br />
              Rytířova 777/3<br />
              143 00 Praha - Kamýk
            </p>
          </div>

          {/* Email Card */}
          <div className="bg-neutral-50 p-8 border-t-4 border-thinkRed text-center hover:shadow-lg transition-shadow duration-300">
             <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-lg mb-3">Email</h3>
            <a href="mailto:info@thinkhome.org" className="text-gray-600 hover:text-thinkRed transition-colors block mb-1">
              info@thinkhome.org
            </a>
            <span className="text-sm text-gray-400">Odpovídáme do 24 hodin</span>
          </div>

          {/* Phone Card */}
          <div className="bg-neutral-50 p-8 border-t-4 border-thinkRed text-center hover:shadow-lg transition-shadow duration-300">
             <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone size={24} />
            </div>
            <h3 className="font-bold text-lg mb-3">Telefon</h3>
            <a href="tel:+420910129289" className="text-gray-600 hover:text-thinkRed transition-colors block mb-1">
              +420 910 129 289
            </a>
            <span className="text-sm text-gray-400">Po-Ne 8:00 - 20:00</span>
          </div>
        </div>

        {/* Legal Info */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center gap-6 text-gray-500 text-sm font-mono">
           <div className="flex items-center gap-2">
             <Building2 size={16} />
             <span>IČO: 23893591</span>
           </div>
           <span className="hidden md:inline text-gray-300">|</span>
           <div>
             Spisová značka C 434666 vedená u Městského soudu v Praze
           </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;