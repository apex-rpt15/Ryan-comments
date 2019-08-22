import React from 'react'
import styles from '/Users/mille424/rpt15-FEC/Ryan-comments/css/styles.css'

class Reply extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      showHover: false
    }

    this.replyAvatar = 'https://hackreactor-fec-project.s3-us-west-1.amazonaws.com/Screen+Shot+2019-08-19+at+10.20.22+PM.png'
  }



  render() {
    return(
      <div className={`${styles.commentReplyBox}`}>
        <div className={styles.replyForm}>
          <div className={styles.replyFormWrapper}>
            <div className={styles.replyAvatar}>
              <img src={this.replyAvatar} className={styles.replyAvatar}></img>
            </div>
            
            <div className={styles.replyInputWrapper}>
              <a className={styles.replyToUser}>@{this.props.user}</a>
              <input className={styles.replyInput} placeholder='Write a reply' style={{paddingLeft: '100px'}}></input>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Reply