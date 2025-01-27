import { useState } from 'react';
import { useParams } from 'react-router';

import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import { getInvitation } from 'api';
import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

import './EnterCodeBlock.styles.scss';

const EnterCodeBlock = () => {
  const { code: codeParam } = useParams();
  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState('');
  const { setInvitationData } = useInvitationContext();

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
