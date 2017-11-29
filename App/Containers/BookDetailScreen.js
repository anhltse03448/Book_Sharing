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
  Header,
  Title,
  Card,
  Tabs,
  Tab,
  Body,
  Footer
} from 'native-base'
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
          title='Thiết lập cá nhân' />
        <Content>
          <BookContent />
          <Card>
            <Text
              style={styles.content}
            >dhasiudasdhsaidhsadhsajkdhsajkdhsakdhasiudasdhsaidhsadhsajkdhsajkdhsakdhasiudasdhsaidhsadhsajkdhsajkdhsakdhasiudasdhsaidhsadhsajkdhsajkdhsakdhasiudasdhsaidhsadhsaj
              kdhsajkdhsakdhasiudasdhsaidhsadhsajkdhsajkdhsak
            </Text>
          </Card>
          <Tabs>
            <Tab heading='Bình luận'
              activeTabStyle={styles.tab}
              tabStyle={styles.tab}
              textStyle={styles.text}>
              <BookCommentScreen />
              <CommentBox />
            </Tab>
            <Tab heading='Danh sách bán'
              activeTabStyle={styles.tab}
              tabStyle={styles.tab}
              textStyle={styles.text}>
              <ListBookSellerScreen />
            </Tab>
          </Tabs>
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
