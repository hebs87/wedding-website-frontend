import Navbar from 'components/Navbar/Navbar';
import MobileNavbar from 'components/MobileNavbar/MobileNavbar';
import WrappedLoadingSpinner from 'components/WrappedLoadingSpinner/WrappedLoadingSpinner';
import PageContainer from 'components/PageContainer/PageContainer';
import Footer from 'components/Footer/Footer';
import Router from 'routes/Router';

import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

const App = () => {
  const { invitationLoading } = useInvitationContext();

  return (
    <>
      {invitationLoading ? (
        <>
          <WrappedLoadingSpinner />
          <PageContainer>
            <Router />
          </PageContainer>
        </>
      ) : (
        <>
          <Navbar />
          <MobileNavbar />
          <PageContainer>
            <Router />
          </PageContainer>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
