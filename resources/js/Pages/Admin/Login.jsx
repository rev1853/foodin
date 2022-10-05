import React, { useEffect } from 'react';
import FormGroup from '@/Components/Admin/FormGroup';
import service from '@/Services/Admin/Services';
import Alert from '@/Helpers/Alert';

class Login extends React.Component {
  emailRef;
  passwordRef;

  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
    this.state = { isLoading: false };
  }

  get email() {
    return this.emailRef.current.value;
  }

  get password() {
    return this.passwordRef.current.value;
  }

  /**
   * @param {React.FormEventHandler} e
   */
  onFormSubmit = async (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    try {
      const response = await service.post('/login', {
        email: this.email,
        password: this.password,
      });

      if (response.status == 200) {
        await Alert.success("Successfully logged in");
        location.href = response.data.redirectUrl;
      }
      else {
        Alert.failed("Wrong credentials");
      }
    } catch {
      Alert.failed("Wrong credentials");
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentWillUnmount() {
    console.log(email);
  }

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
                        <form onSubmit={this.onFormSubmit} action="index.html">
                          <FormGroup disabled={this.state.isLoading} ref={this.emailRef} name="email" type="email" label="Email" />
                          <FormGroup disabled={this.state.isLoading} ref={this.passwordRef} name="password" type="password" label="Password" />
                          <div className="text-center">
                            <button {... this.state.isLoading ? { disabled: "disabled" } : {}} type="submit" className="btn btn-primary btn-block">Log In</button>
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