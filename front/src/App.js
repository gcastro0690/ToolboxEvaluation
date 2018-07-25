import React, { Component } from 'react';
import logo from './styles/logo.svg';
import './styles/App.css';
import operations from './state/operations';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

class App extends Component {
  handleChange = string => event => {
    this.props.setString(event.target.value);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Toolbox Evaluation!</h1>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <TextField
                id="txtString"
                label="String"
                onChange={this.handleChange('string')}
                margin="normal"
              />
            </div>
            <div className="col-sm">
              <TextField
                id="txtString"
                label="String Return"
                value={this.props.string}
                onChange={this.handleChange('string')}
                margin="normal"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { string } = state;
  return { string };
};
const mapDispatchToProps = dispatch => {
  return {
    setString: string => dispatch(operations.setString(string)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
