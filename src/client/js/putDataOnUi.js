async function putDataOnUi () {
    try {
        const request = await fetch('http://localhost:8081/get');
        const allData = await request.json();
        console.log(allData);
        
        // Elements
        const textDiv = document.querySelector('#text');
        const agreementDiv = document.querySelector('#agreement');
        const confidenceDiv = document.querySelector('#confidence');
        const score_tag = document.querySelector('#score_tag');
        const subjectivity = document.querySelector('#subjectivity');
        const irony = document.querySelector('#irony');

        // put Data in elements of html UI
        textDiv.innerHTML = 'Text is : ' + '<span>' + allData.text + '</span>';
        agreementDiv.innerHTML = 'Agreement is : ' + '<span>' + allData.agreement + '</span>';
        confidenceDiv.innerHTML = 'Confidence is : ' + '<span>' + allData.confidence + '</span>';
        score_tag.innerHTML = 'Score tag is : ' + '<span>' + allData.scoreTag + '</span>';
        subjectivity.innerHTML = 'Subjectivity is : ' + '<span>' + allData.subjectivity + '</span>';
        irony.innerHTML = 'Irony is : ' + '<span>' + allData.irony + '</span>';
        
    } catch(error) {
        console.log('Error is :: ', error);
    }
};

export default putDataOnUi;