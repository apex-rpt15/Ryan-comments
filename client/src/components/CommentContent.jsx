import React from 'react'
import styles from '/Users/mille424/rpt15-FEC/Ryan-comments/client/dist/styles.css'
import ReactTooltip from 'react-tooltip'

class CommentContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
    <div className={styles.commentContent}>
    <span>
      <a className={`${styles.grey}`}
        data-tip={`Visit ${this.props.comment.userName}'s Profile`}
        data-class={`${styles.tooltip}`}
        delay-show='750' 
        delay-hide='250' 
        place='bottom' 
        offset="{'right': 30}">{this.props.comment.userName}</a> 
      <span> 
        <a className={`${styles.smallText}`}> at </a> 
        <span className={`${styles.grey}`}
          data-tip={`Play from ${this.props.comment.songTime}`}
          data-class={`${styles.tooltip}`}
          delay-show='750' 
          delay-hide='250' 
          place='bottom' 
          offset="{'right': 30}">{this.props.comment.songTime}:
        </span>
      </span>
    </span>
    <ReactTooltip delay-show='750' delay-hide='250' place='bottom' offset="{'right': 30}"/>
    <div className={styles.CommentBoxMaintext}>
      <span>
        <p>{this.props.comment.text}</p>
      </span>
    </div>
  </div>)
  }
}

export default CommentContent