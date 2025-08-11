export function formatSize(bytes: number): string {
    // Guard against invalid input
    if (!isFinite(bytes) || bytes <= 0) {
        return '0 KB';
    }

    const KB = 1024;
    const MB = KB * 1024;
    const GB = MB * 1024;

    // Choose unit
    if (bytes >= GB) {
        const val = bytes / GB;
        return `${round(val)} GB`;
    }
    if (bytes >= MB) {
        const val = bytes / MB;
        return `${round(val)} MB`;
    }
    // Default to KB for everything else
    const val = bytes / KB;
    return `${round(val)} KB`;

    // Rounds to one decimal place unless it's effectively an integer
    function round(n: number): string {
        const rounded = Math.round(n * 10) / 10; // one decimal place
        // Show no decimal if it's an integer after rounding
        return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
    }
}
