import React from 'react';

export default class Foot extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="navbar-fixed-bottom boxFlexRow boxFlexFooter" id="footer">
        Produced by Matthew Martin, CFA
      </footer>
    )
  }
}
