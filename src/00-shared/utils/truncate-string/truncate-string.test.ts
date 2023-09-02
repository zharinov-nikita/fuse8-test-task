import { describe, test, expect } from 'vitest'
import { sharedUtilTruncateString } from './truncate-string.util'

describe('sharedUtilTruncateString', () => {
    test('case 1', () => {
        const string = 'hello world'
        const maxLength = 3
        const result = 'hel...'
        expect(sharedUtilTruncateString(string, maxLength)).toEqual(result)
        expect(sharedUtilTruncateString(string, maxLength)).toMatchSnapshot()
    })
    test('case 2', () => {
        const string = 'hello world'
        const maxLength = 5
        const result = 'hello world'
        expect(sharedUtilTruncateString(string, maxLength, ' world')).toEqual(
            result
        )
        expect(sharedUtilTruncateString(string, maxLength, ' world'))
            .toMatchSnapshot
    })
})
