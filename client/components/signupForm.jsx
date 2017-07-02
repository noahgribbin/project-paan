'use strict';

import React from 'react';

export const SignupForm = props => {
  return <section className="signup">
            <form onSubmit={props.onSubmit}>
              <div>
                <input type="text" name="username" value={props.username} onChange={props.onChange} placeholder="username"></input>
                {props.alreadyExists ? <h4>Just a moment...</h4> : null}
              </div>
              <div>
                <input type="text" name="password" value={props.password} onChange={props.onChange} placeholder="password"></input>
              </div>
              <button type="submit">Create Account</button>
            </form>
         </section>;
};

SignupForm.propTypes = {
  username:       React.PropTypes.string,
  password:       React.PropTypes.string,
  onSubmit:       React.PropTypes.func,
  onChange:       React.PropTypes.func,
  alreadyExists:  React.PropTypes.bool
};
