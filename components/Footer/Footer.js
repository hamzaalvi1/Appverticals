import { Container, Row, Col } from "reactstrap";
import styles from "./Footer.module.scss"
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles["footer"]}>
        <Container>
            <Row>
                <Col md={12}>
                    <div className={styles["footerMain"]}>

                        <div className={styles["footerFirst"]}>
                            <h4>Technologies</h4>
                            <div className={styles["footerUlFirst"]}>
                                <ul>
                                    <li> <a href="/ios-app-development/">iOS</a></li>
                                    <li> <a href="/android-app-development/"> Android </a></li>
                                    <li> <a href="/xamarin-app-development/"> Xamarian  </a></li>
                                    <li> <a href="/react-native-app-development/"> React Native  </a></li>
                                    <li> <a href="/ionic-app-development/"> Ionic  </a></li>
                                    <li> <a href="/flutter-development/"> Flutter </a></li>
                                </ul>
                                <ul>
                                    <li> <a href="/angular-development/"> Angular </a></li>
                                    <li> <a href="/javascript-development/"> Javascript </a></li>
                                    <li> <a href="/react-js-development/"> ReactJS </a></li>
                                    <li> <a href="/vue-js-development/"> Vue.js </a></li>
                                    <li> <a href="/java-app-development/"> Java </a></li>
                                    <li> <a href="/node-js-development/"> Node.js </a></li>
                                </ul>
                                <ul>
                                    <li> <a href="/.net-development/"> ASP.NET </a></li>
                                    <li> <a href="/python-development/"> Python </a></li>
                                    <li> <a href="/php-development/"> PHP  </a></li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles["footerSecond"]}>
                            <h4>Core Services</h4>
                            <div className={styles["footerUlSec"]}>
                                <ul>
                                    <li> <a href="/web-application-development/"> Web Application Development </a></li>
                                    <li> <a href="/mobile-app-development-company/"> Mobile App Development  </a></li>
                                    <li> <a href="/frontend-development/"> Front End Development  </a></li>
                                    <li> <a href="/hire-dedicated-developer/"> Hire  Dedicated Developer  </a></li>
                                    <li> <a href="/product-prototyping/"> Product Prototyping</a></li>
                                    <li> <a href="/cloud-development/"> Cloud & DevOps </a></li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles["footerThird"]}>
                            <h4>Hire Developers</h4>
                            <div className = {`${styles["footerUlFirst"]} ${styles["_hire-dev"]}`}>
                                <ul>
                                    <li> <a href="/hire-php-developer/"> Hire PHP Developers </a></li>
                                    <li> <a href="/hire-nodejs-developer/"> Hire Node.js Developers </a></li>
                                    <li> <a href="/hire-codeigniter-developer/"> Hire Codeigniter Developers </a></li>
                                    <li> <a href="/hire-laravel-developer/"> Hire Laravel Developers</a></li>
                                    <li> <a href="/hire-wordpress-developer/"> Hire WordPress Developers  </a></li>
                                    <li> <a href="/hire-kotlin-developer/"> Hire Kotlin Developers </a></li>

                                </ul>
                                <ul>
                                    <li> <a href="/hire-android-developer/"> Hire Android Developers </a></li>
                                    <li> <a href="/hire-shopify-developer/"> Hire Shopify Developers </a></li>
                                    <li> <a href="/hire-reactjs-developer/"> Hire ReactJS Developers </a></li>
                                    <li> <a href="/hire-vuejs-developer/"> Hire Vue.js Developers</a></li>
                                    <li> <a href="/hire-xamarin-developer/"> Hire Xamarin Developers  </a></li>
                                    <li> <a href="/hire-angular-developer/"> Hire Angular Developers  </a></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className={styles["footerDisc"]}>
                        <div className={styles["footerDiscLogo"]}>
                            <a href="/">
                            <Image
                                src={"/footer-logo.webp"}
                                width={300}
                                height={40}
                                alt="logo"
                                />
                            </a>
                        </div>
                        <div className={styles["footerContent"]}>
                            <p>Our strength lies in the comprehensive suite of services we offer to our clients. From full-stack development to just consultancy- you demand, we deliver. From full-stack development to just consultancy-you demand, we deliver. consultancy-you demand, we deliver.</p>
                        </div>
                    </div>


                    <div className={styles["footerCopyRight"]}>
                        <div className={styles["footerCopyRightLeft"]}>
                            <p>© 2022 <a href="/">AppVerticals</a>. ALL RIGHTS RESERVED.</p>
                        </div>
                        <div  className={styles["footerCopyRightSide"]}>
                            <ul>
                                <li><a href="/privacy-policy/"> Privacy Policy   </a></li>
                                <li><a href="/terms-of-services/"> Terms of Use   </a></li>
                            
                                <li><a href="javascript:;"> Sitemap </a></li>
                            </ul>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer