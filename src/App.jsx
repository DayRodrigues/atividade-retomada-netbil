import React, { useState } from 'react';
import Header from './components/Header';
import HeaderNetbil from './components/HeaderNetbil';
import Footer from './components/Footer';
import ListLivros from './components/ListLivros';
import Filters from './components/Filters';
import './style.css';
import { extendTheme, Flex, ChakraProvider, Box } from '@chakra-ui/react';
import Title from './components/Title';

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

const App = () => {
  const [ano, setAno] = useState('');
  const [tipo, setTipo] = useState('todos');
  return (
    <ChakraProvider theme={theme}>
      <Flex width="100%" flexDirection="column">
        <Box width="100%" maxWidth="1232px" mx="auto" px="16px">
          <HeaderNetbil />
        </Box>
        <Header />

        <Box width="100%" maxWidth="1232px" mx="auto" px="16px" marginBottom="200px">
          <Title />
          <Filters ano={ano} setAno={setAno} tipo={tipo} setTipo={setTipo} />
          <ListLivros anoFiltro={ano} tipoFiltro={tipo} />
        </Box>

        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

export default App;
