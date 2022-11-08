import { Container, Row, Col } from "reactstrap";
import styles from "./FooterForm.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Slider from "react-slick";
import {Button} from "../Button"
function FooterForm() {
  return (
    <section className={styles["quote-form"]}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>
              Got an  <span>
                amazing business <br />
                idea? </span>
              Lets bring it to the <br />
              market together.
            </h2>
            <div className={styles["linking-details"]}>
              <div className={styles["link-left"]}>
                <a href="mailto:info@appverticals.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                  info@appverticals.com
                </a>

                <a href="tel:+1-833-888-2433">
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  +1-833-888-2433
                </a>
              </div>
              <div className={styles["link-rights"]}>
                <ul className={styles["social-links"]}>
                  <li>
                    <a
                      rel="noreferrer"
                      href="https://www.facebook.com/appverticals.dallas/"
                      target="_blank"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="https://twitter.com/appverticals"
                      target="_blank"
                    >
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="https://www.linkedin.com/company/app-verticals/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="https://www.youtube.com/channel/UC8Mlfng0CMjbrTNQv7u-gmw"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              slidesToShow={3}
              slidesToScroll={1}
              arrows={true}
              infinite={true}
            //   centerMode={true}
            //   centerPadding={"25px"}
              className={styles["office-slider"]}
            >
              <div className={styles["officebox"]}>
                <div className={styles["officebox-overlay"]}>
                  <h5>Southlake</h5>
                  <p>
                    <a
                      rel="noreferrer"
                      href="https://goo.gl/maps/kMffsLdDkJZkoqDT8"
                      target="_blank"
                    >
                      950 E Hwy 114 Suite 160, Southlake, TX 76092
                    </a>
                  </p>
                </div>
                <Image
                  src="/home/quoteform/southlake-new.webp"
                  width={210}
                  height={291}
                  alt="southlake"
                />
              </div>
              <div className={styles["officebox"]}>
                <div className={styles["officebox-overlay"]}>
                  <h5>Dallas</h5>
                  <p>
                    <a
                      rel="noreferrer"
                      href="https://g.page/Mockingbird-Towers-3674?share"
                      target="_blank"
                    >
                      1341 W. Mockingbird Lane, Suite 600W Dallas, TX, US ,
                      75247
                    </a>
                  </p>
                </div>
                <Image
                  src="/home/quoteform/dallas-new.webp"
                  width={210}
                  height={291}
                  alt="dallas"
                />
              </div>
              <div className={styles["officebox"]}>
                <div className={styles["officebox-overlay"]}>
                  <h5>Dubai</h5>
                  <p>
                    <a
                      rel="noreferrer"
                      href="https://goo.gl/maps/hTBHqcHDwAEmYdWA9"
                      target="_blank"
                    >
                      2080, Binary Tower, Marasi Drive, Business Bay, PO Box:
                      294474, Dubai, UAE
                    </a>
                  </p>
                </div>
                <Image
                  src="/home/quoteform/dubai-new.webp"
                  width={210}
                  height={291}
                  alt="dubai"
                />
              </div>
              {/* <div className={styles["officebox"]}>
                <div className={styles["officebox-overlay"]}>
                  <h5>Addison</h5>
                  <p>
                    <a
                      rel="noreferrer"
                      href="https://goo.gl/maps/tCf18Sm26qVWC2t76"
                      target="_blank"
                    >
                      15305 Dallas Pkwy 12th Floor, Addison, TX 75001, United
                      States
                    </a>
                  </p>
                </div>
                <Image
                  src="/home/quoteform/Addison.webp"
                  width={210}
                  height={291}
                  alt="Addison"
                />
              </div> */}
            </div>
          </Col>
          <Col md={6}>
            <div className={styles["form-content"]}>
              <h3>Got a startup idea & need to get it validated?</h3>
            </div>
            <form action="" className={styles["quotefrm"]}>
              <Row>
                <Col md={6}>
                  <div className={styles["frm-fld"]}>
                    <input name="cn" type="text" placeholder="Name" value="" />
                    <span className={styles["error-msg"]}></span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={styles["frm-fld"]}>
                    <select className="countrylist" name="countryList"></select>
                  </div>
                </Col>
                <Col md={6}>
                  <Row>
                    <Col md={3}>
                      <div className={styles["frm-fld"]}>
                        <input type="text" name="cpcode" readonly="" />
                      </div>
                    </Col>
                    <Col md={9}>
                      <div className={styles["frm-fld"]}>
                        <input
                          name="phn"
                          type="number"
                          placeholder="Phone"
                          value=""
                          maxlength="13"
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <div className={styles["frm-fld"]}>
                    <input
                      name="ce"
                      type="email"
                      placeholder="Email"
                      value=""
                    />
                    <span className={styles["error-msg"]}></span>
                  </div>
                </Col>
                <Col md={12}>
                  <div className={styles["frm-fld"]}>
                    <input
                      name="desc"
                      type="text"
                      placeholder="Tell us about your project (optional)"
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <h5 className={styles["bdgt-check"]}>
                    My Budget Is <span> less then $50 k</span>
                  </h5>
                  <div >
                    <input
                      type="range"
                      id="myRange"
                      step="50"
                      value="50"
                      min="50"
                      max="500"
                      range="true"
                      autofilled=""
                      className={styles["range-slider"]}
                    />
                  </div>
                </Col>
                <Col md={12}>
                  <div className={styles["submit-btn"]}>
                    <Button type="submit"  title={"Lets get started!"}/>
                                        
                  </div>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FooterForm;
