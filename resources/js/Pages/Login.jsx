import React from 'react';
import FormGroup from '@/Components/FormGroup';

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="authincation vh-100">
          <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
              <div className="col-md-6">
                <div className="authincation-content">
                  <div className="row no-gutters">
                    <div className="col-xl-12">
                      <div className="auth-form">
                        <h4 className="text-center mb-4">Sign in your account</h4>
                        <form action="index.html">
                          <FormGroup name="email" type="email" label="Email" />
                          <FormGroup name="password" type="password" label="Password" />
                          <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-block">Sign Me In</button>
                          </div>
                        </form>
                        <div className="new-account mt-3">
                          <p>Don't have an account? <a className="text-primary" href="page-register.html">Sign up</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;