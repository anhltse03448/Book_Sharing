import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import {
  Container,
  Content
} from 'native-base'
import styles from './Styles/BookFollowScreenStyle'
import SeperatorItem from '../Components/SeperatorItem'
import NoticeFindBookCell from '../Components/NoticeFindBookCell'

class BookFollowScreen extends Component {
  renderItem (item) {
    return (
      <NoticeFindBookCell onPress={this.props.onPress} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BookFollowScreen)
