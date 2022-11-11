import { Container, Row, Col } from "reactstrap";
import styles from "./DropdownHireDeveloper.module.scss"
import Image from "next/image";
import Link from "next/link";

import {dropdownHireWeb} from "../../utils/dropdown-hiredeveloper-mockup"
import {dropdownHireMobile} from "../../utils/dropdown-hiredeveloper-mockup"
import {dropdownHireFrontend} from "../../utils/dropdown-hiredeveloper-mockup"
import {dropdownHireOpensource} from "../../utils/dropdown-hiredeveloper-mockup"
import {dropdownHireMicrosoft} from "../../utils/dropdown-hiredeveloper-mockup"
import {dropdownHireCrossPlatform} from "../../utils/dropdown-hiredeveloper-mockup"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

function DropdownHireDeveloper() {
  return (
    <div className={styles["dropdown-hire-developer"]}>
        <Container fluid className="p-0">
            <Row className="align-items-center">
                <Col md={9} className="p-0">
                    <div className={styles["hire-dev-list"]}>

                        <div className={styles["hire-dev-box"]}>
                            <h6>Hire Web Developers</h6>
                            <ul>
                            {dropdownHireWeb.map((web,idx)=>{
                                  return(
                                    <li key={idx}>
                                        <Link href={web.href}>
                                            {web.link}
                                        </Link>
                                    </li>
                                  )
                                })}
                            </ul>
                        </div>
                        
                        <div className={styles["hire-dev-box"]}>
                            <h6>Hire Mobile Developers</h6>
                            <ul>
                            {dropdownHireMobile.map((mob,idx)=>{
                                  return(
                                    <li key={idx}>
                                        <Link href={mob.href}>
                                            {mob.link}
                                        </Link>
                                    </li>
                                  )
                                })}
                            </ul>
                        </div>

                        <div className={styles["hire-dev-box"]}>
                            <h6>Hire Frontend Developers</h6>
                            <ul>
                            {dropdownHireFrontend.map((front,idx)=>{
                                  return(
                                    <li key={idx}>
                                        <Link href={front.href}>
                                            {front.link}
                                        </Link>
                                    </li>
                                  )
                                })}
                            </ul>
                        </div>

                        <div className={styles["hire-dev-box"]}>
                            <h6>Hire Opensource Developers</h6>
                            <ul>
                            {dropdownHireOpensource.map((opensource,idx)=>{
                                  return(
                                    <li key={idx}>
                                        <Link href={opensource.href}>
                                            {opensource.link}
                                        </Link>
                                    </li>
                                  )
                                })}
                            </ul>
                        </div>

                        <div className={styles["hire-dev-box"]}>
                            <h6>Hire Microsoft Developers</h6>
                            <ul>
                            {dropdownHireMicrosoft.map((microsoft,idx)=>{
                                  return(
                                    <li key={idx}>
                                        <Link href={microsoft.href}>
                                            {microsoft.link}
                                        </Link>
                                    </li>
                                  )
                                })}
                            </ul>
                        </div>

                        <div className={styles["hire-dev-box"]}>
                            <h6>Hire Cross Platform Developers</h6>
                            <ul>
                            {dropdownHireCrossPlatform.map((platform,idx)=>{
                                  return(
                                    <li key={idx}>
                                        <Link href={platform.href}>
                                            {platform.link}
                                        </Link>
                                    </li>
                                  )
                                })}
                            </ul>
                        </div>
                        <div className={`${styles["hire-dev-box"]} ${styles["hire-btn"]}`}>
                            <p>Get Your Project Started With Expert Developers</p>
                            <Link href="/hire-php-developer" className={`${styles["hover-btn"]} ${styles["hire-btn"]}`}>
                                Hire a Developer
                            </Link>
                        </div>

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
