export function convertToNepaliTime(isoString) {
    const date = new Date(isoString);
    const nepalDate = new Date(date.getTime() );
    const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(nepalDate);
}
