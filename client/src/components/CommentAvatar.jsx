import React from 'react'
import styles from '/Users/mille424/rpt15-FEC/Ryan-comments/client/dist/styles.css'

class CommentAvatar extends React.Component {
  constructor(props) {
    super(props)


    //test image for avatars
    this.testimage = 'https://images.unsplash.com/photo-1526137966266-60618b40bcd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
  }

  render() {
    return (<div className={styles.CommentAvatar}>
      <img src={this.testimage} className={styles.commentAvatarImage}></img>
      </div>)
  }
}

export default CommentAvatar