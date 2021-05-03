import {checkForUrl} from '../js/UrlChecker'

describe('Client Test', () => {
    it('should test that true === true', () => {
        expect(checkForUrl('www.google.com')).toBe(true)
      })
})
