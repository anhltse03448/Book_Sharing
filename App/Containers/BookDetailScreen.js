import React, { Component } from 'react'
import {
  AsyncStorage,
  Text,
  View
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import AddFavoriteBookActions from '../Redux/AddFavoriteBookRedux'
import AddCommentActions from '../Redux/AddCommentRedux'
import DeleteFavoriteBookActions from '../Redux/DeleteFavoriteBookRedux'
import ListBookFavoriteActions from '../Redux/ListBookFavoriteRedux'
import ListCommentBookActions from '../Redux/ListCommentBookRedux'

// Styles
import {
  Container,
  Content,
  Card,
  ListItem,
  Button,
  CardItem,
  Badge
} from 'native-base'
import styles from './Styles/BookDetailScreenStyle'
import BookContent from '../Components/BookContent'
import BookCommentScreen from './BookCommentScreen'
import Navigation from '../Components/Navigation'
import ContentBook from '../Components/ContentBook'
import CommentDetail from '../Components/CommentDetail'
import ListMain from '../Components/ListMain'
import Loading from '../Components/Loading'

class BookDetailScreen extends Component {
  constructor (props) {
    super(props)
    this.onAddBookPress = this.onAddBookPress.bind(this)
  }

  componentWillMount () {
    AsyncStorage.getItem('@BookSharing:token')
    .then((res) => {
      this.props.fetchListBookFavorite(res)
    })
    .catch((error) => console.log(error))
  }
  componentDidMount () {
    this.props.fetchListCommentBook(
      this.props.navigation.state.params.book.id)
    // this.props.fetchBook(this.props.navigation.state.params.bookId)
  }

  onAddBookPress (item) {
    this.props.navigation.navigate('AddBookScreen', {item: item})
  }

  onSendComment = (bookId, content) => {
    AsyncStorage.getItem('@BookSharing:token')
    .then((res) => {
      if (content !== null && content !== '') {
        this.props.addComment({
          token: res,
          bookId,
          content
        })
        this.props.fetchListCommentBook(
          this.props.navigation.state.params.book.id)
      }
    })
    .catch((error) => console.log(error))
  }

  onPressFavorite = (checked, bookId) => {
    AsyncStorage.getItem('@BookSharing:token')
    .then((res) => {
      if (checked) {
        this.props.addFavoriteBook({token: res, bookId})
      } else {
        this.props.deleteFavoriteBook({token: res, bookId})
      }
    })
    .catch((error) => console.log(error))
  }

  render () {
    const { navigation, listCommentBook } = this.props
    const item = navigation.state.params.book
    console.log(listCommentBook)
    return (
      <Container>
        <Navigation onPressBack={() => navigation.goBack()}
          title={item.name} />
        {this.props.payload
          ? <Content>
            <BookContent
              listBookFavorite={this.props.payload}
              onPressFavorite={(checked) => this.onPressFavorite(checked, item.id)}
              navigation={navigation}
              item={item}
              onAddBookPress={this.onAddBookPress} />
            <ContentBook />
            <CommentDetail bookId={item.id} onSendComment={this.onSendComment} />
            {
              (listCommentBook)
                ? (
                    (listCommentBook.length > 0)
                      ? <BookCommentScreen listCommentBook={listCommentBook} />
                      : <View style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        paddingBottom: 24
                      }}>
                        <Text>Hãy là người đầu tiên comment</Text>
                      </View>
                  )
                : <Loading />
            }
          </Content> : <Loading />}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { payload } = state.listBookFavovite
  const listCommentBook = state.listCommentBook.payload
  return {
    payload,
    listCommentBook
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavoriteBook: ({token, bookId}) =>
      dispatch(AddFavoriteBookActions.addFavoriteBookRequest({token, bookId})),
    addComment: ({token, bookId, content}) =>
      dispatch(AddCommentActions.addCommentRequest({token, bookId, content})),
    deleteFavoriteBook: ({token, bookId}) =>
      dispatch(DeleteFavoriteBookActions.deleteFavoriteBookRequest({token, bookId})),
    fetchListBookFavorite: (token) =>
      dispatch(ListBookFavoriteActions.listBookFavoriteRequest(token)),
    fetchListCommentBook: (bookId) =>
      dispatch(ListCommentBookActions.listCommentBookRequest(bookId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailScreen)
