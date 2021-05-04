function handleSubmit(event) {
    event.preventDefault();
    
    const articleUrl = document.querySelector('#article-url').value;
    
    // check what text was put into the form field
    if (Client.checkForUrl(articleUrl)) {
        console.log('URL is valid');

        // function to handle our request to API
        Client.handleRequest(articleUrl);

    } else {
        console.log('URL is not valid');
        alert('Please check your Url and renter a valid one !');
    }

    console.log("::: Form Submitted :::");
    
}

export default handleSubmit;