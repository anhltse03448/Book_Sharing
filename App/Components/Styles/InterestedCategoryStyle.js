import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    marginLeft: 4,
    marginRight: 4,
    marginTop: 16,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 4,
    backgroundColor: '#fff'
  },
  container: {
    alignItems: 'center'
  },
  titleContainer: {
    marginBottom: 8
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  checkedContainer: {
    position: 'absolute',
    bottom: -4,
    right: 8,
    backgroundColor: 'transparent'
  }
})
