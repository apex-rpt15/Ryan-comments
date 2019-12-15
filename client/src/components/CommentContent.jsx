import React from 'react'
import styles from '../../../css/styles.css'
import BigUserTooltip from './BigUserTooltip.jsx'
import SimpleTooltip from './SimpleTooltip.jsx';
import { thisExpression } from '@babel/types';


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
    <div className={styles.CommentBoxMaintext}>
      <span>
        <div>
          {this.state.showBigUserTooltip && 
          <BigUserTooltip image={this.props.comment.userPhoto}
                          style={{top: 30, left: 30}}
                          user={`${this.props.comment.userName}`}
                          followers={`${this.props.comment.userFollowers}`} 
                          onMouseEnter={this.mouseEnterUser}
                          onMouseLeave={this.mouseLeaveUser} /> }
        </div>
        {this.state.showTimeTooltip &&
        <SimpleTooltip message={`Play from ${this.props.comment.songTime}`} 
                       style={{top: 30, left: 120 }}/> }
      
        {this.state.showSimpleUserTooltip && 
        <SimpleTooltip message={`Visit ${this.props.comment.userName}'s Profile`} 
                       style={{top: 30, left: 60 }}/> }

        <p>{this.props.comment.text}</p>
      </span>
    </div>
  </div>)
  }
}

export default CommentContent