import Navbar from 'components/Navbar/Navbar';
import MobileNavbar from 'components/MobileNavbar/MobileNavbar';
import PageContainer from 'components/PageContainer/PageContainer';
import Footer from 'components/Footer/Footer';
import Router from 'routes/Router';

import { useInvitationContext } from 'contexts/InvitationContext/useInvitationContext';

const App = () => {
  const { invitationLoading } = useInvitationContext();

  return (
    <>
      {invitationLoading ? (
        <div>
          <div className="absolute flex h-screen w-screen items-center justify-center">Loading...</div>
          <PageContainer>
            <Router />
          </PageContainer>
        </div>
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
