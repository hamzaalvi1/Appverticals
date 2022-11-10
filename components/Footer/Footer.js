import { Container, Row, Col } from "reactstrap";
import styles from "./Footer.module.scss"
import Image from "next/image";
import Link from "next/link";

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
                                    <li> <Link href="/ios-app-development/">iOS</Link></li>
                                    <li> <Link href="/android-app-development/"> Android </Link></li>
                                    <li> <Link href="/xamarin-app-development/"> Xamarian  </Link></li>
                                    <li> <Link href="/react-native-app-development/"> React Native  </Link></li>
                                    <li> <Link href="/ionic-app-development/"> Ionic  </Link></li>
                                    <li> <Link href="/flutter-development/"> Flutter </Link></li>
                                </ul>
                                <ul>
                                    <li> <Link href="/angular-development/"> Angular </Link></li>
                                    <li> <Link href="/javascript-development/"> Javascript </Link></li>
                                    <li> <Link href="/react-js-development/"> ReactJS </Link></li>
                                    <li> <Link href="/vue-js-development/"> Vue.js </Link></li>
                                    <li> <Link href="/java-app-development/"> Java </Link></li>
                                    <li> <Link href="/node-js-development/"> Node.js </Link></li>
                                </ul>
                                <ul>
                                    <li> <Link href="/.net-development/"> ASP.NET </Link></li>
                                    <li> <Link href="/python-development/"> Python </Link></li>
                                    <li> <Link href="/php-development/"> PHP  </Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles["footerSecond"]}>
                            <h4>Core Services</h4>
                            <div className={styles["footerUlSec"]}>
                                <ul>
                                    <li> <Link href="/web-application-development/"> Web Application Development </Link></li>
                                    <li> <Link href="/mobile-app-development-company/"> Mobile App Development  </Link></li>
                                    <li> <Link href="/frontend-development/"> Front End Development  </Link></li>
                                    <li> <Link href="/hire-dedicated-developer/"> Hire  Dedicated Developer  </Link></li>
                                    <li> <Link href="/product-prototyping/"> Product Prototyping</Link></li>
                                    <li> <Link href="/cloud-development/"> Cloud & DevOps </Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className={styles["footerThird"]}>
                            <h4>Hire Developers</h4>
                            <div className = {`${styles["footerUlFirst"]} ${styles["_hire-dev"]}`}>
                                <ul>
                                    <li> <Link href="/hire-php-developer/"> Hire PHP Developers </Link></li>
                                    <li> <Link href="/hire-nodejs-developer/"> Hire Node.js Developers </Link></li>
                                    <li> <Link href="/hire-codeigniter-developer/"> Hire Codeigniter Developers </Link></li>
                                    <li> <Link href="/hire-laravel-developer/"> Hire Laravel Developers</Link></li>
                                    <li> <Link href="/hire-wordpress-developer/"> Hire WordPress Developers  </Link></li>
                                    <li> <Link href="/hire-kotlin-developer/"> Hire Kotlin Developers </Link></li>

                                </ul>
                                <ul>
                                    <li> <Link href="/hire-android-developer/"> Hire Android Developers </Link></li>
                                    <li> <Link href="/hire-shopify-developer/"> Hire Shopify Developers </Link></li>
                                    <li> <Link href="/hire-reactjs-developer/"> Hire ReactJS Developers </Link></li>
                                    <li> <Link href="/hire-vuejs-developer/"> Hire Vue.js Developers</Link></li>
                                    <li> <Link href="/hire-xamarin-developer/"> Hire Xamarin Developers  </Link></li>
                                    <li> <Link href="/hire-angular-developer/"> Hire Angular Developers  </Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className={styles["footerDisc"]}>
                        <div className={styles["footerDiscLogo"]}>
                            <Link href="/">
                            <Image
                                src={"/footer-logo.webp"}
                                width={300}
                                height={40}
                                alt="logo"
                                />
                            </Link>
                        </div>
                        <div className={styles["footerContent"]}>
                            <p>Our strength lies in the comprehensive suite of services we offer to our clients. From full-stack development to just consultancy- you demand, we deliver. From full-stack development to just consultancy-you demand, we deliver. consultancy-you demand, we deliver.</p>
                        </div>
                    </div>


                    <div className={styles["footerCopyRight"]}>
                        <div className={styles["footerCopyRightLeft"]}>
                            <p>© 2022 <Link href="/">AppVerticals</Link>. ALL RIGHTS RESERVED.</p>
                        </div>
                        <div  className={styles["footerCopyRightSide"]}>
                            <ul>
                                <li><Link href="/privacy-policy/"> Privacy Policy   </Link></li>
                                <li><Link href="/terms-of-services/"> Terms of Use   </Link></li>
                            
                                <li><Link href="javascript:;"> Sitemap </Link></li>
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