import Connection from "./connection/Connection";
import Connection2 from "./connection/Connection_2";
import Connection3 from "./connection/Connection_3";
import ConnectionTab2 from "./connection/ConnectionTab2";
import ConnectionTab3 from "./connection/ConnectionTab3";
import ConnectionTab4 from "./connection/ConnectionTab4";
import ConnectionTab5 from "./connection/ConnectionTab5";
import ConnectionTab6 from "./connection/ConnectionTab6";
import { ExecutionFramework } from "./executionFramework/ExecutionFramework";
import { ExecutionMarketing } from "./executionFramework/ExecutionMarketing";
import { ExecutionGestao } from "./executionFramework/ExecutionGestao";
import { ExecutionNegocios } from "./executionFramework/ExecutionNegocios";
import { ExecutionPesquisa } from "./executionFramework/ExecutionPesquisa";
import { ExecutionPessoas } from "./executionFramework/ExecutionPessoas";
import Hero from "./heroSection/HeroSection";
import ServiceCategories from "./serviceCategories/ServiceCategories";
import React from "react";
import { useLocation } from "react-router-dom";

const Solutions = () => {
  const location = useLocation();


  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  let index = location.state;
  if (index == null) {
    index = "1";
  }

  const [title, setTitle] = React.useState("" + index);

  return (
    <>
      <Hero title={title} />
      <ServiceCategories
        tab1={
          <div>
            <Connection />
            <ExecutionFramework />
            
          </div>
        } // tab1 placeholder
        tab2={
          <div>
            <ConnectionTab2 />
            <ExecutionGestao />
            
          </div>
        } // tab2 placeholder
        tab3={
          <div>
            <ConnectionTab3 />
            <ExecutionMarketing />
            
          </div>
        } // tab3 placeholder
        tab4={
          <div>
            <ConnectionTab4 />
            <ExecutionNegocios />
            
          </div>
        } // tab4 placeholder
        tab5={
          <div>
            <ConnectionTab5 />
            <ExecutionPesquisa />
            
          </div>
        } // tab5 placeholder
        tab6={
          <div>
            <ConnectionTab6 />
            <ExecutionPessoas />
            
          </div>
        } // tab6 placeholder
        setTitle={setTitle}
        defaultTab={"" + index}
      />
      <Connection2 />
      <Connection3 />
    </>
  );
};

export default Solutions;
