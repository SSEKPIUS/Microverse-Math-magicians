import React from 'react';
import Result from './result';
import Key from './key';

class calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: null, next: null, operation: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(obj) {
    this.setState({ total: obj.total, next: obj.next, operation: obj.operation });
  }

  render() {
    return (
      <div className="calc grid-container">
        <Result className="item1 top" Result={this.state} />

        <Key css="item2" buttonName="AC" Result={this.state} handleClick={this.handleClick} />
        <Key css="item3" buttonName="+/-" Result={this.state} handleClick={this.handleClick} />
        <Key css="item4" buttonName="%" Result={this.state} handleClick={this.handleClick} />
        <Key css="item5 right" buttonName="÷" Result={this.state} handleClick={this.handleClick} />

        <Key css="item6" buttonName="7" Result={this.state} handleClick={this.handleClick} />
        <Key css="item7" buttonName="8" Result={this.state} handleClick={this.handleClick} />
        <Key css="item8" buttonName="9" Result={this.state} handleClick={this.handleClick} />
        <Key css="item9 right" buttonName="x" Result={this.state} handleClick={this.handleClick} />

        <Key css="item10" buttonName="4" Result={this.state} handleClick={this.handleClick} />
        <Key css="item11" buttonName="5" Result={this.state} handleClick={this.handleClick} />
        <Key css="item12" buttonName="6" Result={this.state} handleClick={this.handleClick} />
        <Key css="item13 right" buttonName="-" Result={this.state} handleClick={this.handleClick} />

        <Key css="item14" buttonName="1" Result={this.state} handleClick={this.handleClick} />
        <Key css="item15" buttonName="2" Result={this.state} handleClick={this.handleClick} />
        <Key css="item16" buttonName="3" Result={this.state} handleClick={this.handleClick} />
        <Key css="item17 right" buttonName="+" Result={this.state} handleClick={this.handleClick} />

        <Key css="item18" buttonName="0" Result={this.state} handleClick={this.handleClick} />
        <Key css="item19" buttonName="." Result={this.state} handleClick={this.handleClick} />
        <Key css="item20 right" buttonName="=" Result={this.state} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default calculator;
