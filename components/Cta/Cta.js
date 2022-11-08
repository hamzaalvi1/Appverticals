import styles from "./Cta.module.scss"
import {Container,Row,Col} from "reactstrap"
import {Button} from "../Button"

function Cta(props) {
    const {
        h2Text,
        h3Text,
        h2Class,
        h3Class,
        children,
        primaryBtnText,
        secondaryBtnText,
        primaryBtnClasses,
        SecondaryBtnClasses,
        primaryBtnClick,
        secondaryBtnClick,
        classes,
        contentClass,
        ...rest

    } = props
  return (
    <section className={`${styles["cta-section"]} ${classes}`}>
      <Container>
        <Row className="align-items-center">
           <Col md={12}>
               <div className={`${styles["cta-content"]} ${contentClass}`}>
                  {h2Text && <h2 className={h2Class}>{h2Text}</h2>}
                  {h3Text && <h3 className={h3Class}>{h3Text}</h3>}
                  <div className={styles["cta-btns"]}>
                    {primaryBtnText && <Button title={primaryBtnText} classes = {primaryBtnClasses} onClick ={primaryBtnClick } /> } 
                    {secondaryBtnText && <Button title={secondaryBtnText} classes = {SecondaryBtnClasses} onClick ={secondaryBtnClick } /> } 

                    {children}

                  </div>
               </div>
           </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cta