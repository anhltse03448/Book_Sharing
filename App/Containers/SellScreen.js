import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import {
  Container,
  Content
} from 'native-base'
import styles from './Styles/SellScreenStyle'
import HeaderDefault from '../Components/HeaderDefault'

class SellScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      torchMode: 'off',
      cameraType: 'back'
    }
  }
  render () {
    return (
      <Container>
        <HeaderDefault title='Bán sách' />
        <Content>

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

export default connect(mapStateToProps, mapDispatchToProps)(SellScreen)
