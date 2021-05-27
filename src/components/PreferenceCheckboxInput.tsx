import React, {Dispatch, SetStateAction} from "react";
import {User} from "../api/UserApi";

type PreferenceCheckBoxInputProps = {
    id: string;
    label: string;
    user: User,
    setUser: Dispatch<SetStateAction<User>>
}

const updateContactPreference = (checked: boolean, id: string, user: User, setUser: Dispatch<SetStateAction<User>>) => {
    let updatedContact: string[];
    if (checked) {
        updatedContact = [...user.preferences.contact, id];
    } else {
        updatedContact = user.preferences.contact.filter(t => t !== id);
    }
    setUser({...user, preferences: {...user.preferences, contact: updatedContact}})
}

const PreferenceCheckBoxInput = ({id, label, user, setUser}: PreferenceCheckBoxInputProps) => (
    <>
        <input className="form-check-input" type="checkbox" id={`pcb-${id}`}
               checked={user.preferences.contact.indexOf(id) > -1}
               onChange={({target: {checked}}) => updateContactPreference(checked, id, user, setUser)}/>
        <label htmlFor={`pcb-${id}`} className="form-label">&nbsp;{label}</label>
        <br/>
    </>
);

export default PreferenceCheckBoxInput;