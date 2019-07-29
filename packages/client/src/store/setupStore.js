import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer, initialState } from '../components/Todo/reducer';
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
    reducer,
    initialState,
    storeEnhancer,
  );
};

export default createStoreWithMiddlewareAndSocket;
