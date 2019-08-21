import React from 'react'
import styles from '/Users/mille424/rpt15-FEC/Ryan-comments/client/dist/styles.css'
import BigUserTooltip from './BigUserTooltip.jsx'
import SimpleTooltip from './SimpleTooltip.jsx';


class CommentContent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showTimeTooltip: false,
      showSimpleUserTooltip: false,
      showBigUserTooltip: false
    }

    this.mouseEnterTimestamp = this.mouseEnterTimestamp.bind(this)
    this.mouseLeaveTimestamp = this.mouseLeaveTimestamp.bind(this)
    this.mouseEnterUser = this.mouseEnterUser.bind(this)
    this.mouseLeaveUser = this.mouseLeaveUser.bind(this)
  }

  mouseEnterTimestamp() {
    this.setState({
      showTimeTooltip: true
    })
  }

  mouseLeaveTimestamp() {
    this.setState({
      showTimeTooltip: false
    })
  }

  mouseEnterUser() {
    this.setState({
      showBigUserTooltip: true,
      showSimpleUserTooltip: true
    })
  }

  mouseLeaveUser() {
    this.setState({
      showBigUserTooltip: false,
      showSimpleUserTooltip: false
    })
  }

  render() {
    return(
    <div className={styles.commentContent}>
    <div>
      <span onMouseEnter={this.mouseEnterUser} onMouseLeave={this.mouseLeaveUser} style={{display : 'inline-block'}}>
        <a className={`${styles.grey}`} >{this.props.comment.userName}</a> </span>
      <span style={{display : 'inline-block'}}> 
        <a className={`${styles.smallText}`}> at </a> 
        <span className={`${styles.grey}`} onMouseEnter={this.mouseEnterTimestamp} onMouseLeave={this.mouseLeaveTimestamp}>{this.props.comment.songTime}:
        </span>
      </span>
    </div>




    {/* to do... fancy user tooltip */}

    <div className={styles.CommentBoxMaintext}>
      <span>
      {this.state.showTimeTooltip &&
      <SimpleTooltip message={`Play from ${this.props.comment.songTime}`} /> }
    
      {this.state.showSimpleUserTooltip && 
      <SimpleTooltip message={`Visit ${this.props.comment.userName}'s Profile`} /> }
      
      {this.state.showBigUserTooltip && 
      <BigUserTooltip image={this.props.comment.userPhoto} 
                      user={`${this.props.comment.userName}`}
                      followers={`${this.props.comment.userFollowers}`} /> }

        <p>{this.props.comment.text}</p>

      </span>
    </div>
  </div>)
  }
}

export default CommentContent