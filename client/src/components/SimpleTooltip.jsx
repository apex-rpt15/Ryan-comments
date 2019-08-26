import React from 'react'
import styles from '../../../css/styles.css'

class SimpleTooltip extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let style = {
      top: this.props.style.top || 0,
      left: this.props.style.left || 0
    }
    return(<div className={styles.simpleTooltip} style={style}>
      {this.props.message}
    </div>)
  }

}




export default SimpleTooltip