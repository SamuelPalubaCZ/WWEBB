import React from 'react';
import { Helmet } from 'react-helmet-async';
import Services from '../components/Services';

const ServicesPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Co děláme | ThinkHome</title>
                <meta name="description" content="Nabízíme komplexní IT služby: správu sítě, cloudová řešení, kybernetickou bezpečnost a IT poradenství." />
            </Helmet>
            <Services />
        </>
    );
};

export default ServicesPage;
