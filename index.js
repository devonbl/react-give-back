import React from 'react'
import Modal from 'react-modal'
import './react-give-back.css';

class ReactGiveBack extends React.Component {
  constructor (props) {
    super(props)
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

    return (
      <div>
        <div className="give-back" onClick={this.openModal} >
          💁
        </div>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
          <iframe src="https://www.tilt.com/tilts/hack-the-hood/iframe_widget"></iframe>
        </Modal>
      </div>
    )
  }
}

export default ReactGiveBack
