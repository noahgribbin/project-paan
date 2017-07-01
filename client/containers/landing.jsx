'use strict';

import React, { Componment } from 'react';
import {SignupFormContainer} from '../components/signupFormContainer.jsx';
import {LoginFormContainer} from '../components/loginFormContainer.jsx';


export default class Landing extends Componment{
  render() {
    return <section>
              <h2>Dungeon Manager</h2>
              <h3>Manage Your Campaign or Character</h3>
                <section>
                  <h3>Signup and Join an Adventure</h3>
                  <SignupFormContainer/>
                  <LoginFormContainer />
                </section>

           </section>;
  }
}
