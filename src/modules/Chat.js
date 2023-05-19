// import SocketIo from "socket.io-client";

import { io } from 'socket.io-client';

const socket = io.connect('https://spacesheep.co.kr');

export default socket;

// socket.on('connect', () => {
//     // console.log('Connected to server');
//   });

//   socket.on('disconnect', () => {
//     // console.log('Disconnected from server');
//   });

//   socket.on('chat message', (msg) => {
//     // console.log('New message:', msg);
//   });

//   const sendMessage = (msg) => {
//     // socket.emit('chat message', msg);
//   };
