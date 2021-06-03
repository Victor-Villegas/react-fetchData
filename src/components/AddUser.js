import React, { useEffect, useState } from 'react';
import axios from 'axios';
import avatar1 from '../images/avatar1.jpg';

function ElementCreatedNotification (props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (props.visible) {
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  }, [props.visible]);

  return (
    <div className={`${props.theme}-notification notification`}>
      {isVisible ? <p>Element created successfully</p> : null}
    </div>
  );
}

function AddUser (props) {
  const [userInfo, setUserInfo] = useState({ name: '', job: '' });
  const [elementCreated, setElementCreated] = useState(false);

  const handleUserInfo = (event, type) => {
    setUserInfo({ ...userInfo, [type]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const APIUrl = 'https://reqres.in/api/users';
    const response = await axios.post(APIUrl, userInfo);
    if (response) {
      const user = {
        id: response.data.id,
        first_name: userInfo.name,
        last_name: '',
        email: userInfo.job,
        avatar: avatar1
      };

      props.function(user);

      setElementCreated(true);
      setUserInfo({ name: '', job: '' });

      setTimeout(() => {
        setElementCreated(false);
      }, 2000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ElementCreatedNotification visible={elementCreated} theme={props.theme}/>
      <label htmlFor="{'name-input'}">
        Name:
        <input
          type={'text'}
          name={'name'}
          value={userInfo.name}
          onChange={(event) => handleUserInfo(event, 'name')}
          id={'name-input'}
        />
      </label>
      <label htmlFor="{'job-input'}">
        Job:
        <input
          type={'text'}
          name={'job'}
          value={userInfo.job}
          onChange={(event) => handleUserInfo(event, 'job')}
          id={'job-input'}
        />
      </label>
      <input type={'submit'} value={'Create'}/>
    </form>
  );
}

export default AddUser;
