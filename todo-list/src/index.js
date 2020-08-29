import _ from 'lodash';

function component(){
    const element = document.createElement('div');
    //lodash, now importted by this script
    element.innerHTML = _.join(['hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());