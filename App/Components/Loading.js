import React, { Component } from 'react'
import { View } from 'react-native'
// import PropTypes from 'prop-types';
import { Spinner } from 'native-base'
import colors from '../Themes/Colors'

export default class Loading extends Component {
  render () {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16
      }}>
        <Spinner
          color={colors.mainColor}
        />
      </View>
    )
  }
}
