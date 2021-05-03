const apiUrl = "https://api.meaningcloud.com/sentiment-2.1";
// const apiKey = "?key=0edf21344465a6a164864d70cd3f5213&&url=";
let txtLang = '&lang=en';

async function handleRequest(validUrl) {
    try {
        const res = await fetch(apiUrl + process.env.API_key + validUrl + txtLang);
        const data = await res.json();

        let text = data.sentence_list[0].text;
        let agreement = data.sentence_list[0].agreement;
        let confidence = data.sentence_list[0].confidence;
        let scoreTag = data.sentence_list[0].score_tag;

        Post('http://localhost:8081/addUrl', {text, agreement, confidence, scoreTag});

        Client.updateUi();

    } catch (error) {
        console.log('error', error);
    }
};

async function Post (url = '', data = {}) {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        node: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        return await res.json();
    } catch (error) {
        console.log("error", error);
    };
};

export default handleRequest;