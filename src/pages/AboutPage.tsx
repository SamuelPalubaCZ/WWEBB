import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../components/About';

const AboutPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>O nás | ThinkHome</title>
                <meta name="description" content="Jsme tým IT expertů, kteří pomáhají firmám růst. Zjistěte více o naší misi a hodnotách." />
            </Helmet>
            <About />
        </>
    );
};

export default AboutPage;
