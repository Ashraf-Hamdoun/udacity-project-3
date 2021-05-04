const apiUrl = "https://api.meaningcloud.com/sentiment-2.1";
let txtLang = '&lang=en';

async function handleRequest(validUrl) {
    try {
        const res = await fetch(apiUrl + process.env.API_key + validUrl + txtLang);
        const data = await res.json();

        console.log(data);
        
        let text = data.sentence_list[0].text;
        let agreement = data.agreement;
        let confidence = data.confidence;
        let scoreTag = data.score_tag;
        let irony = data.irony;
        let subjectivity = data.subjectivity;

        Post('http://localhost:8081/addUrl', {text, agreement, confidence, scoreTag, irony, subjectivity});

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

export {
    Post
}