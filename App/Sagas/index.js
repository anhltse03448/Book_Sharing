import { takeLatest, takeEvery, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { ListBookTypes } from '../Redux/ListBookRedux'
import { BookTypes } from '../Redux/BookRedux'
import { AuthTypes } from '../Redux/AuthRedux'
import { ListBookFavoriteTypes } from '../Redux/ListBookFavoriteRedux'
import { ListSellerBookTypes } from '../Redux/ListSellerBookRedux'
import { ListCommentBookTypes } from '../Redux/ListCommentBookRedux'
import { AddFavoriteBookTypes } from '../Redux/AddFavoriteBookRedux'

/* ------------- Sagas ------------ */

import { getListBook } from './ListBookSagas'
import { getBook } from './BookSagas'
import { authWithFacebook } from './AuthSagas'
import { getListBookFavorite } from './ListBookFavoriteSagas'
import { getListSellerBook } from './ListSellerBookSagas'
import { getListCommentBook } from './ListCommentBookSagas'
import { addFavoriteBook } from './AddFavoriteBookSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeEvery(ListBookTypes.LIST_BOOK_REQUEST, getListBook, api),
    takeEvery(ListBookFavoriteTypes.LIST_BOOK_FAVORITE_REQUEST, getListBookFavorite, api),
    takeLatest(AddFavoriteBookTypes.ADD_FAVORITE_BOOK_REQUEST, addFavoriteBook, api),
    takeLatest(BookTypes.BOOK_REQUEST, getBook, api),
    takeLatest(AuthTypes.AUTH_REQUEST, authWithFacebook, api),
    takeEvery(ListSellerBookTypes.LIST_SELLER_BOOK_REQUEST, getListSellerBook, api),
    takeEvery(ListCommentBookTypes.LIST_COMMENT_BOOK_REQUEST, getListCommentBook, api)
  ])
}
