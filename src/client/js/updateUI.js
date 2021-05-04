async function updateUi () {
    const request = await fetch('http://localhost:8081/get');
    try {
        const allData = await request.json();
        console.log(allData);

        document.querySelector('#text').innerHTML = 'Text is : ' + '<span>' + allData.text + '</span>';
        document.querySelector('#agreement').innerHTML = 'Agreement is : ' + '<span>' + allData.agreement + '</span>';
        document.querySelector('#confidence').innerHTML = 'Confidence is : ' + '<span>' + allData.confidence + '</span>';
        document.querySeclector('#score_tag').innerHTML = 'Score tag is : ' + '<span>' + allData.scoreTag + '</span>';
        document.querySeclector('#irony').innerHTML = 'Irony tag is : ' + '<span>' + allData.irony + '</span>';
        document.querySeclector('#subjectivity').innerHTML = 'Subjectivity tag is : ' + '<span>' + allData.subjectivity + '</span>';

        console.log(document.querySeclector('#subjectivity'));
        
    } catch(error) {
        console.log('Error :: ', error);
    }
};

export default updateUi;