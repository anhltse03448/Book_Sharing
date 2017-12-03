import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewPropTypes,
  Platform,
  Text } from 'react-native'
import CameraRollPicker from 'react-native-camera-roll-picker'
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'
import config from '../Config/FirebaseConfig'
import RNFetchBlob from 'react-native-fetch-blob'
import ImagePicker from 'react-native-image-picker'

var firebase = require('firebase')

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export default class CustomActions extends Component {
  constructor (props) {
    super(props)
    this._images = []
    this.state = {
      modalVisible: false
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }

    this.onActionsPress = this.onActionsPress.bind(this)
    this.selectImages = this.selectImages.bind(this)
  }

  setImages(images) {
    this._images = images
  }

  getImages() {
    return this._images
  }

  setModalVisible(visible = false) {
    this.setState({modalVisible: visible})
  }

  onActionsPress() {
    const options = ['Choose From Library', 'Cancel'];
    const cancelButtonIndex = options.length - 1;
    this.context.actionSheet().showActionSheetWithOptions({
      options,
      cancelButtonIndex,
    },
    (buttonIndex) => {
      switch (buttonIndex) {
        case 0:
          this.setModalVisible(true);
          break;        
        default:
      }
    });
  }

  selectImages(images) {
    this.setImages(images);
  }

  uploadImage = (uri, mime = 'image/jpeg', name) => {    
    return new Promise((resolve, reject) => {
      const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      const sessionId = new Date().getTime()
      let uploadBlob = null
      const imageRef = firebase.storage().ref('images').child(`${sessionId}`)
  
      fs.readFile(uploadUri, 'base64')
        .then((data) => {
          return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
          uploadBlob = blob
          return imageRef.put(blob, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          return imageRef.getDownloadURL()
        })
        .then((url) => {
          resolve(url)
        })
        .catch((error) => {
          reject(error)
      })
    })
  }

  _pickImage = () => {
    this.setState({ uploadURL: '' })

    ImagePicker.launchImageLibrary({}, (response) => {
      this.uploadImage(response.uri)
        .then(url => {
          this.props.onSend([{
            image: url
          }])
        })
        .catch(error => console.log(error))
    })
  }

  renderNavBar() {
    return (
      <NavBar style={{
        statusBar: {
          backgroundColor: '#FFF',
        },
        navBar: {
          backgroundColor: '#FFF',
        },
      }}>
        <NavButton onPress={() => {
          this.setModalVisible(false);
        }}>
          <NavButtonText style={{
            color: '#000',
          }}>
            {'Cancel'}
          </NavButtonText>
        </NavButton>
        <NavTitle style={{
          color: '#000',
        }}>
          {'Camera Roll'}
        </NavTitle>
        <NavButton onPress={() => {
          this.setModalVisible(false)

          this.setState({ uploadURL: '' })
          /*
          ImagePicker.launchImageLibrary({}, (response) => {
            this.uploadImage(response.uri)
              .then(url => {
                this.props.onSend([{
                  image: url
                }])
              })
              .catch(error => console.log(error))
          })

          console.log('Images Upload:  ', images) */
/*
          const images = this.getImages().map((image) => {
            return {
              image: image.uri
            }
          }) */
          /*
          this.props.onSend(images)
          this.setImages([])
          */
        }}>
          <NavButtonText style={{
            color: '#000'
          }}>
            {'Gửi'}
          </NavButtonText>
        </NavButton>
      </NavBar>
    )
  }

  renderIcon() {
    if (this.props.icon) {
      return this.props.icon()
    }
    return (
      <View
        style={[styles.wrapper, this.props.wrapperStyle]}
      >
        <Text
          style={[styles.iconText, this.props.iconTextStyle]}
        >
          +
        </Text>
      </View>
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.props.containerStyle]}
        onPress={() => this._pickImage()}
      >
        {/* <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          {this.renderNavBar()}
          <CameraRollPicker
            maximum={10}
            imagesPerRow={4}
            callback={this.selectImages}
            selected={[]}
          />
        </Modal> */}
        {this.renderIcon()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 13,
    borderColor: '#b2b2b2',
    borderWidth: 2,
    flex: 1,
  },
  iconText: {
    color: '#b2b2b2',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});

CustomActions.contextTypes = {
  actionSheet: PropTypes.func,
};

CustomActions.defaultProps = {
  onSend: () => {},
  options: {},
  icon: null,
  containerStyle: {},
  wrapperStyle: {},
  iconTextStyle: {},
};

CustomActions.propTypes = {
  onSend: PropTypes.func,
  options: PropTypes.object,
  icon: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
  iconTextStyle: Text.propTypes.style,
};