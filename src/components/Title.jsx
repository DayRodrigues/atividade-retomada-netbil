import React from 'react';
import { Flex, Text, Divider, Image } from '@chakra-ui/react';

const Title = () => {
  return (
    <Flex width="100%" flexDirection="column" marginBottom="30px">
      <Flex width="100%" align="center" marginBottom="10px">
        <Image
          src="./images/logo_atividade.svg"
          alt="Logo Atividade"
          height="32px"
          width="40px"
          marginRight="13px"
        />
        <Text fontSize="28px" fontWeight="600" fontStyle="semibold" marginRight="10px">
          Atividade de Retomada
        </Text>
      </Flex>
      <Flex width="100%" marginTop="5px">
        <Divider color="black" />
      </Flex>
    </Flex>
  );
};

export default Title;
