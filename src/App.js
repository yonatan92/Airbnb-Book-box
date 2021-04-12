import './App.css';
import GuestMenu from './components/guest/GuestsMenu';
import AppTitle from './components/AppTitle';
import Panel from './components/Panel';
import styled from 'styled-components';
import GlobalStyles from './global.styles';

function App() {
  return (
    <Box>
      <AppTitle />
      <Panel />
      <GlobalStyles />
    </Box>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding-top: 5rem;
`;
// const MainTitle = styled(Title)`
//   font-size: 2.6rem;
//   margin: 2.6rem;
// `;
const Logo = styled.img`
  width: 4rem;
  margin-right: 2rem;
  margin-bottom: -0.8rem;
`;
