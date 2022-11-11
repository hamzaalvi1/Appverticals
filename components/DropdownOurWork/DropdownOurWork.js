import { Container, Row, Col } from "reactstrap";
import styles from "./DropdownOurWork.module.scss"
import Image from "next/image";
import Link from "next/link";


function DropdownOurWork() {
  return (
    <div className={styles["dropdown-casestudies"]}>
    <Container fluid>
        <Row className="align-items-start">
            <Col md={3} className="p-0">
                <div className={`${styles["case-box-drop"]} ${styles["imgHoverClass"]}`}>
                    <h6>Case Study</h6>
                    <Link href="/case-studies">
                        <Image 
                        src={"/menu-dropdown/our-work/case-study.webp"}
                        width={355}
                        height={382}
                        alt="case-study"
                        />
                    </Link>
                </div>
            </Col>
            <Col md={5} className="p-0">
                <div className={`${styles["case-box-drop"]} ${styles["center-align"]} ${styles["imgHoverClass"]}`}>
                    <h6>Portfolio</h6>
                    <Link href="/portfolio">
                        <Image 
                        src={"/menu-dropdown/our-work/portfolio.webp"}
                        width={523}
                        height={384}
                        alt="Portfolio"
                        />
                    </Link>
                </div>
            </Col>
            <Col md={4} className="p-0">
                <div className={styles["case-box-drop"]}>
                    <h6>Client Testimonials</h6>
                    <Link href="#">
                        <div className={styles["testibox"]}>
                        <Image 
                        src={"/menu-dropdown/our-work/qoute.webp"}
                        width={38}
                        height={29}
                        alt="qoute"
                        />
                        <p>AppVerticals has been honest and transparent regarding their work, and I would recommend them to my friends and business partners.</p>
                        <h6>Alex Elvis</h6>
                        <span>United States</span>
                        <Image 
                        src={"/menu-dropdown/our-work/dummy.webp"}
                        width={50}
                        height={50}
                        alt="dummy"
                        />
                        </div>
                    </Link>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default DropdownOurWork
