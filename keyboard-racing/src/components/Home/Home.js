import React from 'react';
import { BASE_ROUTE } from '../../urls';

class Home extends React.Component {

  componentDidMount(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('code');
    if (myParam) {
      localStorage.setItem('code', myParam);
      window.location.href = BASE_ROUTE;
    }
  }

  render() {
    return (
      <div>
        Home
      </div>
    )
  }
}

export default Home;
