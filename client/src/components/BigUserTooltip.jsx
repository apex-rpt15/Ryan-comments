import React from 'react'
import styles from '/Users/mille424/rpt15-FEC/Ryan-comments/client/dist/styles.css';

class BigUserTooltip extends React.Component {
  constructor(props) {
    super(props)
    this.followerimage = 'https://hackreactor-fec-project.s3-us-west-1.amazonaws.com/follower+image'
    this.testimage = 'https://images.unsplash.com/photo-1526137966266-60618b40bcd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
  }


  render() {
    return(
      <div className={styles.userTooltip}>
        <img src={this.testimage} className={styles.commentAvatarImage}></img>
        <div>{this.props.user}</div>
        <span>
          <img src={this.followerimage} className={styles.followerImage}></img>
          <div className={`${styles.smallText} ${styles.grey}`}style={{display: 'inline-block'}}>{this.props.followers}</div>
        </span>
        <div>
          <button>Follow</button>
        </div>
      </div>
    )
  }
}



export default BigUserTooltip