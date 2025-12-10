import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Affiliate from '../components/Affiliate';

const AffiliatePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>Affiliate Program | ThinkHome</title>
                <meta name="description" content="Staňte se naším partnerem a vydělávejte s námi. Provize za doporučení našich IT služeb." />
            </Helmet>
            <div className="pt-20">
                <Affiliate onCtaClick={() => navigate('/contact')} />
            </div>
        </>
    );
};

export default AffiliatePage;
