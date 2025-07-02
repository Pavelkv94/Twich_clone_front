export const getRandomColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10).toString();
    }
    return color;
}

export const stringToColor = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return '#' + (0x1000000 + (hash & 0xFFFFFF)).toString(16).slice(1);
}