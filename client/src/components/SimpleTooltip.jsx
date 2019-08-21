import React from 'react'
import styles from '/Users/mille424/rpt15-FEC/Ryan-comments/client/dist/styles.css'

class SimpleTooltip extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(<div className={styles.simpleTooltip}>
      {this.props.message}
    </div>)
  }

}




export default SimpleTooltip