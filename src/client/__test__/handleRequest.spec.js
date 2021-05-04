import { Post } from '../js/handleRequest'

// const testUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=0edf21344465a6a164864d70cd3f5213&&url=https://jamesclear.com/five-step-creative-process&lang=en'

describe('Client Test', () => {
    it('should test that true === true', () => {
        expect(Post('http://localhost:8081/addUrl', {})).toEqual({})
      })
})
