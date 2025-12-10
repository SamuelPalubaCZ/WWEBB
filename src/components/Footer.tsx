import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-thinkBlack text-white py-12 px-6 md:px-24 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-1">ThinkHome s.r.o.</h3>
          <p className="text-gray-500 text-sm">
            Turnkey IT management & support
          </p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ThinkHome s.r.o. Všechna práva vyhrazena.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;