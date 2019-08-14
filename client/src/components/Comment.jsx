import React from 'react'
import Reply from './Reply.jsx'

class Comment extends React.Component { 
  constructor(props) {
    super(props);

    //test image for avatarg
    this.testimage = 'https://images.unsplash.com/photo-1526137966266-60618b40bcd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'

    this.state = {
      showReply: false,
      showReplyHover: false
    }

    this.handleReply = this.handleReply.bind(this)

    this.replyMouseEnter = this.replyMouseEnter.bind(this)
    this.replyMouseLeave = this.replyMouseLeave.bind(this)
  }

  handleReply(e) {
      this.setState({
        showReply: true
      })
  }

  replyMouseEnter(e) {
    this.setState({
      showReplyHover: true
    })
  }

  replyMouseLeave() {
    this.setState({
      showReplyHover: false
    })
  }

  render() {
    return(
      <div className='comment-box'>
        <div className='comment-avatar comment-box-part1'>
          <img src={this.testimage} className='comment-avatar-image'></img>
        </div>
      <div className='comment-box-part2'>
        <div>
          <span>
            <a>{this.props.comment.userName}</a> 
            <span>at {this.props.comment.songTime}</span>
        </span>
        </div>
        <div className='comment-box-maintext'>
          <span>{this.props.comment.text}</span>
      </div>
      </div>

      <div className='comment-box-part3'>
        {this.props.comment.commentDate}
        <button className='comment-reply-button' 
                onClick={this.handleReply} 
                onMouseEnter={this.replyMouseEnter} 
                onMouseLeave={this.replyMouseLeave}>Reply</button>
      </div>

      <br></br>
      {this.state.showReply &&
        <Reply user={this.props.comment.userName} />  
      }


    </div>
    )
  }
}


export default Comment