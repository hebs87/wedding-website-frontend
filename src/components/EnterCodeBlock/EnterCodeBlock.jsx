import { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router';

import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import { PATH_HOME, PATH_OUR_STORY, PATH_WEDDING, PATH_PARTY, PATH_RSVP, PATH_GALLERY } from 'routes/paths';
import { getInvitation } from 'api';
import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

import './EnterCodeBlock.styles.scss';

const EnterCodeBlock = () => {
  const { code: codeParam } = useParams();
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');
  const { setInvitationData } = useInvitationContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setCode(value);
    setIsValid(value?.length === 10);
    setError(value ? '' : 'Please enter a code');
  };

  const handleSubmit = async () => {
    try {
      setError('');
      const { invitation } = await getInvitation(code);
      setInvitationData({ ...invitation, code });
      let path;
      if (pathname.includes(PATH_OUR_STORY)) {
        path = `${PATH_OUR_STORY}/${code}`;
      } else if (pathname.includes(PATH_WEDDING)) {
        path = `${PATH_WEDDING}/${code}`;
      } else if (pathname.includes(PATH_PARTY)) {
        path = `${PATH_PARTY}/${code}`;
      } else if (pathname.includes(PATH_RSVP)) {
        path = `${PATH_RSVP}/${code}`;
      } else if (pathname.includes(PATH_GALLERY)) {
        path = `${PATH_GALLERY}/${code}`;
      } else {
        path = `${PATH_HOME}${code}`;
      }
      navigate(path);
      if (code) window.location.reload();
    } catch (err) {
      const { error_message } = err;
      setError(error_message || 'Something went wrong');
    }
  };

  return (
    <div data-testid="EnterCodeBlock" className="EnterCodeBlock">
      <Heading text="Please enter your code" />
      <Paragraph
        text={
          codeParam
            ? "It looks like the code you've tried isn't quite right! Please try the code we sent you"
            : 'Please enter the code we sent you'
        }
      />
      <div className="my-[20px]">
        <Input
          name="code"
          placeholder="Please enter your code"
          value={code}
          onChange={handleInputChange}
          error={error}
        />
      </div>
      <Button text="Submit" onClick={handleSubmit} disabled={!isValid} />
    </div>
  );
};

EnterCodeBlock.propTypes = {};

export default EnterCodeBlock;
