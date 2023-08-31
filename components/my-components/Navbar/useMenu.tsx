import { useState, useEffect } from "react";

export default function useMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleMenuOpen = () => {
      setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
      setIsMenuOpen(false);
    };

    document.addEventListener("menuOpenEvent", handleMenuOpen);
    document.addEventListener("menuCloseEvent", handleMenuClose);

    return () => {
      document.removeEventListener("menuOpenEvent", handleMenuOpen);
      document.removeEventListener("menuCloseEvent", handleMenuClose);
    };
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      document.dispatchEvent(new Event("menuCloseEvent"));
    } else {
      document.dispatchEvent(new Event("menuOpenEvent"));
    }
  };

  return { isMenuOpen, toggleMenu };
}
