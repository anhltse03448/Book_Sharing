import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, FlatList } from 'react-native'
import { connect } from 'react-redux'
import SeperatorItem from '../Components/SeperatorItem'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import {
  Container,
  Content  
} from 'native-base'
import styles from './Styles/NoticeScreenStyle'
import NoticeCell from '../Components/NoticeCell'

class NoticeScreen extends Component {
  renderItem (item) {
    return (
      <NoticeCell onPress={this.props.onPress} />
    )
  }
  render () {
    return (
      <Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(NoticeScreen)
