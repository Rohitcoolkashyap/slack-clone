import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import React from 'react';
import './login.css';
import { actionTypes } from '../../reducer';
import { useStateValue } from '../../StateProvider';
export default function Login() {
      const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.dribbble.com/users/1238764/screenshots/5864612/slack-animation.gif"
          alt=""
        />
        <h1>Sign in to rohit chat app</h1>
        <p>rohit.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}
