import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/ImageCellStyle'

export default class ImageCell extends Component {
  render () {
    return (
      <Image
        style={styles.image}
      />
    )
  }
}
