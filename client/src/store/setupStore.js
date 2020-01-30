import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import createIoRequest from './middleware/ioRequest';
import createSocketMessageHandler from './middleware/socketMessageHandler';

const createStoreWithMiddlewareAndSocket = (socket) => {
  const ioRequest = createIoRequest(socket);
  const socketMessageHandler = createSocketMessageHandler(socket);
  const storeEnhancer = composeWithDevTools(
    applyMiddleware(
      socketMessageHandler,
      thunk.withExtraArgument(ioRequest),
    ),
  );
  return createStore(
    rootReducer,
    storeEnhancer,
  );
};

export default createStoreWithMiddlewareAndSocket;
