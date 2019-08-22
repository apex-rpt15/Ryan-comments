import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import InfiniteScroll from 'react-infinite-scroller';
import Comment from './components/Comment.jsx'
import styles from '/Users/mille424/rpt15-FEC/Ryan-comments/css/styles.css'

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
      // hasMoreComments: true,
      // nextRef: null,
      x: 0,
      y: 0

    }

    this.mouseMove = this.mouseMove.bind(this)
    this.loadMore = this.loadMore.bind(this)

    this.messageIconUrl = 'https://hackreactor-fec-project.s3-us-west-1.amazonaws.com/Screen+Shot+2019-08-19+at+10.18.47+PM.png'

  }

  mouseMove(e) {
    this.setState({
      x: e.screenX,
      y: e.screenY  
    })
  }

  loadMore(page) {

  }


  componentDidMount() {
    let myApp = this;
    $.get({
      url: '/comments/' + myApp.state.artist + '/' + myApp.state.song, 
      success: function(data){
        myApp.setState({
          comments: data
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
        {/* <InfiniteScroll
          pageStart={0}
          loadMore={this.loadMore}
          hasMore={this.state.hasMoreComments}
          loader={<div className="loader" key={0}>Loading ...</div>}> */}
        <ul>
          {this.state.comments.map((item,index) => {
              return (<li key={index} ><Comment comment={item} x={this.state.x} y={this.state.y}/></li>)
          })}
        </ul>
        {/* </InfiniteScroll> */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'))