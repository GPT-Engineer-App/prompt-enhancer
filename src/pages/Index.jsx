import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, Stack, Text, Textarea, useToast } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const toast = useToast();

  const templates = [
    { value: "template1", label: "Template 1" },
    { value: "template2", label: "Template 2" },
    { value: "template3", label: "Template 3" },
  ];

  const handleLogin = () => {
    setIsLoggedIn(true);
    toast({
      title: "Logged in",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value);
    setInputText(getTemplateText(e.target.value));
  };

  const getTemplateText = (template) => {
    switch (template) {
      case "template1":
        return "This is the text for Template 1";
      case "template2":
        return "This is the text for Template 2";
      case "template3":
        return "This is the text for Template 3";
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    // Simulate API call to get output
    const generatedOutput = `Generated output for: ${inputText}`;
    setOutputText(generatedOutput);
  };

  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        GPT Prompt Improver
      </Heading>

      {!isLoggedIn ? (
        <Box textAlign="center">
          <Button colorScheme="blue" onClick={handleLogin}>
            Log In
          </Button>
        </Box>
      ) : (
        <Stack spacing={6}>
          <FormControl>
            <FormLabel>Select Template</FormLabel>
            <Select value={selectedTemplate} onChange={handleTemplateChange}>
              <option value="">Select a template</option>
              {templates.map((template) => (
                <option key={template.value} value={template.value}>
                  {template.label}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Input Text</FormLabel>
            <Textarea value={inputText} onChange={handleInputChange} placeholder="Enter your text here" rows={6} />
          </FormControl>

          <Button leftIcon={<FaRocket />} colorScheme="blue" onClick={handleSubmit}>
            Generate Output
          </Button>

          {outputText && (
            <Box>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Output:
              </Text>
              <Box p={4} bg="gray.100" borderRadius="md">
                {outputText}
              </Box>
            </Box>
          )}
        </Stack>
      )}
    </Container>
  );
};

export default Index;
