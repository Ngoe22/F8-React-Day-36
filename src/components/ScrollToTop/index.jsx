import { useLocation } from "react-router";

function ScrollToTop() {
    const location = useLocation();
    console.log(location);

    window.scrollTo(0, 0);
    return null;
}

export default ScrollToTop;
