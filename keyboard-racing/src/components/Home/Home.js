import React from 'react';

class Home extends React.Component {

  componentDidMount(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('code');
    if(myParam){
      localStorage.setItem('code', myParam);
      window.location.href = '/#/';
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
