const mobile = () => {
    if (
        screen.width < 500 ||
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/WebOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i)
    ) {
        return true;
    } else {
        return false;
    }
}
export default mobile;