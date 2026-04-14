import { getMessage} from './message.js';
import { changeColor } from './style.js';

window.changeText = function(){
    let element= document.getElementById('title')

    element.innerText = getMessage();
    element.style.color = changeColor();
}