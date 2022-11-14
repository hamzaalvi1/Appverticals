import { Fragment } from "react";
import { Header } from "../Header";
import {Testimonials} from "../Testimonials"
import {MiniProductSlider} from "../MiniProductSlider"
import {FooterForm} from "../FooterForm"
import {Footer} from "../Footer"




function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
      <Testimonials/>
      <MiniProductSlider/>
      <FooterForm/>
      <Footer/>
    </Fragment>
  );
}
export default Layout;
