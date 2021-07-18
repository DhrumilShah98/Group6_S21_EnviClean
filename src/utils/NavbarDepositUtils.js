/* Author Sriram Attanti */
export const isDepositorLoggedIn = () => {
    return (localStorage.getItem("token") != undefined &&
        localStorage.getItem("user") != undefined &&
        JSON.parse(localStorage.getItem("user")).type === 'Depositor');
};