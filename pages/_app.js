import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Layout } from "../components/Layout";
import TagManager from 'react-gtm-module';
import {useEffect} from "react"


function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    TagManager.initialize({ gtmId: 'GTM-K9G79C9' });
  },[])
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
