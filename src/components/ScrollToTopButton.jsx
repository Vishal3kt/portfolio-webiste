import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 80) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        padding: "10px 13px",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "32px",
                        cursor: "pointer",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        zIndex: "999",
                        fontSize: "20px"
                    }}
                    aria-label="Scroll to top"
                >
                    <b> ↑</b>
                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
