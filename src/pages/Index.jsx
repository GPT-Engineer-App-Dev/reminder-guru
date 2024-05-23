import { useState } from "react";
import { Container, Text, VStack, Heading, Box, Flex, Input, Button, List, ListItem } from "@chakra-ui/react";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleInputChange = (e) => setTodoText(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") return;
    setTodos([...todos, todoText]);
    setTodoText("");
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        <Box as="header" bg="teal.500" color="white" py={4}>
          <Heading as="h1" size="xl" textAlign="center">Todo App</Heading>
        </Box>
        <Box as="main" flex="1" p={4}>
          <VStack spacing={4}>
            <Heading as="h2" size="lg">Your Todo List</Heading>
            <form onSubmit={handleFormSubmit}>
              <Flex>
                <Input
                  placeholder="Enter a new todo"
                  value={todoText}
                  onChange={handleInputChange}
                  mr={2}
                />
                <Button type="submit" colorScheme="teal">Add Todo</Button>
              </Flex>
            </form>
            <List spacing={3} width="100%">
              {todos.map((todo, index) => (
                <ListItem key={index} bg="gray.100" p={2} borderRadius="md">
                  {todo}
                </ListItem>
              ))}
            </List>
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