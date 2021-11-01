import React from 'react';
import AddPackages from '../../AddPackages/AddPackages';
import Contact from '../Contact/Contact';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Packages></Packages>
            <AddPackages></AddPackages>
            <Contact></Contact>
        </div>
    );
};

export default Home;