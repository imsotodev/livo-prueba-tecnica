import { useEffect, useState } from "react";

function useScroll() {
  const [showScroll, setShowScroll] = useState(false);

  const element = document.documentElement;
  const toggleScroll = () => {
    if (element) {
      element.style.overflow = showScroll ? "auto" : "hidden";
      setShowScroll(!showScroll);
    }
  };

  useEffect(() => {
    return () => {
      element.style.overflow = "auto";
    };
  }, []);

  return { toggleScroll };
}

export default useScroll;
