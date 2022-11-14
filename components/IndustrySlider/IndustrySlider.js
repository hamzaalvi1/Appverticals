import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./IndustrySlider.module.scss";
import { TextContent } from "../Content";
import Slider from "react-slick";
import Image from "next/image";
import { industryMobileImages,industryMobileData } from "../../utils/home-mockup";

function IndustrySlider(props) {
  const [industrySlider1, setIndustrySlider1] = useState(null);
  const [industrySlider2, setIndustrySlider2] = useState(null);

  const { h2Text, h3Text, paraText } = props;
  return (
    <section className={styles["industries-expertise"]}>
      <Container>
        <Row>
          <Col md={12}>
            <TextContent h2Text={h2Text} h3Text={h3Text} paraText={paraText} />
            <div className={styles["industry-slider"]}>
              <div className={styles["fixed-width"]}>
                <div className={styles["mockup-box"]}>
                  <Image
                    src={"/home/industries/mobile-mockup.webp"}
                    width={305}
                    height={610}
                    alt="mobile-mockup"
                  />
                </div>
                  <Slider
                    asNavFor={industrySlider2}
                    ref={(slider1) => setIndustrySlider1(slider1)}
                    slidesToShow={1}
                    centerMode={true}
                    centerPadding={"190px"}
                    slidesToScroll={1}
                    dots={false}
                    pauseOnHover={false}
                    draggable={false}
                    className={`${styles["industries-mobile-slider"]} ${styles["industries-img"]}`}
                  >
                    {industryMobileImages.map(
                      ({ src, alt, width, height }, idx) => {
                        return(
                        <div key={idx}>
                          <Image
                            src={src}
                            width={width}
                            height={height}
                            alt={alt}
                            style = {{height: `580px`,objectFit:"cover",transition:"transform .35s"}}
                          />
                        </div>)
                      }
                      
                    )}
                  </Slider>
              </div>
                <Slider className={styles["industries-text"]}
                  asNavFor={industrySlider1}
                  ref={(slider2) => setIndustrySlider2(slider2)}
                  slidesToShow={4}
                  swipeToSlide={true}
                  focusOnSelect={true}
                  vertical={true}
                  verticalSwiping={true}
                  dots={false}
                  arrows={true}
                  pauseOnHover={false}
                  slidesToScroll={1}
                  infinite={true}
                >
                 {industryMobileData.map(({title,details,img},idx)=>{
                  return(
                    <div className={styles["industries-list"]} key={idx} >
                       <div className={styles["industry-circle"]}>
                          <Image src={img.src} alt = {img.alt} height={img.height} width={img.width} />
                       </div>
                       <div className={styles["industry-details"]}>
                          <h4>
                            {title}
                          </h4>
                           <p>
                            {details}
                           </p>
                       </div>
                    </div>
                  )
                 })}
                </Slider>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default IndustrySlider;
