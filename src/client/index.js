import { checkForUrl } from './js/UrlChecker';
import handleRequest from './js/handleRequest';
import updateUi from './js/updateUI';
import handleSubmit from './js/handleSubmit';

import './styles/header.scss';
import './styles/style.scss';
import './styles/footer.scss';

const btnSubmit = document.querySelector('#btn-submit');

// const urlEx = 'https://jamesclear.com/five-step-creative-process';

btnSubmit.addEventListener('click', handleSubmit);


export {
    checkForUrl,
    handleRequest,
    updateUi,
    handleSubmit
};