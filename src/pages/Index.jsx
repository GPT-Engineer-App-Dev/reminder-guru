import { Container, Text, VStack, Heading, Box, Flex } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        <Box as="header" bg="teal.500" color="white" py={4}>
          <Heading as="h1" size="xl" textAlign="center">Todo App</Heading>
        </Box>
        <Box as="main" flex="1" p={4}>
          <VStack spacing={4}>
            <Heading as="h2" size="lg">Your Todo List</Heading>
            <Text fontSize="md">This is where your todo list and form will be displayed.</Text>
          </VStack>
        </Box>
        <Box as="footer" bg="gray.700" color="white" py={2} textAlign="center">
          <Text fontSize="sm">© 2023 Todo App. All rights reserved.</Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;