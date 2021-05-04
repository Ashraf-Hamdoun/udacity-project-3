import updateUi from '../js/updateUi'

global.fetch = jest.fn(() =>
    // this's the fetch
    Promise.resolve({
        // after fetching 'await'
        json: () => Promise.resolve({
            Text: 'anything' // here we write what happens after fetching
        })
    })
)

// try
it("Fetch data from server and draw it", async () => {
    // here i call my function
    const _testApi = await updateUi();
    // how nany times we expect fetching will happen
    expect(fetch).toHaveBeenCalledTimes(1);
    // what result of this function
    expect(_testApi).toBe(console.log({ Text: 'anything' }))
})

// catch
it("Handle the exception", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("Api failed"))
})