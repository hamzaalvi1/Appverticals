import { Fragment, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.scss";
import { Banner } from "../components/Banner";
import poster from "../public/home/banner/poster.webp";
import { TextContent } from "../components/Content";
import { Container, Row, Col } from "reactstrap";
import { IndustrySlider } from "../components/IndustrySlider";
import {
  productList,
  bannerCompanyList,
  streamlinedList,
} from "../utils/home-loops";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faComment } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/Button";
import { Cta } from "../components/Cta";
import { MiniProductSlider } from "../components/MiniProductSlider";
import { FooterForm } from "../components/FooterForm";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";
export default function Home() {
  const bannerCompanies = () => {
    return bannerCompanyList.map((bcompany, idx) => {
      return (
        <li key={idx}>
          <span>
            <Image
              src={bcompany.img}
              height={bcompany.height}
              width={bcompany.width}
              alt={bcompany.alt}
            />
          </span>
        </li>
      );
    });
  };
  const [readMore, setReadMore] = useState(false);
  const primaryCtaText = () => (
    <>
      <FontAwesomeIcon icon={faPhoneAlt} />
      Call Us
    </>
  );
  const SecondaryCtaText = () => (
    <>
      <FontAwesomeIcon icon={faComment} />
      Chat With Us
    </>
  );
  const ctaSecondaryText = () => (
    <>
      Request a quote about your web and mobile application <br /> development
      services
    </>
  );

  return (
    <Fragment>
      <Head>
        <title>AppVerticals</title>
        <meta name="description" content="AppVerticals" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Banner
        videoPoster={poster}
        videoSrc={`https://res.cloudinary.com/dxml5mtbg/video/upload/v1666771487/Top-Notch_App_Development_Company_uou0zl.mp4`}
        h3Content={"Perfect Blend of Technology & Creativity!"}
        h1Content={`Top-Notch App Development Company `}
        btnPrimaryText={"Have an Idea, Let's Talk"}
        btnSecondaryText={"Get A Quote"}
        bannerClass={styles["home-banner"]}
      >
        <ul className={styles["banner-companies"]}>{bannerCompanies()}</ul>
      </Banner>
      <section className={styles["product-design"]}>
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <TextContent
                h3Text={"One Stop Solution"}
                h2Text={`Our Top-Notch App Development Services`}
                classes={styles["prod-content"]}
              />
              <div className={styles["product-design-list"]}>
                {productList.map(
                  (
                    {
                      mainHeading,
                      constHeading,
                      prodpara,
                      overlaypara,
                      backImg,
                      url,
                    },
                    idx
                  ) => {
                    return (
                      <div className={styles["product-main-box"]} key={idx}>
                        <div className={styles["product-design-box"]}>
                          <h4>
                            {mainHeading} <br /> {constHeading}
                          </h4>
                          <p>{prodpara}</p>
                        </div>
                        <div className={styles["product-design-overlay"]}>
                          <Image
                            src={backImg.img}
                            alt={backImg.alt}
                            width={backImg.width}
                            height={backImg.height}
                          />
                          <p>{overlaypara}</p>
                          <Button
                            title="Learn More"
                            classes={styles["learn-more"]}
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles["why-choose"]}>
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <TextContent
                h3Text={"Top App Development Company In USA"}
                h2Text={"Why You Need The Best App Development Services?"}
                h2Class={styles["why-heading"]}
                paraText={
                  "With people spending an average of 3 hours using apps, it's pretty obvious where businesses should be heading. Working with the best mobile app development services is one of the best ways to ensure trust and a successful outcome. So if you want to be become a success, hire app developers from AppVerticals. We are here to deliver cutting-edge app development services to you."
                }
              />
              <div
                style={{ height: readMore ? "511px" : `75px` }}
                className={`${styles["read-more-content"]} text-center`}
              >
                <h4>
                  What Custom App Development Company AppVerticals Offers?
                </h4>
                <p>
                  We are one of the leading app development agency in USA
                  specializing in web and app design. We pride ourselves in
                  delivering smooth and flawless solutions to all of our
                  clients. Whether its healthcare, automotive or hospitality,
                  our experts can develop an app for your specific needs. While
                  we are based in USA, our services are for everyone. Our
                  application development company has satisfied businesses from
                  a wide range of industries and regions. Through the custom
                  solutions we deliver, our app developers promise boost your
                  ROI.
                </p>
                <h4>We Provide Best App Development Services In USA</h4>
                <p>
                  We don’t discriminate between platforms. Whether it be Android
                  or iOS, our application development agency can develop and
                  design apps for all. We understand that your customers may be
                  present on various platforms. So if you decide to focus on
                  only one platform, you are bound to lose some potential
                  customers. In the watch of our app development experts, this
                  will never happen! We will design your apps, keeping in mind
                  the requirements of the various platforms. We make sure that
                  the services we deliver are usable, visually pleasing and
                  user-friendly. You won’t find web and app development services
                  in USA like us that offers it all so professionally.
                </p>
                <h4>Our Expertise Your Prosperity</h4>
                <p>
                  Our best app development company in USA has worked with all
                  types of businesses. Whether it be startups or massive
                  enterprises, our experienced web developers are equipped with
                  the skills to cater to the needs of all. Make sure to partner
                  with the top app development companies instead. Hire
                  application development services are at your disposal. Contact
                  us today to let us know about your project requirements. We
                  will develop an app or website just like you want us to. Our
                  technology experts won’t disappoint you and we will work with
                  you through it all. Be it the design or the development phase,
                  our knowledge of the app industry coupled with your expertise
                  will make a duo that will transform your customers’ life.
                </p>
              </div>
              <Button
                classes={styles["read-btn"]}
                title={readMore ? "Read Less" : "Read More"}
                onClick={() => setReadMore(!readMore)}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <main className={styles["linear-wrapper"]}>
        <section className={styles["streamlined-develeopment"]}>
          <Container>
            <Row className="align-items-center">
              <Col md={12}>
                <TextContent
                  h3Text="App Development Process"
                  h2Text="Our Proficient App Creation Process"
                  classes={styles["stream-content"]}
                />
                <div className={styles["streamlined-box"]}>
                  <ul className={styles["streamlined-list"]}>
                    {streamlinedList.map(
                      ({ img, headingText, paraText }, idx) => {
                        return (
                          <li key={idx}>
                            <div className={styles["stream-box"]}>
                              <span>
                                <Image
                                  src={img.src}
                                  width={img.width}
                                  height={img.height}
                                  alt={img.alt}
                                />
                              </span>
                              <div className={styles["streambox-details"]}>
                                <h6>{headingText}</h6>
                                <p>{paraText}</p>
                              </div>
                            </div>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Cta
          h2Text={"Tell Us About Your Project"}
          h3Text={ctaSecondaryText()}
          primaryBtnText={primaryCtaText()}
          secondaryBtnText={SecondaryCtaText()}
        />
        <IndustrySlider
          h2Text={"Custom Industry Development Service"}
          h3Text={"Industries We Serve"}
          paraText={
            "We are committed to providing digital solutions for all industries. We have successfully served 100+ industries."
          }
        />
      </main>
      <Testimonials/>
      <MiniProductSlider/>
      <FooterForm/>
      <Footer/>
    </Fragment>
  );
}
