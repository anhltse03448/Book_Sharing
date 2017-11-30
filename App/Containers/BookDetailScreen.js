import React, { Component } from 'react'
import { 
  Image,
  Text  
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import {
  Container,
  Content,
  Card,
  ListItem,
  Button,
  CardItem
} from 'native-base'
import colors from '../Themes/Colors'
import styles from './Styles/BookDetailScreenStyle'
import BookContent from '../Components/BookContent'
import BookCommentScreen from './BookCommentScreen'
import ListBookSellerScreen from './ListBookSellerScreen'
import CommentBox from '../Components/CommentBox'
import Navigation from '../Components/Navigation'
class BookDetailScreen extends Component {
  constructor (props) {
    super(props)
    let book = this.props.navigation
    console.log('Book: ', book)
  }
  render () {
    return (
      <Container>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title='Chắc ai đó sẽ về' />
        <Content>
          <BookContent />
          <CardItem button horizontal
            onPress={() => {
              this.props.navigation.navigate('ListBookSellerScreen')
            }}
            style={{
              alignItems: 'center'
            }}>
            <Button rounded
              style={{
                padding: 18,
                height: 30
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600'
                }}>41</Text>
            </Button>
            <Text style={styles.shareText}>
              Người chia sẻ
            </Text>
          </CardItem>
          <Card horizontal>
            <Text
              style={styles.content}
            >Đắc Nhân Tâm cụ thể và chi tiết với những chỉ dẫn để dẫn đạo người, để gây thiện cảm và dẫn dắt người khác,... những hướng dẫn ấy, qua thời gian
            </Text>
          </Card>
          <BookCommentScreen />
          <CommentBox />
        </Content>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailScreen)
