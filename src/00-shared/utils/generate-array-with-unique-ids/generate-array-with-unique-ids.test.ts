import { describe, test, expect } from 'vitest'
import { sharedUtilGenerateArrayWithUniqueIds } from './generate-array-with-unique-ids.util'

describe('sharedUtilFormatDate', () => {
    const data = 10
    const result = [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
    ]
    test('case 1', () => {
        expect(sharedUtilGenerateArrayWithUniqueIds(data)).toEqual(result)
        expect(sharedUtilGenerateArrayWithUniqueIds(data)).toMatchSnapshot()
    })
})
