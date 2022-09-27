const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
let socket;

if (process.env.NODE_ENV == 'development') {
    socket = io('ws://localhost:8080');
} else {
    socket = io('https://socket-chat-jm6xh.ondigitalocean.app/api');
}

socket.on('message', text => {

    const el = document.createElement('li');
    el.innerHTML = text;
    document.querySelector('ul').appendChild(el)

});

document.querySelector('button').onclick = () => {

    const text = document.querySelector('input').value;
    socket.emit('message', text)
    
}