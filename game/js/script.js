let socket = io();

let getfriend;

getfriend.addEventListener('click',()=>{
    socket.emit('addfriend');
});

