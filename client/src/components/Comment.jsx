import React from 'react'
import Reply from './Reply.jsx'

class Comment extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      showReply: false
    }

    this.handleReply = this.handleReply.bind(this)
  }

  handleReply(e) {
      this.setState({
        showReply: true
      })
  }

  render() {
    return(
      <div className='comment'>
      <div>{this.props.comment.userName} at {this.props.comment.songTime} {this.props.comment.commentDate}</div>
      <div>{this.props.comment.text}</div>
      <div onClick={this.handleReply}>Reply!</div>
      {this.state.showReply &&
      <Reply user={this.props.comment.userName} />
      }
    </div>
    )
  }
}


export default Comment