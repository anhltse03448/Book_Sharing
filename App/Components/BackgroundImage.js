import React, { Component } from 'react';
import {
  Image
} from 'react-native'

const styles = {
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  }
}

export class BackgroundImage extends Component {
  static defaultProps = {
    resizeMode: 'cover',
    style: {}
  }

  render () {
    return (
      <Image source={this.props.source} style={styles.backgroundImage}
        resizeMode={this.props.resizeMode}>
        {this.props.children}
      </Image>
    )
  }
}
