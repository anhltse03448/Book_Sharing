import React, { Component } from 'react'
import { Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ListBookActions from '../Redux/ListBookRedux'
import ListTagActions from '../Redux/ListTagRedux'

// Styles
import styles from './Styles/SearchScreenStyle'
import {
  Container,
  Content,
  Header,
  Item,
  Icon,
  Input,
  ListItem,
  List
} from 'native-base'
import Trend from '../Components/Trend'
import SearchResult from '../Components/SearchResult'
import Loading from '../Components/Loading'

class SearchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isSearching: false,
      searchText: '',
      showResult: false
    }
  }

  componentWillMount () {
    this.props.fetchListTag()
  }

  handleSearch = (text) => {
    if (text === '' || text === null) {
      this.handleCancelSearch()
    } else {
      this.setState({
        isSearching: true,
        showResult: false,
        searchText: text
      })
    }
  }

  handleCancelSearch = () => {
    this.setState({
      isSearching: false,
      searchText: '',
      showResult: false
    })
  }

  handlePressKeyword = () => {
    this.props.fetchBookList()
    this.setState({
      showResult: true
    })
  }

  onPressItemSearch (item) {
    this.props.navigation.navigate('BookDetailScreen', {book: item})
  }

  render () {
    const { navigation } = this.props
    const keywordData = [
      {key: 1, name: 'harry potter'},
      {key: 2, name: 'harry potter'},
      {key: 3, name: 'harry potter'},
      {key: 4, name: 'harry potter'},
      {key: 5, name: 'harry potter'},
      {key: 6, name: 'harry potter'},
      {key: 7, name: 'harry potter'},
      {key: 8, name: 'harry potter'},
      {key: 9, name: 'harry potter'},
      {key: 10, name: 'harry potter'},
      {key: 11, name: 'harry potter'},
      {key: 12, name: 'harry potter'},
      {key: 13, name: 'harry potter'},
      {key: 14, name: 'harry potter'}
    ]
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name='ios-search' />
            <Input
              onChangeText={(text) => this.handleSearch(text)}
              value={this.state.searchText}
              placeholder='Search' />
            {this.state.isSearching &&
              <TouchableOpacity onPress={this.handleCancelSearch} style={styles.cancelButton}>
                <Icon name='ios-close-circle-outline' />
              </TouchableOpacity>
            }
          </Item>
        </Header>
        <Content>
          <List style={styles.searchOptionContainer}>
            <ListItem
              onPress={() => {
                navigation.navigate('AroundScreen', {navigation: this.props.navigation})
              }}
            >
              <Icon
                style={styles.icon}
                name='ios-navigate-outline'
              />
              <Text
                style={styles.text}
              >Tìm kiếm quanh đây</Text>
            </ListItem>
            <ListItem
              style={styles.list}
              onPress={() => {
              }}>
              <Icon
                style={styles.icon}
                name='ios-trending-up' />
              <Text
                style={styles.text}
              >Xu hướng tìm kiếm</Text>
            </ListItem>
            <Trend />
          </List>
          {this.state.isSearching && !this.state.showResult &&
            <FlatList
              style={styles.searchResultOverlay}
              data={keywordData}
              renderItem={({item}) =>
                <ListItem
                  onPress={this.handlePressKeyword}>
                  <Text style={styles.searchResultText}>{item.name}</Text>
                </ListItem>}
            />
          }
          {this.state.showResult &&
            (this.props.payload
              ? <SearchResult
                items={this.props.payload}
                onPressItemSearch={this.onPressItemSearch.bind(this)}
                /> : <Loading />)}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { payload } = state.listBook
  const listTag = state.listTag.payload
  return {
    payload,
    listTag
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBookList: () => dispatch(ListBookActions.listBookRequest()),
    fetchListTag: () => dispatch(ListTagActions.listTagRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
