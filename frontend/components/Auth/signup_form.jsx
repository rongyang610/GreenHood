import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {

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
    this.props.action(user).then(() => this.props.history.push('/'));
  }

  handleDemoSubmit(e){
    e.preventDefault();
    const demo = Object.assign({}, {email:"demo@gmail.com", username: "demo", password:"password"});
    this.props.demo(demo).then(() => this.props.history.push('/'));
  }

  renderErrors(){
    return (
      this.props.errors.map((error, idx) => {
        let newError
        if(error.includes("Fname")){
          newError = error.replace("Fname", "First Name")
          return <p key={idx}>{newError}</p>
        } else if(error.includes("Lname")){
          newError = error.replace("Lname", "Last Name")
          return <p key={idx}>{newError}</p>
        } else{
          return <p key={idx}>{error}</p>
        }
      })
    )
  }

  render(){
    return (
      <div className="signup-form-container">
        <div>
          <a href="/"><img src={window.navLogo} className='navLogo signup-logo' /></a>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="signup-form">
            <span className="signup-header">Make Your Money Move</span>
            <span className="signup-header-phrase">Greenhood lets you invest in companies you love, commission-free.</span>
            <div>
              <input 
              className="signup-input input-lg fname-signup name-signup-width"
              id = "fname-signup"
              type="text"
              value={this.state.fname}
              onChange={this.update('fname')}
              placeholder="First name"
              required="required"
              />

              <input 
              className="signup-input input-lg name-signup-width"
              id = "lname-signup"
              type="text"
              value={this.state.lname}
              onChange={this.update('lname')}
              placeholder="Last name"
              required="required"
              />
            </div>

            <div>
              <input 
              className="signup-input input-lg"
              id = "email-signup"
              type="email"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email address"
              required="required"
              />
            </div>

            <div>
              <input 
              className="signup-input input-lg"
              id = "username-signup"
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
              required="required"
              />
            </div>

            <div>
              <label htmlFor="password">
                <input
                  className="signup-input input-lg"
                  id="password-signup"
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password [min. 6 characters]"
                  required="required"
                  />
              </label>
            </div>

            <div>
              <button className="signup-button">{this.props.button}</button>
            </div>

            <div className="signup-form-link">
              Already started? <Link to="/login">Log in to complete your application</Link>
            </div>

            <div className="signup-form-link">
              <Link onClick={this.handleDemoSubmit} to="/">Demo Log In</Link>
            </div>

          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;