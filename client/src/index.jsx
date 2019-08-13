import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import Comment from './components/Comment.jsx'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      artist: null,
      song: null,
      comments: []
    }
  }

  componentDidMount() {
    let myApp = this;
    $.get({
      url: 'comments/AmigoKing/Little%20Bugs',
      success: function(data){
        console.log(data)
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