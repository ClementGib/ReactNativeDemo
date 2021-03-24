import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { loadInitPosts, likePost, dislikePost,removePost } from '../store/actions'

import Post from './Post'

class ListPost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [],
      refresh: false
    }
  }

  init = async () => {
    try {
      await this.props.loadInitPosts()
      await this.setState({
        posts: this.props.posts
      })
    } catch (err) {
      console.log(err)
    }
  }

  componentWillMount () {
    this.init().then(() => console.log('init'))
  }

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.element}
          data={this.props.posts}
          extraData={this.props.posts}
          renderItem={({ item }) => <Post post={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {
  loadInitPosts,
  likePost,
  dislikePost,
  removePost
})(ListPost)
