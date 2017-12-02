import { takeLatest, takeEvery, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { ListBookTypes } from '../Redux/ListBookRedux'
import { ListBookSoldByUserTypes } from '../Redux/ListBookSoldByUserRedux'
import { BookTypes } from '../Redux/BookRedux'
import { AuthTypes } from '../Redux/AuthRedux'
import { ListBookFavoriteTypes } from '../Redux/ListBookFavoriteRedux'
import { ListSellerBookTypes } from '../Redux/ListSellerBookRedux'
import { ListCommentBookTypes } from '../Redux/ListCommentBookRedux'
import { AddFavoriteBookTypes } from '../Redux/AddFavoriteBookRedux'
import { DeleteFavoriteBookTypes } from '../Redux/DeleteFavoriteBookRedux'
import { UserTypes } from '../Redux/UserRedux'
import { AddCommentTypes } from '../Redux/AddCommentRedux'
import { ListTagTypes } from '../Redux/ListTagRedux'
import { SearchTypes } from '../Redux/SearchRedux'
import { IsbnTypes } from '../Redux/IsbnRedux'
import { AddSellerTypes } from '../Redux/AddSellerRedux'

/* ------------- Sagas ------------ */

import { getListBook } from './ListBookSagas'
import { getListBookSoldByUser } from './ListBookSoldByUserSagas'
import { getBook } from './BookSagas'
import { authWithFacebook } from './AuthSagas'
import { getListBookFavorite } from './ListBookFavoriteSagas'
import { getListSellerBook } from './ListSellerBookSagas'
import { getListCommentBook } from './ListCommentBookSagas'
import { addFavoriteBook } from './AddFavoriteBookSagas'
import { deleteFavoriteBook } from './DeleteFavoriteBookSagas'
import { getUser } from './UserSagas'
import { addComment } from './AddCommentSagas'
import { getListTag } from './ListTagSagas'
import { searchByTag } from './SearchSagas'
import { getBookByISBN } from './IsbnSagas'
import { addSeller } from './AddSellerSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeEvery(ListBookTypes.LIST_BOOK_REQUEST, getListBook, api),

    takeEvery(ListBookSoldByUserTypes.LIST_BOOK_SOLD_BY_USER_REQUEST, getListBookSoldByUser, api),

    takeEvery(ListBookFavoriteTypes.LIST_BOOK_FAVORITE_REQUEST, getListBookFavorite, api),

    takeLatest(AddFavoriteBookTypes.ADD_FAVORITE_BOOK_REQUEST, addFavoriteBook, api),

    takeLatest(DeleteFavoriteBookTypes.DELETE_FAVORITE_BOOK_REQUEST, deleteFavoriteBook, api),

    takeLatest(BookTypes.BOOK_REQUEST, getBook, api),

    takeLatest(AuthTypes.AUTH_REQUEST, authWithFacebook, api),

    takeEvery(ListSellerBookTypes.LIST_SELLER_BOOK_REQUEST, getListSellerBook, api),

    takeEvery(ListCommentBookTypes.LIST_COMMENT_BOOK_REQUEST, getListCommentBook, api),

    takeLatest(AddCommentTypes.ADD_COMMENT_REQUEST, addComment, api),

    takeLatest(UserTypes.USER_REQUEST, getUser, api),

    takeEvery(ListTagTypes.LIST_TAG_REQUEST, getListTag, api),

    takeEvery(SearchTypes.SEARCH_REQUEST, searchByTag, api),

    takeLatest(IsbnTypes.ISBN_REQUEST, getBookByISBN, api),

    takeLatest(AddSellerTypes.ADD_SELLER_REQUEST, addSeller, api)
  ])
}
