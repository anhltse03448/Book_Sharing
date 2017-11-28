import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import {
  Container,
  Content,
  Header,
  Footer
} from 'native-base'
import styles from './Styles/InterestSelectScreenStyle'

class InterestSelectScreen extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Text>Hello</Text>
        </Header>
        <Content>          
        </Content>
        <Footer>
        </Footer>
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

export default connect(mapStateToProps, mapDispatchToProps)(InterestSelectScreen)
