import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Comment from './components/Comment.jsx'
import styles from '/Users/mille424/rpt15-FEC/Ryan-comments/client/dist/styles.css'

class App extends React.Component {
  constructor() {
    super();

    //can use window.location.pathname to determine current url
    this.currentPath = decodeURI(window.location.pathname);
    this.splitPath = this.currentPath.split('/')

    this.state = {
      artist: this.splitPath[1] || 'AmigoKing',
      song: this.splitPath[2] || 'Little Bugs',
      comments: []
    }

    this.onReply = this.onReply.bind(this);
    
    
  }

  onReply(e) {
    
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
      
      <div className={styles.commentListFullBox}>
        <h3 className='comment-list-header'>
          <span className='comment-list-header-icon'>placeholder for icon</span>
          <span className='comment-list-header-title'> {this.state.comments.length} Comments</span>
        </h3>
        <ul>
          {this.state.comments.map((item,index) => {
              return (<li key={index} ><Comment comment={item} /></li>)
          })}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'))