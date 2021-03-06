import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    const { on } = this.state;

    return this.props.children({ on, toggle: this.toggle });
  }
}

export default Toggle;
