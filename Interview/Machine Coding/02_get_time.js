function updateTimeData() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString.padStart(2, '0');
    const ampm = now.getHours() <= 12 ? 'AM' : 'PM';

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const date = now.toLocaleDateString(undefined, options);
    
    return `${date} - ${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(updateTimeData(), 1000);
