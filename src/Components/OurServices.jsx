import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const img_service = 'images/img_service.png';
const list_check = 'images/list-style.png';

const OurServices = () => {
    return (
        <Container fluid="md" id="our-services" className="my-5">
            <Row>
                <Col md={6} xs={12} className="why-us-img align-items-center justify-content-center">
                    <Image src={img_service} alt="Why Us Illustration" className="img-fluid" />
                </Col>
                <Col md={6} xs={12} className="d-flex flex-column why-us-text justify-content-center my-5">
                    <h2>Best Car Rental for any kind of trip in Gotham City</h2>
                    <p>Sewa mobil di Gotham City bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll</p>

                    <div className="mt-3">
                        <div className="d-flex align-items-center mt-3">
                            <Image src={list_check} alt="list check" />
                            <p>Sewa Mobil Dengan Supir di Gotham City 12 Jam</p>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                            <Image src={list_check} alt="list check" />
                            <p>Sewa Mobil Lepas Kunci di Gotham City 24 Jam</p>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                            <Image src={list_check} alt="list check" />
                            <p>Sewa Mobil Jangka Panjang Bulanan</p>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                            <Image src={list_check} alt="list check" />
                            <p>Gratis Antar - Jemput Mobil di Bandara</p>
                        </div>

                        <div className="d-flex align-items-center mt-3">
                            <Image src={list_check} alt="list check" />
                            <p>Layanan Airport Transfer / Drop In Out</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default OurServices;
