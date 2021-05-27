import React, {FormEvent, useState} from "react";
import {getUser, updateUser, User} from "../api/UserApi";
import {useHistory} from "react-router-dom";
import TextInput from "../components/TextInput";
import PreferenceCheckBoxInput from "../components/PreferenceCheckboxInput";

const ProfilePage = ({userId}: { userId: string }) => {
    const history = useHistory();
    const [user, setUser] = useState<User>(getUser(userId));
    const [isEditMode, setEditMode] = useState<boolean>(false);

    const onFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (isEditMode) {
            updateUser(userId, user);
        }
        setEditMode(!isEditMode);
    };

    const onClickCancel = () => {
        if (!isEditMode) {
            history.push('/');
        } else {
            setEditMode(false);
            setUser(getUser(userId));
        }
    }

    return (
        <div>
            <h1 className='mt-5'>Profile</h1>
            <form onSubmit={(event) => onFormSubmit(event)}>
                <fieldset disabled={!isEditMode}>
                    <TextInput id='user_name' value={user.user_name} label='User Name'
                               onChange={e => setUser({...user, user_name: e.target.value})}
                    />
                    <TextInput id='password' value={user.password} label='Password'
                               inputType='password'
                               onChange={e => setUser({...user, password: e.target.value})}
                    />
                    <TextInput id='first_name' value={user.first_name} label='First Name'
                               onChange={e => setUser({...user, first_name: e.target.value})}
                    />
                    <TextInput id='other_names' value={user.other_names} label='Other Name'
                               onChange={e => setUser({...user, other_names: e.target.value})}
                    />
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Address</h5>
                            <div className="card-body">
                                <TextInput id='street' value={user.address.street} label='Street'
                                           onChange={e => setUser({
                                               ...user,
                                               address: {...user.address, street: e.target.value}
                                           })}
                                />
                                <TextInput id='town' value={user.address.town} label='Town'
                                           onChange={e => setUser({
                                               ...user,
                                               address: {...user.address, town: e.target.value}
                                           })}
                                />
                                <TextInput id='county' value={user.address.county} label='County'
                                           onChange={e => setUser({
                                               ...user,
                                               address: {...user.address, county: e.target.value}
                                           })}
                                />
                                <TextInput id='postcode' value={user.address.postcode} label='Postcode'
                                           onChange={e => setUser({
                                               ...user,
                                               address: {...user.address, postcode: e.target.value}
                                           })}
                                />
                            </div>
                        </div>
                    </div>
                    <TextInput id='mobile' value={user.mobile} label='Mobile Phone'
                               onChange={e => setUser({...user, mobile: e.target.value})}
                    />
                    <TextInput id='email' value={user.email} label='E-mail'
                               onChange={e => setUser({...user, email: e.target.value})}
                    />
                    <TextInput id='company' value={user.company} label='Company'
                               onChange={e => setUser({...user, company: e.target.value})}
                    />
                    <div className="mb-3">
                        <label className="form-label">Connection Preferences</label><br/>
                        <PreferenceCheckBoxInput id='sms' label='SMS' user={user} setUser={setUser}/>
                        <PreferenceCheckBoxInput id='mail' label='Mail' user={user} setUser={setUser}/>
                        <PreferenceCheckBoxInput id='email' label='E-Mail' user={user} setUser={setUser}/>
                    </div>
                </fieldset>
                <div className="mb-3">
                    <button type="button" className="btn btn-danger" style={{marginRight: '2px'}}
                            onClick={() => onClickCancel()}>
                        {isEditMode ? 'Cancel' : 'Back'}
                    </button>
                    <button type="submit" className="btn btn-primary">
                        {isEditMode ? 'Save' : 'Edit'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfilePage;