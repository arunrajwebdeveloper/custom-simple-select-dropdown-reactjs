import { useEffect, useRef, useState } from "react";

export const useSelectDropdown = ({ data = [], selected = null }) => {
  const dropdownRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const options = selected
    ? [selected, ...data?.filter((item) => item.value !== selected?.value)]
    : data;

  const toggleDropdown = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isVisible]);

  return {
    dropdownRef,
    isVisible,
    setIsVisible,
    options,
    toggleDropdown,
  };
};
