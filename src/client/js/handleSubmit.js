function handleSubmit(event) {
    event.preventDefault();
    
    const articleUrl = document.querySelector('#article-url').value;
    
    // check what text was put into the form field
    if (Client.Urlchecker(articleUrl)) {
        console.log('the URL is valid');

        // function to handle our request to API
        Client.getDataFromApi(articleUrl);

    } else {
        // if the url isn't correct do this
        console.log('the URL is not valid');
        alert('Please check your Url and renter a valid one !');
    }
    // do this to show if button listen to the event
    console.log("::: Form Submitted :::");
    
}

export default handleSubmit;