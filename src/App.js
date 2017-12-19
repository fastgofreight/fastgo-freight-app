import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-date-picker';


class App extends Component {
  state = {
    date: new Date()
  }
  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section className="its-form"> 
          <div class="container">
            <h1>New Load</h1>
            <form action="#">
              <fieldset className="load-info">
                <legend>Load Information</legend>
                  <section className="row-one form-flex column-3">
                    <input label="load-number" type="text" placeholder="Load Number"/>
                    <input label="agent" type="text" placeholder="Agent"/>
                    <span className="select-wrapper">
                      <select label="load-status" name="load-status" id="load-status">
                        <option value="">Load Status</option>
                        <option value="pending">Pending</option>
                        <option value="on-hold">On Hold</option>
                        <option value="complete">Complete</option>
                      </select>
                    </span>
                  </section>
                  <section className="row-two form-flex column-3">
                    <input type="text" placeholder="W/O"/>
                    <input label="rate" type="text" placeholder="Rate"/>
                    <span className="select-wrapper">
                      <select label="load-type" name="load-type" id="load-type">
                        <option value="">Type</option>
                        <option value="pending">Line Haul</option>
                        <option value="on-hold">On Hold</option>
                        <option value="complete">Complete</option>
                      </select>
                    </span>
                  </section>
                  <section className="row-three form-flex column-4">
                    <input label="carrier" type="text" placeholder="Carrier"/>
                    <span className="select-wrapper">
                      <select label="equipment-type" name="equipment-type" id="equipment-type">
                        <option value="">Equipment Type</option>
                        <option value="bus">Bus</option>
                        <option value="train">Train</option>
                        <option value="car">Car</option>
                      </select>
                    </span>
                    <input label="carrier-fee" type="text" placeholder="Carrier Fee"/>
                    <span className="select-wrapper">
                      <select label="currency-type" name="currency-type" id="currency-type">
                        <option value="USD">$USD</option>
                        <option value="Yen">Yen</option>
                        <option value="Passo">Passo</option>
                      </select>
                    </span>
                  </section>
              </fieldset>
              <fieldset className="shipper-info">
                <legend>Shipper</legend>
                  <section className="row-four form-flex column-4">
                    <input label="shipper" type="text" placeholder="Shipper"/>
                    <input label="shipper-location" type="text" placeholder="Location"/>
                    <input label="shipper-date" type="date" placeholder="Date"/>
                    <input label="shipper-time" type="time" placeholder="Time"/>
                  </section>
                  <section className="row-five form-flex column-4">
                    <input label="shipper-description" type="text" placeholder="Description"/>
                    <input label="shipper-type" type="text" placeholder="Type"/>
                    <input label="shipper-quantity" type="text" placeholder="Quantity"/>
                    <input label="shipper-weight" type="text" placeholder="Weight LBS"/>
                  </section>
                  <section className="row-six form-flex column-4">
                    <input label="shipper-value" type="text" placeholder="Value"/>
                    <input label="shipper-notes" type="text" placeholder="Notes"/>
                    <input label="shipper-po-numbers" type="text" placeholder="P.O. Numbers"/>
                    <input label="shipper-customs-broker" type="text" placeholder="Customs Broker"/>
                  </section>
                  <button className="button">
                    <a href="#">Added Shipper</a>
                  </button>
              </fieldset>
              <fieldset className="shipper-info">
                <legend>Cosignee</legend>
                  <section className="row-seven form-flex column-4">
                    <input label="cosignee" type="text" placeholder="Cosignee"/>
                    <input label="cosignee-location" type="text" placeholder="Location"/>
                    <DatePicker
                      onChange={this.onChange}
                      value={this.state.date}
                    />
                    <input label="cosignee-time" type="time" placeholder="Time"/>
                  </section>
                  <section className="row-eight form-flex column-4">
                    <input label="cosignee-description" type="text" placeholder="Description"/>
                    <input label="cosignee-type" type="text" placeholder="Type"/>
                    <input label="cosignee-quantity" type="text" placeholder="Quantity"/>
                    <input label="cosignee-weight" type="text" placeholder="Weight LBS"/>
                  </section>
                  <section className="row-nine form-flex column-4">
                    <input label="cosignee-value" type="text" placeholder="Value"/>
                    <input label="cosignee-notes" type="text" placeholder="Notes"/>
                    <input label="cosignee-po-numbers" type="text" placeholder="P.O. Numbers"/>
                    <input label="cosignee-customs-broker" type="text" placeholder="Customs Broker"/>
                  </section>
                  <button className="button">
                    <a href="#">Added Cosignee</a>
                  </button>
              </fieldset>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
