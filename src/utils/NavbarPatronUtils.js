/* Dhrumil Amish Shah */
export const isCollectorLoggedIn = () => {
    return (localStorage.getItem("token") != undefined &&
        localStorage.getItem("user") != undefined &&
        JSON.parse(localStorage.getItem("user")).type === 'Collector');
};

export const isCollectorPatronMember = () => {
    if (isCollectorLoggedIn()) {
        console.log(JSON.parse(localStorage.getItem("user")));
        if (parseInt(JSON.parse(localStorage.getItem("user")).isPatron) === 1) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};
