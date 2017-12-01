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
import CommentBox from '../Components/CommentBox'
import Navigation from '../Components/Navigation'
import ContentBook from '../Components/ContentBook'

class BookDetailScreen extends Component {
  constructor (props) {
    super(props)
    let book = this.props.navigation
    console.log('Book: ', book)
    this.onAddBookPress = this.onAddBookPress.bind(this)
  }
  onAddBookPress (item) {
    console.log('Add Book Press')
    this.props.navigation.navigate('AddBookScreen')
  }
  onSendPress (value) {
    console.log('Value:  ', value)
  }
  render () {
    return (
      <Container>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title='Chắc ai đó sẽ về' />
        <Content>
          <BookContent onAddBookPress={this.onAddBookPress} />
          <CardItem button horizontal
            onPress={() => {
              this.props.navigation.navigate('ListBookSellerScreen', {navigation: this.props.navigation})
            }}
            style={{
              alignItems: 'center',
              borderTopWidth: 0.3,
              borderTopColor: '#BDBDBD'
            }}>
            <Button rounded
              style={styles.btnNumber}
            >
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600'
                }}>41</Text>
            </Button>
            <Text style={styles.shareText}>
              Người đang bán
            </Text>
          </CardItem>
          <ContentBook />
          <BookCommentScreen />
          <CommentBox
            onSendPress={this.onSendPress.bind(this)}
          />
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
