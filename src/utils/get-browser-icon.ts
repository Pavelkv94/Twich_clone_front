import { FaChrome, FaFirefoxBrowser, FaSafari, FaEdge, FaOpera } from "react-icons/fa";
import { IconType } from "react-icons";

export const getBrowserIcon = (browser: string): IconType => {
    switch (browser) {
        case "chrome":
            return FaChrome;
        case "firefox":
            return FaFirefoxBrowser;
        case "safari":
            return FaSafari;
        case "edge":
            return FaEdge;
        case "opera":
            return FaOpera;
        default:
            return FaChrome;
    }
}