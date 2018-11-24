import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBeer } from 'react-icons/fa';
import { FaCat } from 'react-icons/fa';
import { FaPhabricator } from 'react-icons/fa';

class App extends Component {
    constructor(){
        super();
        this.state = {
            items: []
        }
    }
  render() {
    var counter = 0;
    var itemList = this.state.items.map(function(item){
        counter += 1;
        return   <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={counter}
                    iconStyle={{ background: item[2], color: '#fff' }}
                    icon={<FaCat />}
                  >
                    <h3 className="vertical-timeline-element-title">{item[0]}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{item[1]}</h4>
                    <p>
                      {item[3]}
                    </p>
                  </VerticalTimelineElement>
      });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Warriors Done Chronologically
          </p>
        </header>
<VerticalTimeline>
{itemList}
</VerticalTimeline>        
      </div>
    );
  }

  componentDidMount() {
    var Request = require("request");
    var items = null;
    Request.get("https://sheets.googleapis.com/v4/spreadsheets/1-5wMw23Kdfdv_tXLhl6yIU2a2Sdo1Ib4ZmuV2G6gkDk/values/Sheet1?key=AIzaSyBwG7uKLT7mzlEOivDivt08It3-DRS9uMU",
                  (error, response, body) => {
                    if (error) {
                      return console.dir(error);
                    }
                    this.setState( {items: JSON.parse(body).values});

                  });

  }
}

export default App;
