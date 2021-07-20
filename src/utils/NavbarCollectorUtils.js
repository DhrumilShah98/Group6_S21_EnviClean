/* Author Parth Thummar */
export const isCollectorLoggedIn = () => {
    return (localStorage.getItem("token") != undefined &&
        localStorage.getItem("user") != undefined &&
        JSON.parse(localStorage.getItem("user")).type === 'Collector');
};