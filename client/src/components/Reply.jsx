import React from 'react'
import styles from '/Users/mille424/rpt15-FEC/Ryan-comments/client/dist/styles.css'

class Reply extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      showHover: false
    }
  }



  render() {
    return(
      <div className={styles.commentReplyBox}>
        {'@' + this.props.user} <input placeholder='Write a reply'></input>
      </div>
    )
  }
}

export default Reply