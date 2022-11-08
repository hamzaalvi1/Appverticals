
import styles from "./Testimonials.module.scss"
import {Container,Row,Col} from "reactstrap"
import {TextContent} from "../Content"
import Slider from "react-slick";
function Testimonials() {
  return (
    <section className={styles["testimonials"]}>
      <Container fluid>
        <Row className="align-items-center">
            <Col md={12}>
              <TextContent
               h2Text='Testimonials'
               h3Text="Customer"
              />
              
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials