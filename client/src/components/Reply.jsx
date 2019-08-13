import React from 'react'

class Reply extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {'@' + this.props.user} <input placeholder='Write a reply'></input>
      </div>
    )
  }
}

export default Reply