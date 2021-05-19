import handleSubmit from './js/handleForm';

import './styles/base.scss';
import './styles/form.scss';

window.onload=function(){
    const buttonSubmit = document.getElementById('btn');
    buttonSubmit.addEventListener('click', handleSubmit);
    
}


export { handleSubmit };