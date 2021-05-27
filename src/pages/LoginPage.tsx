import React from "react";
import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import {authenticateUser} from "../api/UserApi";

type UserForm = {
    userName: string,
    password: string
}

type LoginPageProps = {
    setUserId: Dispatch<SetStateAction<string | null>>
}

const LoginPage = ({setUserId}: LoginPageProps) => {
    const [userForm, setUserForm] = useState<UserForm>({
        userName: '',
        password: ''
    });
    const [error, setError] = useState<boolean>(false);

    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        const userId = authenticateUser(userForm.userName, userForm.password);
        if (!!userId) {
            setUserId(userId);
        }
        setError(true);
    };

    return (
        <div className='container'>
            <h1 className='mt-5'>Welcome to Profile Settings App</h1>
            <form onSubmit={(event) => onFormSubmit(event)}>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">User Name:</label>
                    <input type="text" className="form-control" id="userName"
                           value={userForm.userName}
                           onChange={(event) => setUserForm({...userForm, userName: event.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password"
                           value={userForm.password}
                           onChange={(event) => setUserForm({...userForm, password: event.target.value})}
                    />
                </div>
                <p className='alert-danger' hidden={!error}>Can not login to page. Check your credentials</p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
};

export default LoginPage;