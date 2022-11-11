import { Container, Row, Col } from "reactstrap";
import styles from "./DropdownServices.module.scss"
import {dropdownServicesCore} from "../../utils/dropdown-services-mockup"
import {dropdownServicesIndustriesLeft} from "../../utils/dropdown-services-mockup"
import {dropdownServicesIndustriesRight} from "../../utils/dropdown-services-mockup"
import {dropdownServicesTechMobile} from "../../utils/dropdown-services-mockup"
import {dropdownServicesTechFrontEnd} from "../../utils/dropdown-services-mockup"
import {dropdownServicesTechBackEnd} from "../../utils/dropdown-services-mockup"
import {dropdownServicesTechCms} from "../../utils/dropdown-services-mockup"
import {dropdownServicesTechEcom} from "../../utils/dropdown-services-mockup"
import Image from "next/image";
import Link from "next/link";
import {useState} from "react"

function DropdownServices() {
  
    const [tabs,setTabs] = useState("core")
    
    const handleTabClick = (tabName)=> setTabs(tabName)
      
  return (
    <div className={styles["dropdown-services"]}>
        <Container fluid className="p-0">
            <Row className="align-items-center">
                <Col md={2} className="p-0">
                    <div className={styles["drop-left-tab"]}>
                        <ul>
                            <li className={tabs == "core" ? `${styles["active"]}` : null}><span onClick={()=>handleTabClick("core")}>Core</span></li>
                            <li className={tabs == "industries" ? `${styles["active"]}` : null}><span onClick={()=>handleTabClick("industries")}>Industries</span></li>
                            <li className={tabs == "technologies" ? `${styles["active"]}` : null}><span onClick={()=>handleTabClick("technologies")}>Technologies</span></li>
                        </ul>
                    </div>
                </Col>
                <Col md={10} className="p-0">
                    <div className={styles["dropdown-tabs"]}>

                        {tabs === "core" && <div className={styles["menuBox-core"]}>
                            <Row>
                                <Col md={8} className="p-0">
                                    <div className={styles["drop-center-tab"]}>
                                        <div className={`${styles["services-drop-list"]} ${styles["third"]}`}>
                                            <div className={`${styles["service-wrap"]} ${styles["third"]}`}>
                                                <ul>
                                                    {dropdownServicesCore.map((core,idx)=>{
                                                    return(
                                                        <li key={idx}>
                                                        <p>
                                                            <Image src={core.src} alt={core.alt} height={core.height} width={core.width} />
                                                            <Link href={core.href}>
                                                                {core.link}
                                                            </Link>
                                                        </p>
                                                        </li>
                                                    )
                                                    })}
                                                </ul>
                                                <div className={styles["working-men"]}>
                                                <Image
                                                src={"/menu-dropdown/services/core/working.webp"}
                                                width={338}
                                                height={347}
                                                alt="working-men"
                                                />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className="p-0">
                                    <div className={`${styles["drop-right-tab"]} ${styles["drop-achivement"]}`}>
                                        <h4>Our Achievements</h4>
                                        <p>
                                            With the utmost priority of adding value to the projects we undertake, we ensure that our partners stay ahead of the clutter and achieve excellence.
                                        </p>
                                        <div className={styles["achievement-badge"]}>
                                            <Image
                                            src={"/menu-dropdown/services/core/1.webp"}
                                            width={150}
                                            height={150}
                                            alt="Achievements Logo"
                                            />
                                            <Image
                                            src={"/menu-dropdown/services/core/2.webp"}
                                            width={150}
                                            height={150}
                                            alt="Achievements Logo"
                                            />
                                            <Image
                                            src={"/menu-dropdown/services/core/3.webp"}
                                            width={150}
                                            height={150}
                                            alt="Achievements Logo"
                                            />
                                            <Image
                                            src={"/menu-dropdown/services/core/4.webp"}
                                            width={150}
                                            height={150}
                                            alt="Achievements Logo"
                                            />
                                            <Image
                                            src={"/menu-dropdown/services/core/5.webp"}
                                            width={150}
                                            height={150}
                                            alt="Achievements Logo"
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div> }

                        {tabs === "industries" && <div className={styles["menuBox-industries"]}>
                            <Row>
                                <Col md={8} className="p-0">
                                    <div className={styles["drop-center-tab"]}>
                                        <div className={styles["services-drop-list"]}>
                                            <div className={styles["service-wrap"]}>
                                                <ul>
                                                    {dropdownServicesIndustriesLeft.map((indleft,idx)=>{
                                                    return(
                                                        <li key={idx}>
                                                        <p>
                                                            <Image src={indleft.src} alt={indleft.alt} height={indleft.height} width={indleft.width} />
                                                            <Link href={indleft.href}>
                                                                {indleft.link}
                                                            </Link>
                                                        </p>
                                                        </li>
                                                    )
                                                    })}
                                                </ul>
                                            </div>
                                            <div className={styles["service-wrap"]}>
                                                <ul>
                                                    {dropdownServicesIndustriesRight.map((indright,idx)=>{
                                                    return(
                                                        <li key={idx}>
                                                        <p>
                                                            <Image src={indright.src} alt={indright.alt} height={indright.height} width={indright.width} />
                                                            <Link href={indright.href}>
                                                                {indright.link}
                                                            </Link>
                                                        </p>
                                                        </li>
                                                    )
                                                    })}
                                                </ul>
                                            </div>
                                            <div className={styles["service-wrap"]}>
                                                <div className={styles["tech-img"]}>
                                                    <Image
                                                    src={"/menu-dropdown/services/industry/tech-img.webp"}
                                                    width={335}
                                                    height={346}
                                                    alt="tech-img"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className="p-0">
                                    <div className={`${styles["drop-right-tab"]} ${styles["indus"]}`}>
                                        <h4>Digital Solutions for Industries</h4>
                                        <p>   
                                        We are Developing Impactful Solutions for Different Industries. 
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                         </div> }

                        {tabs === "technologies" && <div className={styles["menuBox-technologies"]}>
                            <Row>
                                <Col md={12} className="p-0">
                                    <div className={styles["drop-center-tab"]}>
                                        <div className={styles["services-drop-list"]}>

                                            <div className={styles["service-wrap"]}>
                                                <h6>Mobile</h6>
                                                <ul>
                                                    {dropdownServicesTechMobile.map((techmob,idx)=>{
                                                    return(
                                                        <li key={idx}>
                                                        <p>
                                                            <Image src={techmob.src} alt={techmob.alt} height={techmob.height} width={techmob.width} />
                                                            <Link href={techmob.href}>
                                                                {techmob.link}
                                                            </Link>
                                                        </p>
                                                        </li>
                                                    )
                                                    })}
                                                </ul>
                                            </div>

                                            <div className={styles["service-wrap"]}>
                                                <h6>FrontEnd</h6>
                                                <ul>
                                                    {dropdownServicesTechFrontEnd.map((techfront,idx)=>{
                                                    return(
                                                        <li key={idx}>
                                                        <p>
                                                            <Image src={techfront.src} alt={techfront.alt} height={techfront.height} width={techfront.width} />
                                                            <Link href={techfront.href}>
                                                                {techfront.link}
                                                            </Link>
                                                        </p>
                                                        </li>
                                                    )
                                                    })}
                                                </ul>
                                            </div>

                                            <div className={styles["service-wrap"]}>
                                                <h6>BackEnd</h6>
                                                <ul>
                                                    {dropdownServicesTechBackEnd.map((techback,idx)=>{
                                                    return(
                                                        <li key={idx}>
                                                        <p>
                                                            <Image src={techback.src} alt={techback.alt} height={techback.height} width={techback.width} />
                                                            <Link href={techback.href}>
                                                                {techback.link}
                                                            </Link>
                                                        </p>
                                                        </li>
                                                    )
                                                    })}
                                                </ul>
                                            </div>

                                            <div className={styles["service-wrap"]}>
                                                <h6>CMS</h6>
                                                <ul>
                                                    {dropdownServicesTechCms.map((techcms,idx)=>{
                                                    return(
                                                        <li key={idx}>
                                                        <p>
                                                            <Image src={techcms.src} alt={techcms.alt} height={techcms.height} width={techcms.width} />
                                                            <Link href={techcms.href}>
                                                                {techcms.link}
                                                            </Link>
                                                        </p>
                                                        </li>
                                                    )
                                                    })}
                                                </ul>
                                            </div>

                                            <div className={styles["service-wrap"]}>
                                                <h6>E-commerce</h6>
                                                <ul>
                                                    {dropdownServicesTechEcom.map((techecom,idx)=>{
                                                    return(
                                                        <li key={idx}>
                                                        <p>
                                                            <Image src={techecom.src} alt={techecom.alt} height={techecom.height} width={techecom.width} />
                                                            <Link href={techecom.href}>
                                                                {techecom.link}
                                                            </Link>
                                                        </p>
                                                        </li>
                                                    )
                                                    })}
                                                </ul>
                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div> }

                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default DropdownServices