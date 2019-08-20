import React from 'react'
import Reply from './Reply.jsx'
import CommentAvatar from './CommentAvatar.jsx'
import CommentContent from './CommentContent.jsx'
import CommentMeta from './CommentMeta.jsx'

import styles from '/Users/mille424/rpt15-FEC/Ryan-comments/client/dist/styles.css'

class Comment extends React.Component { 
  constructor(props) {
    super(props);


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
      <div>
        <div className={styles.commentBox}
              onMouseEnter={this.replyMouseEnter}
              onMouseLeave={this.replyMouseLeave}>
          <CommentAvatar comment={this.props.comment}/>
          <CommentContent comment={this.props.comment}/>
          <CommentMeta comment={this.props.comment} showReplyHover={this.state.showReplyHover} handleReply={this.handleReply}/>

        </div>
      {this.state.showReply &&
        <Reply user={this.props.comment.userName} />  
      }
      
    </div>
    )
  }
}


export default Comment