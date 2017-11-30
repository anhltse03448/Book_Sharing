import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
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
  renderItem (item) {
    return (
      <CommentCell item={item} />
    )
  }
  render () {
    return (
      <View
        style={{
          marginLeft: 4
        }}>
        <FlatList
          data={[{key: 'a', section: 'Viễn tưởng'}, {key: 'b', section: 'Khoa học'}]}
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
