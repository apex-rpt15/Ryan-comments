import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import InfiniteScroll from 'react-infinite-scroller';
import Comment from './components/Comment.jsx'
import styles from '../../css/styles.css'

class App extends React.Component {
  constructor() {
    super();

    //can use window.location.pathname to determine current url
    this.currentPath = decodeURI(window.location.pathname);
    this.splitPath = this.currentPath.split('/')

    this.state = {
      artist: this.splitPath[1] || 'AmigoKing',
      song: this.splitPath[2] || 'Little Bugs',
      comments: [],
      commentsRetrieved: true,
      maxVisibleComments: 0,
      visibleComments: [],
      hasMoreComments: true,
      x: 0,
      y: 0

    }

    this.mouseMove = this.mouseMove.bind(this)
    this.loadMore = this.loadMore.bind(this)

    this.messageIconUrl = 'https://hackreactor-fec-project.s3-us-west-1.amazonaws.com/Message+Icon'

  }

  mouseMove(e) {
    this.setState({
      x: e.screenX,
      y: e.screenY  
    })
  }

  loadMore(page) {
    if (this.state.commentsRetrieved) {
      if (this.state.maxVisibleComments > this.state.comments.length) {
        if (this.state.comments.length > 0) {
          console.log('at the end of comments')
          this.setState({
            hasMoreComments: false
          })
        }
      } else {
        console.log('increasing comments limit')
        this.setState({
          maxVisibleComments: this.state.maxVisibleComments + 1,
          visibleComments: this.state.comments.slice(0, this.state.maxVisibleComments + 1)
        })
      }
    } else {
      console.log('comments not loaded yet')
    }
  }

  componentDidMount() {
    let myApp = this;
    $.get({
      url: 'http://ec2-54-245-205-70.us-west-2.compute.amazonaws.com:3002' + '/comments/' + myApp.state.artist + '/' + myApp.state.song,
      success: function(data){
        myApp.setState({
          comments: data,
          commentsRetrieved: true
        })
      }
    })
  }

  render() {
    return (
      <div className={styles.commentListFullBox} onMouseMove={this.mouseMove}>
        <h3 className={styles.commentListHeader}>
          <span >
            <img className={styles.commentListHeaderIcon} src={this.messageIconUrl}></img>
          </span>
          <span className={styles.commentListHeaderTitle}> {this.state.comments.length} Comments</span>
        </h3>
        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={this.state.hasMoreComments}
          >
        <ul>
          {this.state.visibleComments.map((item,index) => {
              return (<li key={index} ><Comment comment={item} x={this.state.x} y={this.state.y}/></li>)
          })}
        </ul>
        </InfiniteScroll>
      </div>
    )
  }
}

export default App