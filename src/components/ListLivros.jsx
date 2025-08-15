import { Flex, Box, Text, Button, Icon, Image, SimpleGrid, Grid } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { useState } from 'react';

{/* No Array, a lista de livros traz o objeto com a informação do tipo, ano, descrição, capa e cores da estilização */}
const livros = [
  {
    tipo: 'Professor',
    ano: '1º ANO',
    descricao: 'Materiais que facilitam a prática docente com foco no desenvolvimento integral.',
    capa: './images/ativa_mente_1_professor.png',
    corAno: 'linear-gradient(101.32deg, #4091A7 3.64%, #1DB37F 112.95%)',
    corTipo: '#FF6A2A',
    corFundo: 'linear-gradient(135deg, #DFF3F7 0%, #ffffff 100%)', // baseado no corBotao #4091A7
    corBotao: '#4091A7',
    corBotaoHover: '#daeef3ff',
  },
  {
    tipo: 'Aluno',
    ano: '1º ANO',
    descricao: 'Atividades lúdicas que estimulam a aprendizagem significativa.',
    capa: './images/ativa_mente_1_aluno.png',
    corAno: 'linear-gradient(101.32deg, #4091A7 3.64%, #1DB37F 112.95%)',
    corTipo: '#F6A100',
    corFundo: 'linear-gradient(135deg, #DFF3F7 0%, #ffffff 100%)',
    corBotao: '#4091A7',
    corBotaoHover: '#daeef3ff',
  },
  {
    tipo: 'Professor',
    ano: '2º ANO',
    descricao: 'Recursos que fortalecem a prática e as aprendizagens.',
    capa: './images/ativa_mente_2_professor.png',
    corAno: 'linear-gradient(101.32deg, #1DB37F 3.64%, #8DAC02 112.95%)',
    corTipo: '#FF6A2A',
    corFundo: 'linear-gradient(135deg, #D1F0E0 0%, #ffffff 100%)', // baseado no corBotao #1DB37F
    corBotao: '#1DB37F',
    corBotaoHover: '#d1eee4ff',
  },
  {
    tipo: 'Aluno',
    ano: '2º ANO',
    descricao: 'Conteúdos que estimulam e ampliam autonomia e criatividade.',
    capa: './images/ativa_mente_2_aluno.png',
    corAno: 'linear-gradient(101.32deg, #1DB37F 3.64%, #8DAC02 112.95%)',
    corTipo: '#F6A100',
    corFundo: 'linear-gradient(135deg, #D1F0E0 0%, #ffffff 100%)',
    corBotao: '#1DB37F',
    corBotaoHover: '#d1eee4ff',
  },
  {
    tipo: 'Professor',
    ano: '3º ANO',
    descricao: 'Planejamentos que enriquecem as experiências de ensino.',
    capa: './images/ativa_mente_3_professor.png',
    corAno: 'linear-gradient(101.32deg, #525FBC 3.64%, #A252BC 112.95%)',
    corTipo: '#FF6A2A',
    corFundo: 'linear-gradient(135deg, #E3E5F4 0%, #ffffff 100%)',
    corBotao: '#525FBC',
    corBotaoHover: '#d1d5efff',
  },
  {
    tipo: 'Aluno',
    ano: '3º ANO',
    descricao: 'Propostas que despertam o interesse e facilitam a construção de saberes.',
    capa: './images/ativa_mente_3_aluno.png',
    corAno: 'linear-gradient(101.32deg, #525FBC 3.64%, #A252BC 112.95%)',
    corTipo: '#F6A100',
    corFundo: 'linear-gradient(135deg, #E3E5F4 0%, #ffffff 100%)',
    corBotao: '#525FBC',
    corBotaoHover: '#d1d5efff',
  },
  {
    tipo: 'Professor',
    ano: '4º ANO',
    descricao: 'Conteúdos estruturados para promover o engajamento e a evolução da turma.',
    capa: './images/ativa_mente_4_professor.png',
    corAno: 'linear-gradient(101.32deg, #A96241 3.64%, #9B2BAD 112.95%)',
    corTipo: '#FF6A2A',
    corFundo: 'linear-gradient(135deg, #F3E5F8 0%, #ffffff 100%)', // baseado no corBotao #A96241
    corBotao: '#A96241',
    corBotaoHover: '#eed7ccff',
  },
  {
    tipo: 'Aluno',
    ano: '4º ANO',
    descricao: 'Exercícios com foco em desafios e desenvolvimento.',
    capa: './images/ativa_mente_4_aluno.png',
    corAno: 'linear-gradient(101.32deg, #A96241 3.64%, #9B2BAD 112.95%)',
    corTipo: '#F6A100',
    corFundo: 'linear-gradient(135deg, #F3E5F8 0%, #ffffff 100%)',
    corBotao: '#A96241',
    corBotaoHover: '#eed7ccff',
  },
  {
    tipo: 'Professor',
    ano: '5º ANO',
    descricao: 'Apoio pedagógico para potencializar o ensino com intencionalidade e didática.',
    capa: './images/ativa_mente_5_professor.png',
    corAno: 'linear-gradient(101.32deg, #84963B 3.64%, #3B9696 112.95%)',
    corTipo: '#FF6A2A',
    corFundo: 'linear-gradient(135deg, #E8F0D8 0%, #ffffff 100%)', // baseado no corBotao #84963B
    corBotao: '#84963B',
    corBotaoHover: '#e8eed1ff',
  },
  {
    tipo: 'Aluno',
    ano: '5º ANO',
    descricao: 'Tarefas que tornam a aprendizagem mais envolvente e participativa.',
    capa: './images/ativa_mente_5_aluno.png',
    corAno: 'linear-gradient(101.32deg, #84963B 3.64%, #3B9696 112.95%)',
    corTipo: '#F6A100',
    corFundo: 'linear-gradient(135deg, #E8F0D8 0%, #ffffff 100%)',
    corBotao: '#84963B',
    corBotaoHover: '#e8eed1ff',
  },
];
  export default function ListLivros({ anoFiltro = '', tipoFiltro = 'todos' }) {
  const [activeIndex, setActiveIndex] = useState({});
  const bimestres = [1, 2, 3, 4];

  {/* Filtra os livros e o ano conforme o filtro selecionado, retornando apenas o que cumprrem os dois*/}
  const livrosFiltrados = livros.filter(livro => {
    const anoOk = !anoFiltro || livro.ano === anoFiltro.replace('-ano', 'º ANO');
    const tipoOk = tipoFiltro === 'todos' || livro.tipo.toLowerCase() === tipoFiltro.toLowerCase();
    return anoOk && tipoOk;
  });
  return (
    <SimpleGrid columns={[1, null, 2]} spacing="30px">
      {livrosFiltrados.map((livro, i) => (
        <Flex
          key={i}
          align="center"
          p="20px"
          borderRadius="16px"
          background={livro.corFundo}
          height="280px"
          width="520px"
        >
          {/* Capa */}
          <Image src={livro.capa} alt={livro.ano} width="180px" height="220px" borderRadius="6px" />

          {/* Conteúdo */}
          <Flex direction="column" ml="20px" flex="1" height="240px">
            {/* Tipo */}
            <Text
              bg={livro.corTipo}
              color="white"
              fontWeight="bold"
              px="12px"
              py="2px"
              borderRadius="8px"
              fontSize="14px"
              w="fit-content"
              mb="8px"
            >
              {livro.tipo}
            </Text>

            {/* Ano */}
            <Text
              bg={livro.corAno}
              color="white"
              fontWeight="bold"
              height="32px"
              px="14px"
              py="4px"
              borderRadius="8px"
              fontSize="18px"
              w="fit-content"
              mb="12px"
            >
              {livro.ano}
            </Text>

            {/* Descrição */}
            <Text fontSize="14px" color="#333" width="100%" mb="16px">
              {livro.descricao}
            </Text>

            
            {/* Botões - em duas colunas */}
            <SimpleGrid columns={[1, null, 2]} spacing="10px">
              {bimestres.map((bim, index) => {
                const isActive = index === activeIndex;

                return (
                  <Button
                    key={bim}
                    onClick={() => setActiveIndex(index)}
                    leftIcon={<Icon as={DownloadIcon} color={isActive ? '#fff' : livro.corBotao} />}
                    variant="outline"
                    height="34px"
                    width="131px"
                    bg={isActive ? '#333' : 'transparent'}
                    color={isActive ? '#fff' : livro.corAno}
                    border={isActive ? 'none' : `1px solid ${livro.corBotao}`}
                    _hover={{
                      bg: isActive ? '#444' : livro.corBotaoHover,
                    }}
                    borderRadius="10px"
                  >
                    <Text
                      fontWeight="bold"
                      fontSize="14px"
                      color={isActive ? '#fff' : livro.corBotao}
                    >
                      {bim}º Bim
                    </Text>
                  </Button>
                );
              })}
            </SimpleGrid>
          </Flex>
        </Flex>
      ))}
    </SimpleGrid>
  );
}
