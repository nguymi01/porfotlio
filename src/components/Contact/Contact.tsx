import { Container } from './styles';
import emailIcon from '../../assets/email-icon.svg';
import phoneIcon from '../../assets/phone-icon.svg';

export function Contact() {
  return (
    <Container id='contact'>
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className='contacts'>
        <div>
          <a href='mailto:minhdnguyen99@gmail.com'>
            <img src={emailIcon} alt='Email' />
          </a>
          <a href='mailto:minhdnguyen99@gmail.com'>minhdnguyen99@gmail.com</a>
        </div>
        <div>
          <a href='tel:+17174200855'>
            <img src={phoneIcon} alt='Phone No' />
          </a>
          <a href='tel:+17174200855'>(+1) 7174200855</a>
        </div>
      </div>
    </Container>
  );
}
