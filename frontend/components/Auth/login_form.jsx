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

  render(){
    return (
        <div>
            <h2>Welcome to Greenhood</h2>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="email"> Email or Username:
                <input 
                id = "email"
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                required="required"
                />
            </label>
            <br/>
            <label htmlFor="password"> Password:
            <input
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                required="required"
                />
            </label> 
            <br/>
            <button>{this.props.button}</button>
            <br/>
            <Link to={"/signup"}>Don't have an account?</Link>
            <br/>
            
            <div className="go-to-login">
              <center>
                <Link onClick={this.handleDemoSubmit} to="/">Demo Log In</Link>
              </center>
            </div>

            </form>
        </div>
    );
  }
}

export default LoginForm;