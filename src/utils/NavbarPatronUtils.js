/* Dhrumil Amish Shah */
export const isLoggedInUserDepositor = () => {
    return (localStorage.getItem("token") != undefined &&
        localStorage.getItem("user") != undefined &&
        JSON.parse(localStorage.getItem("user")).type === 'Depositor');
};

export const isDepositorPatronMember = () => {
    if (isLoggedInUserDepositor()) {
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
