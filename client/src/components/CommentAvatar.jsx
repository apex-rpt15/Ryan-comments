import React from 'react'
import styles from '../../../css/styles.css'
import BigUserTooltip from './BigUserTooltip.jsx';

class CommentAvatar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showBigUserTooltip: false
    }
    this.avatarMouseEnter = this.avatarMouseEnter.bind(this)
    this.avatarMouseLeave = this.avatarMouseLeave.bind(this)
  }

  avatarMouseEnter() {
    this.setState({
      showBigUserTooltip: true
    })
  }

  avatarMouseLeave() {
    this.setState({
      showBigUserTooltip: false
    })
  }

  render() {
    return (<div className={styles.CommentAvatar} onMouseEnter={this.avatarMouseEnter} onMouseLeave={this.avatarMouseLeave}>
      <img src={this.props.comment.userPhoto} className={styles.commentAvatarImage}></img>
      <div>
        {this.state.showBigUserTooltip &&
        <BigUserTooltip image={this.props.comment.userPhoto} 
                        style={{top: 50, left: 0}}
                        user={`${this.props.comment.userName}`}
                        followers={`${this.props.comment.userFollowers}`}
                        location={`${this.props.comment.location}`} />}
      </div>
      </div>)
  }
}

export default CommentAvatar