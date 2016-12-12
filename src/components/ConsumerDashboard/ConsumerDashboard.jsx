import React, { Component } from 'react';

class ConsumerDashboard extends Component {
  constructor(props) {
    super();

    this.state = {

    }
    this.hideModal = this.hideModal.bind(this);
  }

  componentDidMount() {
    this.hideModal();
  }

  hideModal() {
    if(this.props.state.consumerID !== '') {
      document.querySelector('.error-modal').style.display = 'none';
      document.querySelector('.dashboard-page').style.display = 'block';
    }
  }



  render() {
    return (
      <container>
      <div className="error-modal">Please log in as a consumer!</div>
      <div className="dashboard-page">
        <h1> CONSUMER DASHBOARD </h1>
      </div>
      </container>
    )
  }
}

export default ConsumerDashboard;
