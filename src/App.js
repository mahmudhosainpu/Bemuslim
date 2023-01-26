import React from "react";
import {useScroll} from "./utils";
import {Header, Landing, Introduction, AboutPartner, Footer} from './components';
import MainHeader from "./components/common/MainHeader"
import CheckoutForms from "./CheckoutForms/CheckoutForms";
import OrderHistory from "./OrderHistory/OrderHistory";
import OrderSummaries from "./OrderSummaries/OrderSummaries";
import ProductOverviews from "./ProductOverviews/ProductOverviews";
import ProductQuickviews from "./ProductQuickviews/ProductQuickviews";
import Reviews from "./Reviews/Reviews";

function App() {
  const [scrollToContent, contentRef] = useScroll()

  return (
    <div className="box-border">
      <div id='scroll-container' className="flex flex-col">
        {/*<Header/>*/}
        {/*<Landing onScroll={scrollToContent}/>*/}

        {/* <MainHeader/> */}
        {/*<div ref={contentRef}>*/}
        {/*  <Introduction/>*/}
        {/*  <AboutPartner/>*/}
        {/*  <Footer/>*/}
        {/*</div>*/}
        <CheckoutForms/>
        <OrderHistory/>
        <OrderSummaries/>
        <ProductOverviews/>
        <ProductQuickviews/>
        <Reviews/>


      </div>
    </div>
  );
}

export default App;
