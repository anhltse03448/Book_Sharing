import React, { Component } from 'react'
import { View } from 'react-native'
// import PropTypes from 'prop-types';
import { Spinner } from 'native-base'
import colors from '../Themes/Colors'

export default class Loading extends Component {
  render () {
    return (
      <View style={[{
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16
      }, this.props.style]}>
        <Spinner
          color={colors.mainColor}
        />
      </View>
    )
  }
}
