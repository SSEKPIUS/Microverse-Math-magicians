import React from 'react';

class calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calc grid-container">
        <div className="item1 top">0</div>

        <div className="item2">AC</div>
        <div className="item3">+/-</div>
        <div className="item4">%</div>
        <div className="item5 right">/</div>

        <div className="item6">7</div>
        <div className="item7">8</div>
        <div className="item8">9</div>
        <div className="item9 right">x</div>

        <div className="item10">4</div>
        <div className="item11">5</div>
        <div className="item12">6</div>
        <div className="item13 right">-</div>

        <div className="item14">1</div>
        <div className="item15">2</div>
        <div className="item16">3</div>
        <div className="item17 right">+</div>

        <div className="item18">0</div>
        <div className="item19">.</div>
        <div className="item20 right">=</div>
      </div>
    );
  }
}

export default calculator;

/*

*/
