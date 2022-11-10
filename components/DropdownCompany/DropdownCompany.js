import styles from "./DropdownCompany.module.scss"
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import {dropdownCompany} from "../../utils/dropdown-company-mockup"
import {dropdownCompanyLeft} from "../../utils/dropdown-company-mockup"
import {dropdownCompanyRight} from "../../utils/dropdown-company-mockup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";


function DropdownCompany() {
  return (
    <div className={styles["dropdown-company"]}>
        <Container fluid className="p-0">
            <Row className="align-items-center">
                <Col md={12}>
                    <div className={styles["company-dropdown-main-wrapper"]}>
                        <div className={styles["company-list-dropdown"]}>
                            <ul>
                                {dropdownCompany.map((company,idx)=>{
                                  return(
                                    <li key={idx}>
                                      <p>
                                        <Image src={company.src} alt={company.alt} height={company.height} width={company.width} />
                                        <Link href={company.href}>
                                            {company.link}
                                        </Link>
                                      </p>
                                    </li>
                                  )
                                })}
                            </ul>
                            <div className={styles["company-drop-wrap"]}>
                                <h6>
                                    <Link href="/life-cycle/full-cycle-development/">Full Cycle Product <br />Development</Link>
                                </h6>
                                <ul>
                                    {dropdownCompanyLeft.map((companyLeft,idx)=>{
                                        return(
                                            <li key={idx}>
                                                <p>* 
                                                    <Link href={companyLeft.href}>
                                                        {companyLeft.link}
                                                    </Link>
                                                </p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className={styles["company-dropdown-images"]}>
                            {dropdownCompanyRight.map((companyRight,idx)=>{
                                return(
                                    <div key={idx} className={styles["company-dropdown-box"]}>
                                        <Image src={companyRight.src} alt={companyRight.alt} height={companyRight.height} width={companyRight.width} />
                                        <div className={styles["cp-dp-bx"]}>
                                            <h6>{companyRight.title}</h6>
                                            <p>{companyRight.paratext}</p>
                                            <Link href={companyRight.href}>
                                                {companyRight.anchorTitle}  <FontAwesomeIcon icon={faRightLong} />
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default DropdownCompany
