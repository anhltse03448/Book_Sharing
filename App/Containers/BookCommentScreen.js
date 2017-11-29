import React, { Component } from 'react'
import { View } from 'react-native'
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

class BookCommentScreen extends Component {
  render () {
    const comments = ["ABC","ABC","ABC","ABC","ABC","ABC",'abc']
    let content = comments.map(e => {
      return (
        <CommentCell />
      )
    })
    return (
      <View
        style={{
          marginLeft: 4
        }}>
        {content}
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
