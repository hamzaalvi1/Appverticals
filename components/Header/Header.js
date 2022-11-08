import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
function Header() {
  const routes = [
    {
      name: "company",
      path: "",
    },
    {
      name: `services`,
      path: "",
    },
    {
      name: "Hire A Developer",
      path: "",
    },
    {
      name: "Our Work",
      path: "",
    },
    {
      name: "Contact Us",
      path: "",
    },
  ];

  return (
    <header className={styles["main-header"]}>
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
          <Col md={7}>
            <ul className={styles["menu"]}>
              {routes.map((route) => {
                if(route.name == "services"){
                    return(
                        <li key={route.name}>
                            <Link href={route.path}>
                               {route.name} <FontAwesomeIcon  icon={faChevronDown}/>
                            </Link>
                        </li>
                    )
                }
                return (
                  <li key={route.name}>
                    
                    <Link href={route.path}>
                      {route.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
