async function updateUi () {
    const request = await fetch('http://localhost:8081/get');
    try {
        const allData = await request.json();
        console.log(allData);

        document.querySelector('#text').innerHTML = 'Text is : ' + '<span>' + allData.text + '</span>';
        document.querySelector('#agreement').innerHTML = 'Agreement is : ' + '<span>' + allData.agreement + '</span>';
        document.querySelector('#confidence').innerHTML = 'Confidence is : ' + '<span>' + allData.confidence + '</span>';
        document.querySelector('#score_tag').innerHTML = 'Score tag is : ' + '<span>' + allData.scoreTag + '</span>';

    } catch(error) {
        console.log('Error :: ', error);
    }
};

export default updateUi;