import { useEffect, useState } from "react";

export default function useMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateMobile = () => {
      if (window.innerWidth <= 640)
        setIsMobile(true)
      else
        setIsMobile(false);
    }

    window.addEventListener("resize", updateMobile);
    updateMobile();

    return () => {
      window.removeEventListener("resize", updateMobile);
    }
  }, []);

  return isMobile;
}