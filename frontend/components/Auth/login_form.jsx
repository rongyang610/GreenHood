import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
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
  
  renderErrors(){
    return this.props.errors.map((error, idx) => {
      return <p key={idx}>{error}</p>
    });
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
            <Link to={"/signup"}>Don't have an account?</Link>
            <br/>
            {this.renderErrors()}

            <button>{this.props.button}</button>
            </form>

        </div>
    );
  }
}

export default LoginForm;