import { ReactComponent as Logo } from '../images/logo.svg';

function Header() {
  return (
    <div className="header-comp">
      <Logo className="logo" />
      <div className="text">Մեր մասին</div>
    </div>
  );
}

export default Header;
