import React from 'react';

class result extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    return <div className="item1 top">{(this.props.Result.next ?? this.props.Result.total) ?? '0'}</div>;
  }
}
export default result;
