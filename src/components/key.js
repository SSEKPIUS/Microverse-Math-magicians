import React from 'react';
import calculate from '../logic/calculate';

class key extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(obj) {
    this.props.handleClick(obj);
  }

  onClick = () => this.handleClick(calculate(this.props.Result, this.props.buttonName));

  render() {
    return (
      <div
        className={this.props.css}
        onClick={this.onClick}
        aria-hidden="true"
      >
        {this.props.buttonName}
      </div>
    );
  }
}
export default key;
