import { Container, Image } from 'react-bootstrap';
import errorPic from '../../images/vecteezy_404-error-illustration-maintenance-system-technology_7814361.jpg';

const ErrorPage = () => {
  return (
    <div>
      <img src={errorPic} style={{width:'-webkit-fill-available',minHeight:"1042px"}}
      />
    </div>
  );
};
export default ErrorPage;
