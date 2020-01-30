export default function createSocketMessageHandler(socket) {
  return ({ dispatch }) => {
    socket.on('message', dispatch);
    return next => action => next(action);
  };
}
