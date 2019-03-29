import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  componentDidMount(){
    this.props.clear();
  }

  update(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    console.log(user);
    this.props.action(user).then(() => this.props.history.push('/'));
  }

  handleDemoSubmit(e){
    e.preventDefault();
    const demo = Object.assign({}, {email:"demo@gmail.com", username: "demo", password:"password"});
    this.props.action(demo).then(() => this.props.history.push('/'));
  }

  handleDemoSubmit(e){
    e.preventDefault();
    const demo = Object.assign({}, {email:"demo@gmail.com", username: "demo", password:"password"});
    this.props.action(demo).then(() => this.props.history.push('/'));
  }
  
  renderErrors(){
    return this.props.errors.map((error, idx) => {
      return <span key={idx}>{error}</span>
    });
  }

  render(){
    return (
        <div className="login-main-container">
          <div className="login-main-img-container">
            <img className="login-img" src="https://skynet03.goffvps.com/baiter/greenhood/sessionPic.png"/>
          </div>
            <div className="login-main-form-container">
              <span className="login-header">Welcome to Greenhood</span>
              <form onSubmit={this.handleSubmit}>
              <span>Email or Username:</span> 
                  <br/>
              <input 
              id = "email"
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              required="required"
              />
              <br/>
              <span>Password:</span> 
              <br/>
              <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              required="required"
              />
              <br/>
              <Link to={"/signup"}>Don't have an account?</Link>

              <div className="go-to-login">
                <center>
                  <Link onClick={this.handleDemoSubmit} to="/">Demo Log In</Link>
                </center>
              </div>

              {this.renderErrors()}

              <br/>
              <button>{this.props.button}</button>
              </form>
            </div>
        </div>
    );
  }
}

export default LoginForm;