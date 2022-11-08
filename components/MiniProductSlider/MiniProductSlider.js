import {Container,Row,Col} from "reactstrap"
import {miniProduct} from "../../utils/home-loops"
import Image from "next/image"
function MiniProductSlider() {
  return (
    <section className={"miniprodsection"}>
      <Container>
         <Row className="align-items-center">
            <Col md={12}>
              <ul className="miniprodslider">
                {miniProduct.map(({src,width,height,alt},idx)=>{
                    return(
                        <li key={idx}>  
                           <span>
                              <Image src={src} width={width} height={height} alt={alt} />
                           </span>
                        </li>
                    )
                })}
              </ul>
            </Col>
         </Row> 
      </Container>
    </section>
  )
}

export default MiniProductSlider