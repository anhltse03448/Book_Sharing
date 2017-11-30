import { StyleSheet } from 'react-native'
import colors from '../../Themes/Colors'
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  image: {
    height: 100,
    width: 70,
    marginRight: 16
  },
  infoContainer: {
    flex: 1,
    alignSelf: 'flex-start'
  },
  title: {
    fontWeight: '500',
    fontSize: 18,
    marginBottom: 8
  },
  author: {
    marginBottom: 8
  },
  published: {
    marginBottom: 8
  },
  tags: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tag: {
    backgroundColor: colors.mainColor,
    marginRight: 4,
    marginBottom: 4,
    padding: 8,
    borderRadius: 100
  },
  tagText: {
    fontSize: 12,
    color: '#fff'
  }
})
