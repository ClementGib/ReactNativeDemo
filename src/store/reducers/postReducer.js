const initialState = {
  posts: [],
  selectedPost: '',
  lovelts: 0
}

const INIT_POSTS = 'INIT_POSTS'
const LIKE_POST = 'LIKE_POST'
const DISLIKE_POST = 'DISLIKE_POST'
const ADD_POST = 'ADD_POST'
const REMOVE_POST = 'REMOVE_POST'

function postReducer (state = initialState, action) {
  switch (action.type) {
    case INIT_POSTS:
      return {
        ...state,
        posts: action.payload
      }

    case LIKE_POST:
      return {
        ...state,
        posts: state.posts.map(item =>
          item.id === action.id
            ? () => {
                item.lovelts = action.value
                return item
              }
            : item
        )
      }
w
    case DISLIKE_POST:
      return {
        ...state,
        posts: state.posts.map(item =>
          item.id === action.id
            ? () => {
                item.lovelts = action.value
                return item
              }
            : item
        )
      }

    case ADD_POST:
      var id =  state.posts>0 ? state.posts[state.posts.length - 1].id : 0
      action.payload.id = ++id
      return {
        ...state,
        posts: state.posts.concat(action.payload)
      }

    case REMOVE_POST:
      console.log(action.payload)
      return {
        ...state,
        posts: state.posts.filter(item => item.id !== action.payload)
      }

    default:
      return state
  }
}

export default postReducer
