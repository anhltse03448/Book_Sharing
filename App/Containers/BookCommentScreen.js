import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ListCommentBookActions from '../Redux/ListCommentBookRedux'

// Styles
import {
  Container,
  Content,
  Input,
  Icon,
  Button
} from 'native-base'
import styles from './Styles/BookCommentScreenStyle'
import CommentCell from '../Components/CommentCell'

class BookCommentScreen extends Component {
  // constructor (props) {
  //   super(props)
  // }

  componentWillMount () {
    this.props.fetchListCommentBook(this.props.bookId)
  }

  renderItem (item) {
    return (
      <CommentCell item={item} />
    )
  }
  render () {
    const { payload } = this.props
    console.log(payload)
    return (
      <View
        style={{
          
        }}>
        <FlatList
          data={payload}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => this.renderItem(item)}
      />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const { payload } = state.listCommentBook
  return {
    payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListCommentBook: (bookId) =>
      dispatch(ListCommentBookActions.listCommentBookRequest(bookId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCommentScreen)
