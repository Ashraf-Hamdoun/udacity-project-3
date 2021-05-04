import { Urlchecker } from '../js/UrlChecker';

describe('Client Test', () => {
    it('should test that true === true', () => {
        expect(Urlchecker('www.google.com')).toBe(true)
      })
})
