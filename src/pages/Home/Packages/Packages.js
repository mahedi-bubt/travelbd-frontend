import React from 'react';
import { Container, Row } from 'react-bootstrap';
import usePackages from '../../../hooks/usePackages';
import Package from '../Package/Package';

const Packages = () => {
    const [packages] = usePackages();

    const style = {
        services_container: {
            marginTop: "70px"
        },
        servicesTop: {
            marginBottom: "50px"
        },
        hr: {
            borderBottom: "1px solid black",
            margin: "auto",
            width: "250px"
        }
    }

    return (
        <div id="packages">
            <Container style={style.services_container}>
                <div style={style.servicesTop}>
                    <h2 className="text-primary text-center">Our Packages</h2>
                    <hr style={style.hr} />
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        packages.map(p => <Package
                            packag={p}
                        ></Package>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Packages;