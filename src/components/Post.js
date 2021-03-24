import React, { Component } from 'react'

import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button
} from 'react-native'
import { connect } from 'react-redux'
import { likePost, dislikePost, removePost } from '../store/actions'

import { IconButton } from 'react-native-paper'

import imagesManager from '../../assets/img/imageManager'

class Post extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: props.post.id,
      lovelts: props.post.lovelts,
      date: this.initDate(),
      image: this.initImage()
    }
  }

  initDate = () => {
    var a = new Date(this.props.post.created_at)
    var day =
      ('0' + a.getDate()).slice(-2) +
      '/' +
      ('0' + (a.getMonth() + 1)).slice(-2) +
      '/' +
      a.getFullYear()

    return day
  }

  initImage = () => {
    switch (this.props.post.image) {
      case 'covid.png':
        return imagesManager.covid
        break
      case 'nft.png':
        return imagesManager.nft
        break

      case 'btc.png':
        return imagesManager.btc
        break

      case 'blog.png':
        return imagesManager.default
        break

      default:
        return imagesManager.default
        break
    }
  }

  like = value => {
    if (this.props.post.lovelts > 0) {
      this.props.post.lovelts = 0
      this.props.likePost(this.props.post.id, this.props.post.lovelts)
      this.setState({ lovelts: 0 })
    } else {
      this.props.post.lovelts = 1
      this.props.likePost(this.props.post.id, this.props.post.lovelts)
      this.setState({ lovelts: 1 })
    }
  }

  dislike = () => {
    if (this.props.post.lovelts < 0) {
      this.props.post.lovelts = 0
      this.props.likePost(this.props.post.id, this.props.post.lovelts)
      this.setState({ lovelts: 0 })
    } else {
      this.props.post.lovelts = -1
      this.props.likePost(this.props.post.id, this.props.post.lovelts)
      this.setState({ lovelts: -1 })
    }
  }

  remove = () => {
    this.props.removePost(this.state.id)
  }

  componentWillReceiveProps (nextProps) {
    this.props = nextProps

    this.setState({
      id: this.props.post.id,
      date: this.initDate(),
      image: this.initImage()
    })
  }

  renderThumbs = value => {
    switch (value) {
      case 0:
        return (
          <View style={styles.icons}>
            <IconButton
              icon={require('../../assets/delete.png')}
              color={'grey'}
              size={30}
              onPress={this.remove}
            />
            <IconButton
              icon={require('../../assets/not-liked.png')}
              color={'#56C811'}
              size={30}
              onPress={this.like}
            />
            <IconButton
              icon={require('../../assets/not-disliked.png')}
              color={'#C70610'}
              size={30}
              onPress={this.dislike}
            />
          </View>
        )

      case 1:
        return (
          <View style={styles.icons}>
            <IconButton
              icon={require('../../assets/delete.png')}
              color={'grey'}
              size={30}
              onPress={this.remove}
            />
            <IconButton
              icon={require('../../assets/liked.png')}
              color={'#56C811'}
              size={30}
              onPress={this.like}
            />
            <IconButton
              icon={require('../../assets/not-disliked.png')}
              color={'#C70610'}
              size={30}
              onPress={this.dislike}
            />
          </View>
        )

      case -1:
        return (
          <View style={styles.icons}>
            <IconButton
              icon={require('../../assets/delete.png')}
              color={'grey'}
              size={30}
              onPress={this.remove}
            />
            <IconButton
              icon={require('../../assets/not-liked.png')}
              color={'#56C811'}
              size={30}
              onPress={this.like}
            />
            <IconButton
              icon={require('../../assets/disliked.png')}
              color={'#C70610'}
              size={30}
              onPress={this.dislike}
            />
          </View>
        )

      default:
        return (
          <View style={styles.icons}>
            <IconButton
              icon={require('../../assets/delete.png')}
              color={'grey'}
              size={30}
              onPress={this.remove}
            />
            <IconButton
              icon={require('../../assets/not-liked.png')}
              color={'#56C811'}
              size={30}
              onPress={this.like}
            />
            <IconButton
              icon={require('../../assets/not-disliked.png')}
              color={'#C70610'}
              size={30}
              onPress={this.dislike}
            />
          </View>
        )
    }
  }

  render () {
    return (
      <View
        style={
          this.props.post.lovelts == 0
            ? styles.postDefault
            : this.props.post.lovelts > 0
            ? styles.postLiked
            : styles.postDisliked
        }
      >
        <View style={styles.element}>
          <Text style={styles.title}>{this.props.post.title}</Text>

          <View style={styles.details}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={this.state.image} />
            </View>

            <View style={styles.informations}>
              <View style={styles.origin}>
                <Text style={styles.date}>{this.state.date}</Text>
                <Text style={styles.place}>{this.props.post.origin}</Text>
              </View>

              <Text style={styles.content}>{this.props.post.content}</Text>

              <View style={styles.more}>
                <Text style={styles.author}>{this.props.post.author}</Text>

                {this.renderThumbs(this.props.post.lovelts)}
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  postDefault: {
    flex: 1,

    borderWidth: 1,
    paddingBottom: 6,
    borderColor: '#EBEEF0'
  },
  postLiked: {
    flex: 1,
    backgroundColor: '#56C811',
    borderWidth: 1,
    paddingBottom: 6,
    borderColor: '#EBEEF0'
  },
  postDisliked: {
    flex: 1,
    backgroundColor: '#C70610',
    borderWidth: 1,
    paddingBottom: 6,
    borderColor: '#EBEEF0'
  },
  element: {
    paddingLeft: 5,

    backgroundColor: '#F7F7F7',
    marginTop: 6,
    marginLeft: 8,
    marginRight: 6,
    borderWidth: 1,
    borderColor: 'grey'
  },
  title: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16
  },
  details: {
    flex: 1,
    marginTop: 6,
    flexDirection: 'row',
    backgroundColor: '#F7F7F7'
  },
  imageContainer: {
    height: 102,
    width: 112,
    borderWidth: 1,
    borderColor: '#EBEEF0'
  },

  image: {
    height: 100,
    width: 110,
    resizeMode: 'stretch'
  },
  informations: {
    paddingTop: 4,
    flex: 1,
    flexDirection: 'column',
    marginLeft: 8
  },

  origin: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  date: {
    color: 'black',
    fontSize: 12
  },
  place: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black'
  },
  content: {
    fontSize: 14
  },
  more: {
    marginTop: 4,
    marginBottom: 2,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row'
  },
  author: {
    marginTop: 1,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'black'
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  like: {
    margin: 0
  },
  dislike: {}
})

export default connect(null, { likePost, dislikePost, removePost })(Post)
