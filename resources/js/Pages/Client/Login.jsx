import React, { useEffect } from 'react';
import Input from '@/Components/Client/Input';
import { clientService } from '@/Services/Admin/Services';
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
            const response = await clientService.post('/login', {
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


    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="container">
                        <div id="login-page" className="row">
                            <div className="col s12 m6 l4 z-depth-4 card-panel border-radius-6 login-card bg-opacity-8">
                                <form onSubmit={this.onFormSubmit} className="login-form">
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <h5 className="ml-4">Log in</h5>
                                        </div>
                                    </div>
                                    <div className="row margin">
                                        <Input strongLabel={true} disabled={this.state.isLoading} ref={this.emailRef} type="email" label="Email" />
                                    </div>
                                    <div className="row margin">
                                        <Input strongLabel={true} disabled={this.state.isLoading} ref={this.passwordRef} type="password" label="Password" />
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s12">
                                            <button
                                                className="btn waves-effect waves-light border-round gradient-45deg-purple-deep-orange col s12">Login</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="content-overlay"></div>
                </div>
            </div>
        );
    }
}


export default Login;