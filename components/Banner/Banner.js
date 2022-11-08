import { Container, Row, Col } from "reactstrap";
import styles from "./Banner.module.scss";
import { Button } from "../Button/";
function Banner(props) {
  const {
    videoSrc,
    videoPoster,
    bannerClass,
    children,
    h3Content,
    h1Content,
    paraContent,
    btnPrimaryText,
    btnSecondaryText,
    btnPrimaryClasses,
    btnSecondaryClasses,
    btnPrimaryClick,
    btnSecondaryClick,
    ...rest
  } = props;

  //   Heading 1
  const heading1 = () => {
    return h1Content && <h1>{h1Content}</h1>;
  };
  // Heading 4
  const heading3 = () => {
    return h3Content && <h3>{h3Content}</h3>;
  };
  // paragraph
  const paragraph = () => {
    return paraContent && <p>{h3Content}</p>;
  };
  //   videoTag
  const video = () => {
    return (
      videoSrc && (
        <video
          autoPlay
          muted
          loop
          className={styles["banner-video"]}
          poster={videoPoster.src}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )
    );
  };
  return (
    <section
      className={`${styles.bannerSection} ${bannerClass ? bannerClass : null}`}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={12}>
            <div className={styles["banner-content"]}>
              {heading3()}
              {heading1()}
              {paragraph()}
              <div className={styles["banner-btns"]}>
                {btnPrimaryText && (
                  <Button title={btnPrimaryText} color="#000" />
                )}
                {btnSecondaryText && (
                  <Button title={btnSecondaryText} color="#ec1c24" classes={styles.btnSecondary} />
                )}
              </div>
            </div>
            {children}
          </Col>
        </Row>
      </Container>
      {video()}
    </section>
  );
}

export default Banner;
