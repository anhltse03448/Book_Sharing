// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'https://sheltered-ridge-83772.herokuapp.com') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //

  const getRoot = () => api.get('')
  const getListBook = () => api.get('/books')
  const getBook = (id) => api.get('/book/' + id)
  const getUser = (userId) => api.get('/user/' + userId)
  const authWithFacebook = (token) => api.post('/auth/facebook', {token: token})

  const getListSellerOfABook = ({token, bookId}) => api.get('/posts/' + bookId, {}, {
    headers: {'Authorization': 'Bearer ' + token}
  })

  const getListCommentOfABook = (bookId) => api.get('/comments/' + bookId)

  const addComment = ({token, bookId, content}) => api.post('/comments', {
    bookid: bookId,
    content: content
  }, {
    headers: {'Authorization': 'Bearer ' + token}
  })

  // favorite book
  const getListBookFavorite = (token) => api.get('/favorites', {}, {
    headers: {'Authorization': 'Bearer ' + token}
  })

  const addFavoriteBook = ({token, bookId}) => api.post('/favorites', {
    bookid: bookId
  }, {
    headers: {'Authorization': 'Bearer ' + token}
  })

  const deleteFavoriteBook = ({token, bookId}) => api.delete('/favorites/' + bookId, {}, {
    headers: {'Authorization': 'Bearer ' + token}
  })

  const getListTag = () => api.get('/tags')

  const searchByQuery = (keyword) => api.get('/search?q' + keyword)

  const searchByTag = (keyword) => api.get('/tag-name/' + keyword)

  const getBookByISBN = (isbn) => api.get('/isbn/' + isbn)

  const getListBookSoldByUser = (token) => api.get('/profile/posts', {}, {
    headers: {'Authorization': 'Bearer ' + token}
  })

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    getRoot,
    getListBook,
    getBook,
    getUser,
    authWithFacebook,
    getListSellerOfABook,
    addComment,
    getListCommentOfABook,
    getListBookFavorite,
    addFavoriteBook,
    deleteFavoriteBook,
    getListTag,
    searchByQuery,
    searchByTag,
    getBookByISBN,
    getListBookSoldByUser
  }
}

// let's return back our create method as the default.
export default {
  create
}
