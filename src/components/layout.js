import React, { Component } from "react";
import Draggable from "react-draggable";
import PropTypes from "prop-types"
import './layout.scss'

class Layout extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0,
        y: 0
      },
      controlledPosition: {
        x: -400,
        y: 200
      },
      startLocation: {}
    };
    this.handleDrag = this.handleDrag.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.adjustXPos = this.adjustXPos.bind(this);
    this.adjustYPos = this.adjustYPos.bind(this);
    this.onControlledDrag = this.onControlledDrag.bind(this);
    this.onControlledDragStop = this.onControlledDragStop.bind(this);
  }

  handleDrag(e, ui) {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    });
  }

  onStart() {
    this.setState({ activeDrags: ++this.state.activeDrags, startLocation: this.state.deltaPosition });
  }

  onStop() {
    this.setState({ activeDrags: --this.state.activeDrags });

    if(this.state.deltaPosition === this.state.startLocation){
			// handleClick(e);
      console.log({x: "handleClick(e);"})
		}
  }
  
  // For controlled component
  adjustXPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  }

  adjustYPos(e) {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  }

  onControlledDrag(e, position) {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  }

  onControlledDragStop(e, position) {
    this.onControlledDrag(e, position);
    this.onStop();
  }
  render() {
    const { children, data } = this.props;
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop, onDrag: this.handleDrag };
    const { deltaPosition, controlledPosition } = this.state;
    return (
      <div>  
        <main>{children}</main>
        <Draggable {...dragHandlers}>
          
          <div
            className="bubble-head"
            style={{ position: "fixed", bottom: "100px", right: "100px" }}
            
          >
            <img draggable="false"
            src={'https://www.sparkles.com.ph/static/2629bb8535ba6ae5406fc9385dadc2e0/497c6/Spark--noodles.png' }
            style={{  transition: 'all 300ms ease-in-out', height: '70px' }}
            className="br-100 pa1 ba b--black-10 h3 w3 bubble-head"
            alt="chat head"
             />
          </div>
         
          
        </Draggable>


      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


