// import SocketIo from "socket.io-client";

import { io } from 'socket.io-client';

export const socket = roomId =>
  io(`https://spacesheep.co.kr/${roomId}`, {
    cors: {
      origin: '*',
      credentials: true,
    },
  });
export const socketWithUser = (token, roomId) =>
  io(`https://spacesheep.co.kr${roomId}`, {
    auth: {
      token: token,
    },
    cors: {
      origin: '*',
      credentials: true,
    },
  });

export const initSocketConnetion = token => {
  if (token === null) {
    // 비회원인 경우
    if (socket) {
      // 이미 연결되어있는 경우
      return;
    }
    socket.connect();
  } else {
    // 회원인 경우
    if (socketWithUser(token)) {
      // 이미 연결되어있는 경우
      return;
    }
    socketWithUser(token).connect();
  }
};

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

const sendMessage = msg => {
  socket.emit('message', msg);
};

export const socketFunctions = {
  sendMessage,
};
