"use client";

import { useEffect } from "react";

const CookieConsent = () => {
  useEffect(() => {
    const cookieBotWrapper = document.getElementById("CookiebotWrapper");
    if (cookieBotWrapper) {
      const script = document.createElement("script");
      script.id = "CookieDeclaration";
      script.type = "text/javascript";
      script.async = true;
      script.src =
        "https://consent.cookiebot.com/e4839e0a-3b70-4003-a104-2946ec2f9560/cd.js";

      cookieBotWrapper.appendChild(script);
    }
  }, []);

  return <div id="CookiebotWrapper" className="container m-auto mt-28"></div>;
};

export default CookieConsent;
