"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ConditionalAdScript() {
  const pathname = usePathname();

  useEffect(() => {
    // Skip script injection on article pages
    if (pathname.startsWith("/article")) return;

    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7474815095793448";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [pathname]);

  return null;
}
