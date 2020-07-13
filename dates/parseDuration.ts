
interface ParsedTimestamp {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

/**
 * Returns a duration object from the specified timestamp in seconds
 * @param {number} timestamp
 * @returns {{days: number, hours: number, minutes: number, seconds}}
 */
export const parseDuration = (timestamp: number): ParsedTimestamp => {
    let hours, minutes, seconds;
    const time = Math.min(timestamp, Number.MAX_SAFE_INTEGER);
    seconds = Math.floor(time / 1000);
    minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    const days = Math.floor(hours / 24);
    hours = hours % 24;

    return {days, hours, minutes, seconds};
};
