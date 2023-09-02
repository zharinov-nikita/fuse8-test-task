export function utilGenerateArrayWithUniqueIds(length: number) {
    return Array.from({ length }, (_, index) => ({ id: index }))
}
