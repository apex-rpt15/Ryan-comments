import React from 'react';
import styles from '/Users/mille424/rpt15-FEC/Ryan-comments/client/dist/styles.css';
import SimpleTooltip from './SimpleTooltip.jsx'
import moment from 'moment';


class CommentMeta extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        showTooltip: false
      }

      this.mouseEnter = this.mouseEnter.bind(this)
      this.mouseLeave = this.mouseLeave.bind(this)
    }

  mouseEnter() {
    this.setState({
      showTooltip: true
    })
  }

  mouseLeave() {
    this.setState({
      showTooltip: false
    })
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
              onMouseEnter={this.mouseEnter}
              onMouseLeave={this.mouseLeave}>{moment(this.props.comment.commentDate).fromNow()}</span>
        
        {this.state.showTooltip &&
        <SimpleTooltip message={`Posted on ${this.formatDate(this.props.comment.commentDate)}`}/>}
        
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