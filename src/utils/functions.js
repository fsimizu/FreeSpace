import { scroller } from "react-scroll";

export const handleScroll = (id) => {
    setTimeout(() => { scrollTo(id) }, 200);
    handleCloseClick();
};

const scrollTo = (id) => {
    scroller.scrollTo(id, {
        duration: 400,
        offset: -60,
    });
};