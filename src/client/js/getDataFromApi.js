const apiUrl = "https://api.meaningcloud.com/sentiment-2.1";
let txtLang = '&lang=en';

async function getDataFromApi(validUrl) {
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

        SendDataToServer('http://localhost:8081/adds', {text, agreement, confidence, scoreTag, irony, subjectivity});

        Client.putDataOnUi();

    } catch (error) {
        console.log('error', error);
    }
};

async function SendDataToServer (url = '', data = {}) {
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
        console.log("Error is :: ", error);
    };
};

export default getDataFromApi;