import React, { useState } from 'react';
import { Select, Button, Text, Flex, RadioGroup, Radio, Stack, SimpleGrid } from '@chakra-ui/react';

{/*Ao clicar ele limpa, as seleções*/}
  const Filters = ({ ano, setAno, tipo, setTipo }) => {
  const handleClear = () => {
    setAno('');
    setTipo('todos');
    console.log("Função de limpar filtro")
};
  const handleAnoChange = (e) => {
    setAno(e.target.value);
    console.log("Selecionei o livro pelo ano", e.target.value);
};
  const handleTipoChange = (value) => {
    setTipo(value);
    console.log("Selecionei o livro pelo tipo", value);
};
  return (
    <SimpleGrid
      justifyContent="space-between"
      alignItems="flex-start"
      width="100%"
      flexWrap="wrap"
      marginBottom="80px"
      marginTop="65px"
      gap="40px"
      columns={[1, 2]}
    >
      {/* Bloco Livro */}
      <Flex flexDirection="column" gap="8px" width="100%">
        <Text fontSize="18px" fontWeight={600} marginBottom="10px">
          Livro:
        </Text>
        <Flex alignItems="center" width="100%" maxWidth="424px" gap="10px">
          <Select placeholder="Selecione" borderRadius="8px" height="40px" value={ano} onChange={handleAnoChange}>
            <option value="1-ano">1º ANO</option>
            <option value="2-ano">2º ANO</option>
            <option value="3-ano">3º ANO</option>
            <option value="4-ano">4º ANO</option>
            <option value="5-ano">5º ANO</option>
          </Select>
          <Button
            id="limparFiltroAno"
            borderRadius="8px"
            height="32px"
            marginTop="10px"
            variant="outline"
            px="14px"
            onClick={handleClear}
          >
            Limpar
          </Button>
        </Flex>
      </Flex>

      {/* Bloco Mostrar */}
      <Flex flexDirection="column" gap="8px" width="100%">
        <Text fontSize="18px" fontWeight={600} marginBottom="25px">
          Mostrar:
        </Text>
          <RadioGroup value={tipo} onChange={handleTipoChange}>
          <Stack direction="row" spacing={6} align="center">
            <Radio value="todos">Todos</Radio>
            <Radio value="professor">Professor</Radio>
            <Radio value="aluno">Aluno</Radio>
          </Stack>
        </RadioGroup>
      </Flex>
    </SimpleGrid>
  );
};

export default Filters;
