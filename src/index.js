import React from 'react'
import Modal from 'react-modal'

class ReactGiveBack extends React.Component {
  constructor () {
    super()
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal () {
    this.setState({modalIsOpen: true})
  }

  closeModal () {
    this.setState({modalIsOpen: false})
  }

  render () {
    const customStyles = {
      content : {
        left: '40%',
        width: '200px',
        height: '365px'
      }
    }
    const styles = {
      iframe-container : {
        border: 'none',
        height: '360px'
        width: '200px'
      },
      give-back : {
        font-size: '46px',
        cursor: 'pointer'
      }
    }

    return (
      <div>
        <div style={styles.give-back} onClick={this.openModal} >
          {\u1f481}
        </div>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
          <iframe style={styles.iframe-container} src="https://www.tilt.com/tilts/hack-the-hood/iframe_widget"></iframe>
        </Modal>
      </div>
    )
  }
}

export default ReactGiveBack
