import './styles/App.css';
import React, { Component } from 'react';
import HeaderSection from './HeaderSection';
import MainSection from './MainSection';
import FooterSection from './FooterSection';
import './styles/Responsive.css';


class App extends Component {
  state = {
    musicListState:null,
    pageIndex: 1,
  }

  addMusicToState = musicListState => {
    this.setState({
      musicListState,
      pageIndex: 0,
    })
  }
  handleIndexPage = (pageIndex) => {
    this.setState({pageIndex});
}
  render() {
    
    return (
      <div className="App">
        <HeaderSection addMusicToState = {this.addMusicToState}/>
        <main>
          {this.state.musicListState !== null && 
            <MainSection 
              musicListState = {this.state.musicListState}
              handleIndexPage = {this.handleIndexPage}
              pageIndex = {this.state.pageIndex}/>}
        </main>
        <FooterSection />
      </div>
    );
  }
}

export default App;

