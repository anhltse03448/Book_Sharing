import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Image, PixelRatio, Platform } from 'react-native'
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
      comment: ''
    }
  }
  render () {
    return (
      <View
        style={styles.container}
      >
        <Image
          source={require('../Images/LoginBg.png')}
          style={(Platform.OS === 'ios') ? styles.imageIos : styles.imageAndroid}
        />
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
          onPress={() => {
            console.log('Finish', PixelRatio.get())
            let comment = this.state.comment
            this.props.onSendComment(comment)
            this.setState({
              comment: ''
            })
          }}
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
