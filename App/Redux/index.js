import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer,
  listBook: require('./ListBookRedux').reducer,
  listBookSoldByUser: require('./ListBookSoldByUserRedux').reducer,
  book: require('./BookRedux').reducer,
  auth: require('./AuthRedux').reducer,
  listBookFavovite: require('./ListBookFavoriteRedux').reducer,
  addFavoriteBook: require('./AddFavoriteBookRedux').reducer,
  deleteFavoriteBook: require('./DeleteFavoriteBookRedux').reducer,
  listSellerBook: require('./ListSellerBookRedux').reducer,
  listCommentBook: require('./ListCommentBookRedux').reducer,
  addComment: require('./AddCommentRedux').reducer,
  user: require('./UserRedux').reducer,
  listTag: require('./ListTagRedux').reducer,
  search: require('./SearchRedux').reducer,
  isbn: require('./IsbnRedux').reducer,
  addSeller: require('./AddSellerRedux').reducer,
  deleteSellingBook: require('./DeleteSellingBookRedux').reducer,
  demo: require('./DemoRedux').reducer
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
