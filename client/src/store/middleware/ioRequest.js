export default function createIoRequest(socket) {
  return (action) => {
    socket.emit('request', action);
  };
}
