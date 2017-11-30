import React, { Component } from 'react'
import {
  FlatList
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import {
  Container,
  Content,
  Text,
  Button,
  View
} from 'native-base'
import styles from './Styles/NewfeedScreenStyle'
import ListMain from '../Components/ListMain'
import HeaderDefault from '../Components/HeaderDefault'
class NewfeedScreen extends Component {
  constructor (props) {
    super(props)
    this.onPressItem = this.onPressItem.bind(this)
  }
  onPressItem (item) {
    console.log('Press at newFeeds: ', item)
    this.props.navigation.navigate('BookDetailScreen', {book: item})
  }
  onPressFull (item) {
    this.props.navigation.navigate('FullBookScreen', {book: item})
  }
  renderItem (item) {
    return (
      <View>
        <View
          style={styles.viewHeader}>
          <Text
            style={{
              fontWeight: '600'
            }}
          >{item.section.toUpperCase()}</Text>
          <Button transparent
            onPress={() => this.onPressFull(item)}
            style={styles.btnSeeAll}
          >
            <Text style={styles.seeAll}>
              Xem tất cả
            </Text>
          </Button>
        </View>
        <ListMain onPressItem={this.onPressItem} />
      </View>
    )
  }
  render () {
    return (
      <Container>
        <HeaderDefault title='Trang chủ' />
        <Content contentContainerStyle={{
          flex: 1,
          backgroundColor: 'white'
        }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewfeedScreen)
