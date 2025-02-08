import { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, useLocation, useNavigate } from 'react-router';

import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import { PATH_HOME, PATH_OUR_STORY, PATH_WEDDING, PATH_PARTY, PATH_RSVP } from 'routes/paths';
import { getInvitation } from 'api';
import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

import { GALLERY_CODE } from 'config/config';

import './EnterCodeBlock.styles.scss';

const EnterCodeBlock = ({ isGallery = false }) => {
  const { code: codeParam } = useParams();
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    if (code?.length !== 10) return;

    // Validate the code internally in the gallery page
    if (isGallery) {
      if (code.toLowerCase() !== GALLERY_CODE.toLowerCase()) {
        setError('Sorry, that code is not valid. Please try again');
        return;
      }
      return navigate(`${PATH_HOME}${code}`);
    }

    // Validate the code in the API if we're not accessing the gallery
    try {
      setIsLoading(true);
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
      } else {
        path = `${PATH_HOME}${code}`;
      }
      navigate(path);
      setIsLoading(false);
      if (code) window.location.reload();
    } catch (err) {
      const { error_message } = err;
      setError(error_message || 'Something went wrong');
      setIsLoading(false);
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
          handleSubmit={handleSubmit}
        />
      </div>
      <Button text="Submit" onClick={handleSubmit} disabled={!isValid || isLoading} loading={isLoading} />
    </div>
  );
};

EnterCodeBlock.propTypes = {
  isGallery: PropTypes.bool,
};

export default EnterCodeBlock;
