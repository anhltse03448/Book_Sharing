import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { ListBookTypes } from '../Redux/ListBookRedux'
import { BookTypes } from '../Redux/BookRedux'
import { AuthTypes } from '../Redux/AuthRedux'

/* ------------- Sagas ------------ */

import { getListBook } from './ListBookSagas'
import { getBook } from './BookSagas'
import { authWithFacebook } from './AuthSagas'
import { takeEvery } from 'redux-saga'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeEvery(ListBookTypes.LIST_BOOK_REQUEST, getListBook, api),
    takeLatest(BookTypes.BOOK_REQUEST, getBook, api),
    takeLatest(AuthTypes.AUTH_REQUEST, authWithFacebook, api)
  ])
}
