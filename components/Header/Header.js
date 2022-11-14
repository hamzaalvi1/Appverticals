import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { DropdownCompany } from "../DropdownCompany";
import { DropdownHireDeveloper } from "../DropdownHireDeveloper";
import { DropdownServices } from "../DropdownServices";
import { DropdownOurWork } from "../DropdownOurWork";
import { Button } from "../Button";

function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["main-header"]}>
        <Container>
          <Row className="align-items-center">
            <Col md={3}>
              <Image
                src={"/appverticals-logo.webp"}
                width={300}
                height={40}
                alt="logo"
              />
            </Col>
            <Col md={9}>
              <ul className={styles["menu"]}>
                <li className="li-nav">
                  <Link href={"javascript:;"}>Company</Link>
                  <DropdownCompany classes={"onHover"} />
                </li>
                <li className="li-nav">
                  <Link href={"javascript:;"}>
                    Services <FontAwesomeIcon icon={faChevronDown} />
                  </Link>
                  <DropdownServices classes={"onHover"} />
                </li>
                <li className="li-nav">
                  <Link href={"javascript:;"}>Hire A Developer</Link>
                  <DropdownHireDeveloper classes={"onHover"} />
                </li>
                <li className="li-nav">
                  <Link href={"javascript:;"}>Our Work</Link>
                  <DropdownOurWork classes={"onHover"} />
                </li>
                <li className="li-nav">
                  <Link href={"javascript:;"}>Contact</Link>
                </li>
                <li>
                  <Button
                    classes={styles["get-in-touch"]}
                    title="Get In Touch"
                  />
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
}

export default Header;
