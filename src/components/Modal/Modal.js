import React ,{Component} from 'react'
import {connect} from 'react-redux'
import './Modal.css'
import {displayBlock} from '../../Dux/modal'
import axios from 'axios'

class Modal extends Component{
  constructor(props){
    super(props)
    this.state = {
      display: ''
    }
  }

  handleOK(){
    const {displayBlock} = this.props
    const {newsId}= this.props.modal
    const {location} = window
    axios.delete('http://agile-cliffs-83142.herokuapp.com/api/news/'+newsId)
    .then(res =>{
      displayBlock('none',0)
      location.reload()
    })
  }

  handleCansel(){
    const {displayBlock} = this.props
    displayBlock('none',0)
  }
  render(){
    const {newsId,display}= this.props.modal
    return(
      <div className="modalContainer" style={{'display': display}}>
        <div className="modalCard">
          <div className="modalBody">
            <h1>กรุณายืนยัน</h1>
            <p>ท่านต้องการลบข่าวหรือไม่</p>
            <br></br>
            <div>
              <button className="btn-delete" onClick={this.handleOK.bind(this)}>OK</button>
              <button className="btn-cansel" onClick={this.handleCansel.bind(this)}>CANSEL</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  modal: state.modal
})

const mapDispatchToProps = (dispatch)=>({
  displayBlock: (display,id) => dispatch(displayBlock(display,id))
})
export default connect(mapStateToProps,mapDispatchToProps)(Modal)
