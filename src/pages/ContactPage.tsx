import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Kontakt | ThinkHome</title>
                <meta name="description" content="Kontaktujte nás pro nezávaznou konzultaci. Jsme tu pro vaše IT potřeby." />
            </Helmet>
            <div className="pt-20">
                <Contact />
            </div>
        </>
    );
};

export default ContactPage;
