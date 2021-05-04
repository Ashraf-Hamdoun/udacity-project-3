import { Urlchecker } from './js/UrlChecker';
import getDataFromApi from './js/getDataFromApi';
import putDataOnUi from './js/putDataOnUi';
import handleSubmit from './js/handleSubmit';

import './styles/header.scss';
import './styles/style.scss';
import './styles/footer.scss';

const btnSubmit = document.querySelector('#btn-submit');

btnSubmit.addEventListener('click', handleSubmit);

export {
    Urlchecker,
    getDataFromApi,
    putDataOnUi,
    handleSubmit
};