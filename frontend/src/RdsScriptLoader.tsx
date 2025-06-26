import { useEffect } from "react";

const RDScriptLoader = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://d335luupugsy2.cloudfront.net/js/loader-scripts/ed7d5cd9-324e-4a74-b7ea-50d41c3c0ad8-loader.js";
    script.async = true;
    script.type = "text/javascript";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Esse componente não renderiza nada
};

export default RDScriptLoader;
