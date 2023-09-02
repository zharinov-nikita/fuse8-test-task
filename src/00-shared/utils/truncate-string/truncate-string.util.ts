export function sharedUtilTruncateString(
    string: string,
    maxLength: number,
    textEnd?: string
) {
    if (string.length > maxLength) {
        return `${string.slice(0, maxLength)}${textEnd ? textEnd : '...'}`
    } else {
        return string
    }
}
