import { useState } from "react";
import { Container, Text, VStack, Heading, Box, Flex, Input, Button, List, ListItem, IconButton } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodoIndex, setCurrentTodoIndex] = useState(null);

  const handleInputChange = (e) => setTodoText(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() === "") return;
    if (isEditing) {
      const updatedTodos = todos.map((todo, index) =>
        index === currentTodoIndex ? todoText : todo
      );
      setTodos(updatedTodos);
      setIsEditing(false);
      setCurrentTodoIndex(null);
    } else {
      setTodos([...todos, todoText]);
    }

    setTodoText("");
  };

  const handleEditClick = (index) => {
    setTodoText(todos[index]);
    setIsEditing(true);
    setCurrentTodoIndex(index);
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
                <Button type="submit" colorScheme="teal">
                  {isEditing ? "Update Todo" : "Add Todo"}
                </Button>
              </Flex>
            </form>
            <List spacing={3} width="100%">
              {todos.map((todo, index) => (
                <ListItem key={index} bg="gray.100" p={2} borderRadius="md" display="flex" justifyContent="space-between" alignItems="center">
                  {todo}
                  <IconButton
                    aria-label="Edit Todo"
                    icon={<EditIcon />}
                    onClick={() => handleEditClick(index)}
                  />
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