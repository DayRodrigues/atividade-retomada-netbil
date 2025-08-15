import React from 'react';
import { Flex } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex width="100%" flexDirection="column" marginBottom="70px">
      {/* Faixa roxa substituindo a imagem */}
      <Flex
        width="100%"
        height="80px" // ajuste conforme a altura da imagem original
        bg="linear-gradient(90deg, #1b0050 0%, #6e154c 50%, #e63746 100%)"
      />
    </Flex>
  );
};

export default Header;
