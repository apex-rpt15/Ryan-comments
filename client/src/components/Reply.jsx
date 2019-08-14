import React from 'react'

class Reply extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      showHover: false
    }
  }



  render() {
    return(
      <div className='comment-reply-box'>
        {'@' + this.props.user} <input placeholder='Write a reply'></input>
      </div>
    )
  }
}

export default Reply