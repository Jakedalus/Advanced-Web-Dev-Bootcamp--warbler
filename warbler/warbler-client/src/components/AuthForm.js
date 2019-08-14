import React, { Component } from 'react';


export default class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
      profileImgUrl: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {

  };

  render() {
    const {email, username, password, profileImgUrl} = this.state;
    const {heading, buttonText, signUp} = this.props;

    return (
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              
              <label htmlFor="email">Email:</label>
              <input 
                type="text" 
                className='form-control'
                id='email'
                name='email'
                onChange={this.handleChange}
                value={email}
              />

              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                className='form-control'
                id='password'
                name='password'
                onChange={this.handleChange}
              />

              {signUp && (
                <div>
                  <label htmlFor="username">Username:</label>
                  <input 
                    type="text" 
                    className='form-control'
                    id='username'
                    name='username'
                    onChange={this.handleChange}
                    value={username}
                  />

                  <label htmlFor="image-url">Image URL:</label>
                  <input 
                    type="text" 
                    className='form-control'
                    id='image-url'
                    name='profileImgUrl'
                    onChange={this.handleChange}
                    value={profileImgUrl}
                  />
                </div>
              )}

            </form>
          </div>
        </div>
      </div>
    );
  }
}

