function setIsOnlineColor(status) {
    const onlineColor = '#008000';
    const offlineColor = '#ff0000';
    if (!status.online) {
        return offlineColor;
    }
    return onlineColor;
}

export default setIsOnlineColor;