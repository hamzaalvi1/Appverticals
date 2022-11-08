import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { TextContent } from "../Content";
import { Testimonials1,Testimonials2 } from "../../utils/home-loops";
import Slider from "react-slick";
import Image from "next/image";
import {FaYoutube} from "react-icons/fa"
function Testimonials() {
  const [testimonailSlider1, setTestimonailSlider1] = useState(null);
  const [testimonailSlider2, setTestimonailSlider2] = useState(null);

  return (
    <section className={"testimonials"}>
      <Container>
        <Row className="align-items-center">
          <Col md={12}>
            <TextContent h2Text="Testimonials" h3Text="Customer" classes={'text-left'} />
            </Col>
            </Row>
            </Container>
            <Container fluid>
            <Row className="align-items-center">
            <Col md={12}>
            <Slider 
             slidesToShow={3}
             slidesToScroll={1}
             infinite={true}
             dots={false}
             arrows={false}
             asNavFor={testimonailSlider2}
             ref={(slider1) => setTestimonailSlider1(slider1)}
             variableWidth={true}
             centerMode={true}
             className="testimonial-slider-1">
              {Testimonials1.map((testi, idx) => {
                return (
                  <div key={idx}>
                    <div className="testi-box">
                      <div className="testi-content">
                        <h4>{testi.headingText}</h4>
                        <p>{testi.paraText}</p>
                        <a href={testi.links.href} target="_blank" rel="noreferrer">
                          
                          {testi.links.src ? 
                          <Image
                            src={testi.links.src}
                            width={testi.links.width}
                            height={testi.links.height}
                            alt={testi.links.alt}
                          />
                          :
                          <FaYoutube/> }

                          {testi.links.text ? testi.links.text : "Youtube"}
                        </a>
                      </div>
                      <div className="testi-details">
                        <div className="testi-user">
                          <a href="javascript:;">
                            <Image
                              src={testi.user.img.src}
                              width={testi.user.img.width}
                              height={testi.user.img.height}
                              alt={testi.user.img.alt}
                            />
                          </a>
                        </div>
                        <div className="testiname">
                          <h5>{testi.user.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>

            <Slider 
             slidesToShow={3}
             slidesToScroll={1}
             infinite={true}
             dots={true}
             dotsClass={"slick-dots testi-dots"}
             arrows={false}
             asNavFor={testimonailSlider1}
             ref={(slider2) => setTestimonailSlider2(slider2)}
             variableWidth={true}
             centerMode={true}             
             className="testimonial-slider-1">
              {Testimonials2.map((testi, idx) => {
                return (
                  <div key={idx}>
                    <div className="testi-box">
                      <div className="testi-content">
                        <h4>{testi.headingText}</h4>
                        <p>{testi.paraText}</p>
                        <a href={testi.links.href} target="_blank" rel="noreferrer">
                          
                          {testi.links.src ? 
                          <Image
                            src={testi.links.src}
                            width={testi.links.width}
                            height={testi.links.height}
                            alt={testi.links.alt}
                          />
                          :
                          <FaYoutube/> }

                          {testi.links.text ? testi.links.text : "Youtube"}
                        </a>
                      </div>
                      <div className="testi-details">
                        <div className="testi-user">
                          <a href="javascript:;">
                            <Image
                              src={testi.user.img.src}
                              width={testi.user.img.width}
                              height={testi.user.img.height}
                              alt={testi.user.img.alt}
                            />
                          </a>
                        </div>
                        <div className="testiname">
                          <h5>{testi.user.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
