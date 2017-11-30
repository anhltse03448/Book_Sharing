import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, FlatList } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import {
  Container,
  Content
} from 'native-base'
import Navigation from '../Components/Navigation'
import styles from './Styles/FullBookScreenStyle'
import FullBookCell from '../Components/FullBookCell'
class FullBookScreen extends Component {
  renderItem (item) {
    return <FullBookCell />
  }
  render () {
    return (
      <Container>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title='Truyện tranh' />
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

export default connect(mapStateToProps, mapDispatchToProps)(FullBookScreen)
