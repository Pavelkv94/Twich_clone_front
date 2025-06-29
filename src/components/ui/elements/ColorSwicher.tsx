'use client'

import { useConfig } from "@/hooks/useConfig";
import { useEffect } from "react";




const ColorSwicher = () => {
    const config = useConfig();

    useEffect(() => {
        document.body.classList.forEach(className => {
            if (className.match(/theme-\w+/)) {
                document.body.classList.remove(className);
            }
        });

        if (config.theme) {
            document.body.classList.add(`theme-${config.theme}`);
        }
    }, [config.theme]);

    return null
}

export default ColorSwicher