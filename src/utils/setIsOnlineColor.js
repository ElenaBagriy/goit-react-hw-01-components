function setIsOnlineColor(status) {
    const onlineColor = '#008000';
    const offlineColor = '#ff0000';
    if (!status) {
        console.log(offlineColor);
        return offlineColor;
    }
    return onlineColor;
}

export default setIsOnlineColor;