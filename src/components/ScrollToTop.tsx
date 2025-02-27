"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpToLine } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollableDiv = document.querySelector(".scroll-class");

    if (!scrollableDiv) return;

    const handleScroll = () => {
      setIsVisible(scrollableDiv.scrollTop > window.innerHeight);
    };

    scrollableDiv.addEventListener("scroll", handleScroll);
    return () => {
      scrollableDiv.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollableDiv = document.querySelector(".scroll-class");
    if (scrollableDiv) {
      scrollableDiv.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    isVisible && (
      <Button
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 opacity-90 shadow-md rounded-full"
        size="icon"
        onClick={scrollToTop}
      >
        <ArrowUpToLine className="h-4 w-4" />
      </Button>
    )
  );
};
