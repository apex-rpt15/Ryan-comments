import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Comment from './components/Comment.jsx'

class App extends React.Component {
  constructor() {
    super();

    //can use window.location.pathname to determine current url
    this.currentPath = decodeURI(window.location.pathname);
    this.splitPath = this.currentPath.split('/')
    console.log(this.currentPath)
    console.log(this.splitPath)
    this.state = {
      artist: this.splitPath[1] || 'AmigoKing',
      song: this.splitPath[2] || 'Little Bugs',
      comments: []
    }

    
    
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
      <div>
        {this.state.comments.map((item,index) => {
            return (<Comment key={index} comment={item} />)
        })}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('main'))