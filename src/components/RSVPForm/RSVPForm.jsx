import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';
import Checkbox from 'components/Checkbox/Checkbox';
import Textarea from 'components/Textarea/Textarea';
import Button from 'components/Button/Button';
import RSVPModal from 'components/RSVPModal/RSVPModal';

import { rsvp } from 'api';
import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

import './RSVPForm.styles.scss';

const RSVPForm = () => {
  const { code } = useParams();
  const [formData, setFormData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { invitationData, setInvitationData } = useInvitationContext();
  const { invitation_type, guests } = invitationData;

  useEffect(() => {
    const tempFormData = {
      guests: [],
      invitation: {
        responded: true,
        additional_info: '',
      },
    };
    guests?.forEach(({ guest_uuid, name, party_only, wedding, party }) =>
      tempFormData.guests.push({ guest_uuid, name, party_only, wedding, party }),
    );
    setFormData(tempFormData);
  }, [guests]);

  const handleFieldChange = (name, value, fieldType, guest_index) => {
    const tempFormData = JSON.parse(JSON.stringify(formData));
    if (fieldType === 'textarea') {
      tempFormData.invitation.additional_info = value;
    } else {
      tempFormData.guests[guest_index][name] = value;
    }
    setFormData(tempFormData);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setIsOpen(false);
      await rsvp(code, formData);
      setInvitationData({ ...invitationData, responded: true });
      setIsLoading(false);
    } catch (err) {
      const { error_message } = err;
      setError(error_message || 'Something went wrong');
      setIsLoading(false);
    }
  };

  return (
    <div data-testid="RSVPForm" className="RSVPForm mx-auto w-full max-w-[600px] text-left">
      <div className="flex flex-col gap-[10px]">
        <div className="flex gap-[20px]">
          <div className="flex-1">
            <Paragraph variant="uppercase" text="Name" customClasses="font-AmikoBold text-[14px]" />
          </div>
          {invitation_type === 'wedding' && (
            <div className="flex w-[130px] items-center justify-center">
              <Paragraph variant="uppercase" text="Wedding/Meal" customClasses="font-AmikoBold text-[14px]" />
            </div>
          )}
          <div className="flex w-[60px] items-center justify-center">
            <Paragraph variant="uppercase" text="Party" customClasses="font-AmikoBold text-[14px]" />
          </div>
        </div>
        {formData?.guests?.map(({ name, party_only, wedding, party }, index) => (
          <div key={index} className="flex gap-[20px]">
            <div className="flex-1 translate-y-[2px]">
              <Paragraph text={name} />
            </div>
            {invitation_type === 'wedding' && !party_only && (
              <div className="flex w-[130px] items-center justify-center">
                <Checkbox
                  name="wedding"
                  checked={wedding}
                  onChange={(name, value) => handleFieldChange(name, value, 'checkbox', index)}
                />
              </div>
            )}
            <div className="flex w-[60px] items-center justify-center">
              <Checkbox
                name="party"
                checked={party}
                onChange={(name, value) => handleFieldChange(name, value, 'checkbox', index)}
              />
            </div>
          </div>
        ))}
        <div className="mt-[20px]">
          <Textarea
            label="Additional information"
            name="additional_info"
            placeholder="Anything else we need to know?"
            value={formData?.invitation?.additional_info || ''}
            onChange={(name, value) => handleFieldChange(name, value, 'textarea')}
          />
        </div>
        {error && <span className="text-error inline-block text-[12px] text-title">{error}</span>}
        <div>
          <Button
            text="Submit"
            onClick={() => (isLoading ? {} : setIsOpen(true))}
            disabled={isLoading}
            loading={isLoading}
          />
        </div>
      </div>
      <RSVPModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="flex flex-col gap-[20px]">
          <div className="px-[30px] sm:p-0">
            <Heading text="Have you finished?" />
          </div>
          <Paragraph
            variant="uppercase"
            text="
              Are you sure you're ready to submit? Once you've submitted, you can't edit your response. If you change
              your mind, or need to update any of your details, please get in touch with either of us.
            "
          />
          <div className="flex justify-center gap-[20px]">
            <Button variant="secondary" text="Cancel" onClick={() => setIsOpen(false)} />
            <Button text="Submit" onClick={() => handleSubmit()} />
          </div>
        </div>
      </RSVPModal>
    </div>
  );
};

RSVPForm.propTypes = {};

export default RSVPForm;
