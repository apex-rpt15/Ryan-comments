import React from 'react'
import Reply from './Reply.jsx'
import moment from 'moment'
import styles from '/Users/mille424/rpt15-FEC/Ryan-comments/client/dist/styles.css'

class Comment extends React.Component { 
  constructor(props) {
    super(props);

    //test image for avatars
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
      <div className={styles.commentBox}>
        <div className='commentAvatar comment-box-part1'>
          <img src={this.testimage} className={styles.commentAvatarImage}></img>
        </div>
      <div className='comment-box-part2'>
        <div>
          <span>
            <a>{this.props.comment.userName}</a> 
            <span>at {this.props.comment.songTime}</span>
        </span>
        </div>
        <div className={styles.CommentBoxMaintext}>
          <span>{this.props.comment.text}</span>
      </div>
      </div>

      <div>
      <div className='comment-box-part3'>
        {moment(this.props.comment.commentDate).fromNow()}
        <button className={styles.commentReplyButton}
                onClick={this.handleReply} 
                onMouseEnter={this.replyMouseEnter} 
                onMouseLeave={this.replyMouseLeave}>Reply</button>
      </div>

      
      {this.state.showReply &&
        <Reply user={this.props.comment.userName} />  
      }
      </div>
    </div>
    )
  }
}


export default Comment