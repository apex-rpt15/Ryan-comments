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
    
    //test image for avatars
    //this.testimage = 'https://images.unsplash.com/photo-1526137966266-60618b40bcd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
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
                        followers={`${this.props.comment.userFollowers}`} />}
      </div>
      </div>)
  }
}

export default CommentAvatar