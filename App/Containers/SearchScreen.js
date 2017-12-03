import React, { Component } from 'react'
import { Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ListBookActions from '../Redux/ListBookRedux'
import ListTagActions from '../Redux/ListTagRedux'
import SearchActions from '../Redux/SearchRedux'

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
import colors from '../Themes/Colors'

class SearchScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listTag: [],
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
      const listTag = this.props.listTag
      let listTagFiltered = []
      if (listTag) {
        listTagFiltered = listTag.filter(
          (tag) => tag.name.toLowerCase().search(text.toLowerCase()) !== -1)
      }
      this.setState({
        listTag: listTagFiltered,
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

  handlePressKeyword = (keyword) => {
    // this.props.fetchBookList()
    this.handleSearch(keyword)
    this.props.search(keyword)
    this.setState({
      showResult: true
    })
  }

  onPressItemSearch (item) {
    this.props.navigation.navigate('BookDetailScreen', {book: item})
  }

  render () {
    const { navigation } = this.props
    const { listTag } = this.state
    return (
      <Container>
        <Header style={{backgroundColor: colors.mainColor}} searchBar rounded>
          <Item>
            <Icon name='ios-search' />
            <Input
              autoCorrect={false}
              onChangeText={(text) => this.handleSearch(text)}
              value={this.state.searchText}
              placeholder='Tìm kiếm' />
            {this.state.isSearching &&
              <TouchableOpacity onPress={this.handleCancelSearch} style={styles.cancelButton}>
                <Icon name='ios-close-circle-outline' />
              </TouchableOpacity>
            }
          </Item>
        </Header>
        <Content>
          {!this.state.isSearching &&
            !this.state.showResult &&
              <List style={styles.searchOptionContainer}>
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
                <Trend
                  onItemPress={this.handlePressKeyword}
                  items={this.props.listTag} />
              </List>
          }
          {this.state.isSearching && !this.state.showResult &&
            <FlatList
              style={styles.searchResultOverlay}
              data={listTag}
              keyExtractor={(item) => item.id}
              renderItem={({item}) =>
                <ListItem
                  onPress={() => this.handlePressKeyword(item.name)}>
                  <Text style={styles.searchResultText}>{item.name}</Text>
                </ListItem>}
            />
          }
          {this.state.showResult &&
            (this.props.listBook
              ? <SearchResult
                items={this.props.listBook.books}
                onPressItemSearch={this.onPressItemSearch.bind(this)}
                /> : <Loading />)}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const listTag = state.listTag.payload
  const listBook = state.search.payload
  return {
    listTag,
    listBook
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListTag: () => dispatch(ListTagActions.listTagRequest()),
    search: (keyword) => dispatch(SearchActions.searchRequest(keyword))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
/*

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
*/