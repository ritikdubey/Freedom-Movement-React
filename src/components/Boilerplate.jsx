import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import ScrollAnimation from 'react-animate-on-scroll';
const Boilerplate = (props) => {
    return(
        <div>
            <Grid fluid>
                <Row>
                    <Col lg={2} sm={3} xs={3}>
                        <div data-aos="fade-right">
                            <h1>{props.year}</h1>
                            <p><i>{props.date}</i></p>
                        </div>
                        {/* <div class="line"></div> */}
                    </Col>
                    <Col lg={10} sm={9} xs={9}>
                        <div data-aos="fade-left">
                            <h2>{props.title}</h2>
                            <p className="new-line">{props.text}</p>
                        </div>
                        <div data-aos="fade-up">
                            {props.img1 && <img src={props.img1} alt="" height="300px" width="300px"/>}
                            {props.img2 && <img src={props.img2} alt="" height="300px" width="300px"/>}
                            {props.img3 && <img src={props.img3} alt="" height="300px" width="300px"/>}
                            {props.img4 &&<img src={props.img4} alt="" height="300px" width="300px"/>}
                        </div>
                        {/* <hr/> */}
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default Boilerplate;