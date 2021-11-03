import React from 'react';
import Service from '../../Service/Service';
import Contact from '../Contact/Contact';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Packages></Packages>
            <Service></Service>
            <Contact></Contact>
        </div>
    );
};

export default Home;