import React, { Component } from 'react'
import { View, FlatList, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

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
import Loading from '../Components/Loading'

class BookCommentScreen extends Component {
  // constructor (props) {
  //   super(props)
  // }
  renderItem (item) {
    return (
      <CommentCell item={item} />
    )
  }

  render () {
    const { listCommentBook } = this.props
    return (
      <View>
        <FlatList
          data={listCommentBook}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => this.renderItem(item)}
      />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCommentScreen)
