import data from '../reducers/posts.json'

const INIT_POSTS = 'INIT_POSTS'
const LIKE_POST = 'LIKE_POST'
const DISLIKE_POST = 'DISLIKE_POST'
const ADD_POST = 'ADD_POST'
const REMOVE_POST = 'REMOVE_POST'

export function loadInitPosts () {
  return function (dispatch) {
    dispatch({
      type: INIT_POSTS,
      payload: data
    })
  }
}

export function likePost (id,value) {
  return function (dispatch) {
    dispatch({
      type: LIKE_POST,
      payload:{id,value}
    })
  }
}

export function dislikePost (id,value) {
  return function (dispatch) {
    dispatch({
      type: DISLIKE_POST,
      payload:{id,value}
    })
  }
}


export const addPost = (newPost) => {
  return {
      type: ADD_POST,
      payload: newPost,
  };
};


export const removePost = (id) => {
  return {
      type: REMOVE_POST,
      payload: id
  };
};