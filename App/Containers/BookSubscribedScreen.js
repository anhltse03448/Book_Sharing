import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Image } from 'react-native'
import {
  Container,
  Content
} from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
// import styles from './Styles/BookSubscribedScreenStyle'
import Navigation from '../Components/Navigation'
import BookSubscribedItem from '../Components/BookSubscribedItem'

class BookSubscribedScreen extends Component {
  render () {
    return (
      <Container>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title='Sách đang theo dõi' />
        <Content>
          <BookSubscribedItem />
          <BookSubscribedItem />
          <BookSubscribedItem />
          <BookSubscribedItem />
          <BookSubscribedItem />
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

export default connect(mapStateToProps, mapDispatchToProps)(BookSubscribedScreen)
