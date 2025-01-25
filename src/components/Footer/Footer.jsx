import './Footer.styles.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div data-testid="Footer" className="Footer flex h-[40px] w-full items-center justify-center text-[12px]">
      &copy; {currentYear} Sunny Hebbar
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
