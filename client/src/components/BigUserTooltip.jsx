import React from 'react'
import SimpleTooltip from './SimpleTooltip.jsx'
import styles from '../../../css/styles.css';

class BigUserTooltip extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showFollowersTooltip: false,
      showFollowButtonTooltip: false
    }

    this.enterFollowers = this.enterFollowers.bind(this)
    this.leaveFollowers = this.leaveFollowers.bind(this)

    this.enterFollowButton = this.enterFollowButton.bind(this)
    this.leaveFollowButton = this.leaveFollowButton.bind(this)

    this.followerimage = 'https://hackreactor-fec-project.s3-us-west-1.amazonaws.com/Follower+Icon'
    //this.testimage = 'https://images.unsplash.com/photo-1526137966266-60618b40bcd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
  }

  enterFollowers() {
    this.setState({
      showFollowersTooltip: true
    })
  }

  leaveFollowers() {
    this.setState({
      showFollowersTooltip: false
    })
  }

  enterFollowButton() {
    this.setState({
      showFollowButtonTooltip: true
    })
  }

  leaveFollowButton() {
    this.setState({
      showFollowButtonTooltip: false
    })
  }

  render() {
    const style = {
      top: this.props.style.top || 0,
      left: this.props.style.left || 0
    }
    return(
      <div className={styles.userTooltip} style={style}>
        <img src={this.props.image} className={styles.tooltipAvatar}></img>
        <div>{this.props.user}</div>
        <span onMouseEnter={this.enterFollowers} onMouseLeave={this.leaveFollowers}>

          <img src={this.followerimage} className={styles.followerImage}></img>
          <div className={`${styles.smallText} ${styles.grey}`}style={{display: 'inline-block'}}>{this.props.followers}</div>
        </span>
        <div>
        {this.state.showFollowersTooltip &&
          <div ><SimpleTooltip message={`${this.props.followers} followers`} style={{top: 150, left: 80 }}/></div>}
          <button onMouseEnter={this.enterFollowButton} onMouseLeave={this.leaveFollowButton}>Follow</button>

          {this.state.showFollowButtonTooltip &&
          <SimpleTooltip message={'Follow'} style={{top: 170, left: 80 }}/>}
        </div>
      </div>
    )
  }
}



export default BigUserTooltip