import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import T from 'prop-types';
import style from './style.module.scss';
const Button = ({ text, className, leftIcon, rightIcon }) => {
  return (
    <button className={style[className ? className : 'button-primary']}>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
      <span className={style.text}>{text}</span>
      {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
    </button>
  );
};

const ButtonLink = ({ text, className, leftIcon, rightIcon, url }) => {
  return (
    <Link
      href={url}
      className={style[className ? className : 'button-primary']}
    >
      {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
      <span className={style.text}>{text}</span>
      {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
    </Link>
  );
};

ButtonLink.propTypes = {
  text: T.string.isRequired,
  className: T.string,
  IconComponent: T.any,
  url: T.string,
};

Button.propTypes = {
  text: T.string.isRequired,
  className: T.string,
  IconComponent: T.any,
};

export { ButtonLink };

export default Button;
