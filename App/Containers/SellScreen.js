import React, { Component } from 'react'
import { View, Text } from 'react-native'
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
import Camera from 'react-native-camera'

class SellScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFinding: true
    }
  }

  takePicture () {
    const options = {}
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err))
  }

  render () {
    let camera = <Camera
      barCodeTypes={['org.gs1.EAN-13']}
      flashMode={Camera.constants.FlashMode.auto}
      onBarCodeRead={(barcode) => {        
        this.setState({isFinding: false})
        alert(barcode.data)
      }}
      style={{
        flex: 1
      }}
      aspect={Camera.constants.Aspect.fill}
    />
    return (
      <Container>
        <HeaderDefault title='Bán sách' />
        <Content contentContainerStyle={{
          flex: 1
        }}>
          {this.state.isFinding ? camera : null}
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
