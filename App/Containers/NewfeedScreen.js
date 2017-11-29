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
  View,
  Header,
  Body,
  Title
} from 'native-base'
import styles from './Styles/NewfeedScreenStyle'
import ListMain from '../Components/ListMain'

class NewfeedScreen extends Component {
  constructor (props) {
    super(props)
    this.onPressItem = this.onPressItem.bind(this)
  }
  onPressItem (item) {
    console.log('Press at newFeeds: ', item)
    this.props.navigation.navigate('BookDetailScreen', {book: item})
  }
  renderItem (item) {
    return (
      <View>
        <View
          style={styles.viewHeader}>
          <Text>{item.section}</Text>
          <Button transparent
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
        <Header>
          <Body>
            <Title>Cá nhân</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={{
          flex: 1
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
