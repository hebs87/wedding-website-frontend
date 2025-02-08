import './Footer.styles.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      data-testid="Footer"
      className="Footer flex h-[60px] w-full items-center justify-center text-center text-[12px]"
    >
      &copy; {currentYear}
      <br />
      Designed & created by Sunny & Kim
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
