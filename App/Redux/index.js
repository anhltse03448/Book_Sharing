import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer,
  listBook: require('./ListBookRedux').reducer,
  book: require('./BookRedux').reducer,
  auth: require('./AuthRedux').reducer,
  listBookFavovite: require('./ListBookFavoriteRedux').reducer,
  listSellerBook: require('./ListSellerBookRedux').reducer,
  listCommentBook: require('./ListCommentBookRedux').reducer
})

export default () => {
  let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}
