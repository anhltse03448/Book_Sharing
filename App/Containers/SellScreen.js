import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import IsbnActions from '../Redux/IsbnRedux'
import { NavigationActions } from 'react-navigation'
import Loading from '../Components/Loading'
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
    this.isDoneDetect = false
  }

  takePicture () {
    const options = {}
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err))
  }

  // componentWillMount () {
  //   this.props.fetchBookByISBN('9786042089005')
  // }

  handleBarCodeRead = (barcode) => {
    //this.setState({isFinding: false})
    this.isDoneDetect = true
    if (this.isDoneDetect) {
      this.props.fetchBookByISBN(barcode.data)
      this.isDoneDetect = false
    }
  }

  render () {
    const { book } = this.props
    if (book) {
      // console.log(book)
      this.props.navigateToBookDetail(book)
    }
    let camera = <Camera
      barCodeTypes={['org.gs1.EAN-13']}
      flashMode={Camera.constants.FlashMode.auto}
      onBarCodeRead={this.handleBarCodeRead}
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
          {this.state.isFinding ? camera : <Loading />}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const book = state.isbn.payload
  return {
    book
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateToBookDetail: (book) => dispatch(NavigationActions.navigate({
      routeName: 'BookDetailScreen',
      params: {book: book}
    })),
    fetchBookByISBN: (isbn) => dispatch(IsbnActions.isbnRequest(isbn))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SellScreen)
