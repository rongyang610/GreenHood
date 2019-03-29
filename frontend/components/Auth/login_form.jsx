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
  
  renderErrors(){
    return this.props.errors.map((error, idx) => {
      return <div key={idx}><i class="fas fa-exclamation-circle"></i>{error}</div>
    });
  }

  render(){
    return (
        <div className="login-main-container">
          <div className="login-main-img-container">
          </div>
          <div className="login-main-form-container">
            <div className="login-header">Welcome to Greenhood</div>
            <form onSubmit={this.handleSubmit} className="login-form">
              <div className="">Email or Username</div> 
              <input 
              id = "email"
              type="text"
              value={this.state.email}
              onChange={this.update('email')}
              required="required"
              />
              <div>Password</div> 
              <input
              id="password"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              required="required"
              />
              <br/>
              <div className="login-form-link">
                <Link to={"/signup"} className>Don't have an account?</Link>
              </div>

              <div className="login-form-link">
                  <Link onClick={this.handleDemoSubmit} to="/">Demo Log In</Link>
              </div>

              <strong className="login-error">
                {this.renderErrors()}
              </strong>
              

              <button className="login-form-button">{this.props.button}</button>
            </form>
          </div>
      </div>
    );
  }
}

export default LoginForm;