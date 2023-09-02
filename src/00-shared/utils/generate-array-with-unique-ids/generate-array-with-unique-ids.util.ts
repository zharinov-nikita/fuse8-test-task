export function sharedUtilGenerateArrayWithUniqueIds(length: number) {
    return Array.from({ length }, (_, index) => ({ id: index }))
}
