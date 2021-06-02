import Button from './Button';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function UserCard (props) {
  const { id, first_name, last_name, avatar, email } = props.user;

  return (
    <div className={`${props.theme}-userCard userCard`}>
      <img src={avatar} alt="avatar" className={'userCardImg'}/>
      <div className={`${props.theme}-userCardContent userCardContent`}>
        <h5>{`${first_name} ${last_name}`}</h5>
        <FontAwesomeIcon icon={faEnvelope} className={`${props.theme}-faIcon faIcon`}/>
        <p>{email}</p>
        {props.isLoggedIn ? <Button theme={props.theme} className={`${props.theme}-userBtn userBtn`}
                                    onClick={() => props.btnFunction(id)}>Erase</Button> : null}
      </div>
    </div>
  );
}

export default UserCard;
