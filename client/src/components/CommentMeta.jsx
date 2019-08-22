import React from 'react';
import styles from '/Users/mille424/rpt15-FEC/Ryan-comments/css/styles.css';
import SimpleTooltip from './SimpleTooltip.jsx'
import moment from 'moment';


class CommentMeta extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        showDateTooltip: false,
        showReplyTooltip: false
      }

      this.mouseEnterDate = this.mouseEnterDate.bind(this)
      this.mouseLeaveDate = this.mouseLeaveDate.bind(this)

      this.mouseEnterReply = this.mouseEnterReply.bind(this)
      this.mouseLeaveReply = this.mouseLeaveReply.bind(this)

    }

  mouseEnterDate() {
    this.setState({
      showDateTooltip: true
    })
  }

  mouseLeaveDate() {
    this.setState({
      showDateTooltip: false
    })
  }

  mouseEnterReply() {
    this.setState({
      showReplyTooltip: true
    })
  }

  mouseLeaveReply() {
    this.setState({
      showReplyTooltip: false
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
              onMouseEnter={this.mouseEnterDate}
              onMouseLeave={this.mouseLeaveDate}>{moment(this.props.comment.commentDate).fromNow()}</span>
        
        {this.state.showDateTooltip &&
          <SimpleTooltip message={`Posted on ${this.formatDate(this.props.comment.commentDate)}`}
                         style={{top: 30, left: 330}}/>}

        {this.props.showReplyHover &&
        <div>
          <button className={styles.commentReplyButton}
                  onClick={this.props.handleReply}
                  onMouseEnter={this.mouseEnterReply}
                  onMouseLeave={this.mouseLeaveReply}>Reply
          </button>

          {this.state.showReplyTooltip &&
            <SimpleTooltip message={'Reply'} style={{top:50, left: 375 }}/>}
        </div>}
      </div>
      </div>
    )
  }
}

export default CommentMeta