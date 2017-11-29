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
import styles from './Styles/ListBookSellerScreenStyle'
import SellerCell from '../Components/SellerCell'
import SeperatorItem from '../Components/SeperatorItem'

class ListBookSellerScreen extends Component {
  renderItem (item) {
    return (
      <SellerCell />
    )
  }
  render () {
    return (
      <Container>
        <Content>
          <FlatList
            data={[{key: 'a', section: 'Viễn tưởng'}, {key: 'b', section: 'Khoa học'}]}
            renderItem={({item}) => this.renderItem(item)}
            ItemSeparatorComponent={SeperatorItem}
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

export default connect(mapStateToProps, mapDispatchToProps)(ListBookSellerScreen)
