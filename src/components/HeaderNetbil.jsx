import React from 'react';
import { Flex } from '@chakra-ui/react';

const HeaderNetbil = () => {
  return (
    <Flex width="100%" flexDirection="column">
      {/* Faixa roxa substituindo a imagem */}
      <Flex width="100%" bg="white" height="80px" maxWidth="1024px" marginTop="20px">
        <Flex width="100%">
          <a href="https://www.netbil.com.br/portal/home" className="logo-netbil">
            <img src="./images/logo_netbil.png" alt="Logo Netbil" />
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeaderNetbil;
