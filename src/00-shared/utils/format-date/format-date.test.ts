import { describe, test, expect } from 'vitest'
import { sharedUtilFormatDate } from './format-date.util'

describe('sharedUtilFormatDate', () => {
    const data = '2020-01-05 13:42:18.823766'
    const result = '05.01.2020'
    test('case 1', () => {
        expect(sharedUtilFormatDate(data)).toBe(result)
        expect(sharedUtilFormatDate(data)).toMatchSnapshot()
    })
})
