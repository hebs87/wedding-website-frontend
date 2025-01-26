import { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

import Heading from 'components/Heading/Heading';
import Paragraph from 'components/Paragraph/Paragraph';

import './Countdown.styles.scss';

// Heading (secondary)
// Paragraph (uppercase)
const Countdown = ({ variant = 'wedding' }) => {
  const [countdownData, setCountdownData] = useState({
    days: 0,
    hrs: 0,
    mins: 0,
    secs: 0,
  });
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    const day = variant === 'wedding' ? '16' : '18';
    const time = variant === 'wedding' ? '14' : '19';
    const date = new Date(`2025-10-${day} ${time}:00`);
    const timer = setInterval(function () {
      // Get current date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = date - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdownData
      setCountdownData({ days, hrs, mins, secs });

      // If the countdown is finished, set the timerExpired state to true
      if (distance < 0) {
        clearInterval(timer);
        setTimerExpired(true);
      }
    }, 1000);

    // Clear the timer on component dismount
    return () => clearInterval(timer);
  }, [variant]);

  return (
    <div data-testid="Countdown" className="Countdown text-center">
      <Heading variant="secondary" text={`Countdown to ${variant} time!`} />
      {timerExpired ? (
        <Heading text="It's time 🎉🥳🍾" customClasses="uppercase text-text" />
      ) : (
        <div className="flex justify-center gap-[10px]">
          {Object.keys(countdownData).map((key, index) => (
            <Fragment key={index}>
              <div>
                <Heading text={`${countdownData[key]}`.padStart(2, '0')} customClasses="text-text" />
                <Paragraph variant="uppercase" text={key} customClasses="font-AmikoBold" />
              </div>
              {key !== 'secs' && <Heading text=":" customClasses="text-text" />}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

Countdown.propTypes = {
  variant: PropTypes.oneOf(['wedding', 'party']),
};

export default Countdown;
