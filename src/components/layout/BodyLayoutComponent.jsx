import PropTypes from 'prop-types';
import { Col, Row } from "react-bootstrap";

export default function BodyLayoutComponent() {
    return (
        <>
            <div className={'container-flex-full my-2'}>
                <Row>
                    <Col className=" p-2 col-100" lg={100}>
                        <div className="align-center" id="home">
                            <h3 id='home' style={{ "textAlign": "Center" }}>
                                Dustin Parker
                            </h3>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        </>

    );
}

