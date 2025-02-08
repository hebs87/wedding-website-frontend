import Navbar from 'components/Navbar/Navbar';
import MobileNavbar from 'components/MobileNavbar/MobileNavbar';
import WrappedLoadingSpinner from 'components/WrappedLoadingSpinner/WrappedLoadingSpinner';
import PageContainer from 'components/PageContainer/PageContainer';
import Footer from 'components/Footer/Footer';
import Router from 'routes/Router';

import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';
import { GALLERY_BASE_URL } from 'config/config';

const App = () => {
  const { invitationLoading } = useInvitationContext();
  const { href } = window?.location || {};
  const isGallery = href?.includes(GALLERY_BASE_URL);

  return (
    <>
      {!isGallery && invitationLoading ? (
        <>
          <WrappedLoadingSpinner />
          <PageContainer>
            <Router isGallery={isGallery} />
          </PageContainer>
        </>
      ) : (
        <>
          <Navbar isGallery={isGallery} />
          <MobileNavbar isGallery={isGallery} />
          <PageContainer>
            <Router isGallery={isGallery} />
          </PageContainer>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
