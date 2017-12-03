import React, { Component } from 'react'
import {
  FlatList
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ListBookActions from '../Redux/ListBookRedux'
import { NavigationActions } from 'react-navigation'

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
    this.state = {
      isPress : false
    }
  }

  componentWillMount () {
    this.props.fetchBookList()
  }

  onPressItem = (item) => {
    this.props.navigation.navigate('BookDetailScreen', {book: item})
  }

  onPressFull (item) {
    this.props.navigation.navigate('FullBookScreen', {item: item})
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
        <ListMain items={this.props.payload} onPressItem={this.onPressItem} />
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
            data={[
              {key: 1, section: 'Mua nhiều nhất'},
              {key: 2, section: 'Gần bạn'},
              {key: 3, section: 'Sách mới bán'}
            ]}
            renderItem={({item}) => this.renderItem(item)}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { payload } = state.listBook
  return {
    payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateToBookDetail: (book) => dispatch(NavigationActions.navigate({
      routeName: 'BookDetailScreen',
      params: {book: book}
    })),
    fetchBookList: () => dispatch(ListBookActions.listBookRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewfeedScreen)
