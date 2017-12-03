import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Image, PixelRatio, Platform, AsyncStorage } from 'react-native'
import styles from './Styles/CommentDetailStyle'
import {
  ListItem,
  Input,
  Button,
  Text,
  Right
} from 'native-base'
import CommentBox from '../Components/CommentBox'
import BookCommentScreen from '../Containers/BookCommentScreen'

export default class CommentDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: '',
      user: null
    }
  }

  componentDidMount () {
    AsyncStorage.getItem('@BookSharing:user')
    .then((res) => {
      this.setState({
        user: JSON.parse(res)
      })
    })
    .catch((error) => console.log(error))
  }

  handleOnPress = () => {
    let comment = this.state.comment
    this.props.onSendComment(this.props.bookId, comment)
    this.setState({
      comment: ''
    })
  }

  render () {
    console.log(this.state.user)
    return (
      <View
        style={styles.container}
      >
        {
          this.state.user && <Image
            source={{uri: this.state.user.avatar}}
            style={(Platform.OS === 'ios') ? styles.imageIos : styles.imageAndroid}/>
        }
        <Text
          style={styles.nhanxet}
        >Nhận xét</Text>
        <Input
          onChangeText={(text) => this.setState({comment: text})}
          value={this.state.comment}
          style={styles.input}
          placeholder='Viết bình luận'
        />
        <Button transparent
          onPress={this.handleOnPress}
          style={{
            paddingRight: 12
          }}
        >
          <Right>
            <Text style={styles.finish}>Finish</Text>
          </Right>
        </Button>
      </View>
    )
  }
}
