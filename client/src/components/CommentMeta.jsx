import React from 'react';
import styles from '/Users/mille424/rpt15-FEC/Ryan-comments/client/dist/styles.css';
import ReactTooltip from 'react-tooltip';
import moment from 'moment';


class CommentMeta extends React.Component {
  constructor(props) {
    super(props)

    }

  //format date as DD Month YYYY for hover tooltip
  formatDate(date) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let result = ''
    let commentDate = new Date(date)
    result += commentDate.getDate() + ' '
    result += months[commentDate.getMonth()] + ' '
    result += commentDate.getFullYear()
    return result;
  }

  render() {
    return (
      <div className={styles.commentMeta}>
      <div >
        <span className={`${styles.grey} ${styles.smallText} ${styles.dateTooltip}`} 
          data-tip={`Posted on ${this.formatDate(this.props.comment.commentDate)}`}
          data-delay-show='750'
          data-delay-hide='250'
          data-class={`${styles.tooltip}`}
          data-place='bottom'
          data-offset="{'right': 30}">{moment(this.props.comment.commentDate).fromNow()}</span>
        <ReactTooltip />

        {this.props.showReplyHover &&
        <div>
          <button className={styles.commentReplyButton}
          onClick={this.props.handleReply}>Reply
          </button>
        </div>}
      </div>
      </div>
    )
  }
}

export default CommentMeta