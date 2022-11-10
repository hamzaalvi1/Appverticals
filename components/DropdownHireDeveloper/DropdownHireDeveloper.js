import { Container, Row, Col } from "reactstrap";
import styles from "./DropdownHireDeveloper.module.scss"
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

function DropdownHireDeveloper() {
  return (
    <div className={styles["dropdown-hire-developer"]}>
        <Container fluid className="p-0">
            <Row className="align-items-center">
                <Col md={9} className="p-0">
                    <div className={styles["hire-dev-list"]}>
                        
                    </div>
                </Col>
                <Col md={3} className="p-0">
                    <div className={styles["hire-dev-img"]}>
                        <Image
                          src={"/menu-dropdown/right-bg.webp"}
                          width={346}
                          height={565}
                          alt="Hire Mobile App Developers"
                         />
                         <div className={styles["cp-dp-bx"]}>
                            <h6>Hire Top Notch Mobile App Developers</h6>
                            <p>We are here to deliver Software Development Services for multiple industries</p>
                            <Link href="/hire-php-developer/">Learn More <FontAwesomeIcon icon={faRightLong} /></Link>
                         </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default DropdownHireDeveloper
