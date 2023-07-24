import { useEffect, useState } from "react";

const useSocialLinksVisibility = () => {
    const [mostrarSocialLinks, setMostrarSocialLinks] = useState(true);

    useEffect(() => {
        const contactSection = document.getElementById("contact");

        const isContactVisible = (elem) => {
            const bounding = elem.getBoundingClientRect();
            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const handleScroll = () => {
            if (contactSection && isContactVisible(contactSection)) {
                setMostrarSocialLinks(false);
            } else {
                setMostrarSocialLinks(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return mostrarSocialLinks;
};

export default useSocialLinksVisibility;