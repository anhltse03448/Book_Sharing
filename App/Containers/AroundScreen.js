import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/AroundScreenStyle'
import {
  Container,
  Content
} from 'native-base'
import Navigation from '../Components/Navigation'
import AroundCell from '../Components/AroundCell'
class AroundScreen extends Component {
  renderItem (item) {
    return (
      <AroundCell onPress={this.onPress.bind(this)} />
    )
  }
  onPress (user) {
    console.log('User: ', user)
    this.props.navigation.navigate('UserSharedInfoScreen')
  }
  render () {
    return (
      <Container>
        <Navigation
          title='Tìm kiếm quanh đây' />
        <Content>
          <FlatList
            data={[{key: 'a', section: 'Viễn tưởng'}, {key: 'b', section: 'Khoa học'}]}
            renderItem={({item}) => this.renderItem(item)}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(AroundScreen)
