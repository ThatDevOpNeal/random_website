import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InLineError from '../messages/InLineError';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                email: '',
                password: ''
            },
            loading: false,
            errors: {}
        };
    }

    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) {
            errors.email = "Invalid email";
        }
        if (!data.password) {
            errors.password = "This is empty"
        }
        return errors;
    }
    
    onFormChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        this.setState({
            data: {...this.state.data, [name]: val }
        });
    };

    onSubmitForm = () => {
      const errors = this.validate(this.state.data);
      this.setState({
          errors
      }); // using es6 errors: errors -> errors
    };

    render() {
        const { data, errors } = this.state;
        return (
            <Form onSubmit={this.onSubmitForm}>
                <Form.Field error={errors.email}>
                    <label htmlFor='email'>
                        Email
                    </label>
                    <input 
                        type='email'
                        className='email'
                        name='email'
                        placeholder='emailName@emailProvider.com'
                        value={data.email}
                        onChange={this.onFormChange}
                    />
                    {errors.email && <InLineError text={errors.email} />}
                </Form.Field>
                <Form.Field error={errors.password}>
                <label htmlFor='password'>
                    Password
                </label>
                <input 
                    type='password'
                    className='password'
                    name='password'
                    placeholder='password...'
                    value={data.password}
                    onChange={this.onFormChange}
                />
                {errors.password && <InLineError text={errors.password} />}
            </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    }
}

export default LoginForm;
