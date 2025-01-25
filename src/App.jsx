import Navbar from 'components/Navbar/Navbar';
import MobileNavbar from 'components/MobileNavbar/MobileNavbar';
import PageContainer from 'components/PageContainer/PageContainer';
import Router from 'routes/Router';

const App = () => {
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <PageContainer>
        <Router />
      </PageContainer>
    </>
  );
};

export default App;
