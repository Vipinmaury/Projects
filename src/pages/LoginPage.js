import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Box, Button, Input, Stack, FormErrorMessage } from '@chakra-ui/react';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Destructure errors from formState
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      await login(data.username, data.password);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt="10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Input
            placeholder="Username"
            {...register('username', { required: 'Username is required' })} // Add required validation message
            isInvalid={errors.username} // Add isInvalid prop based on errors
          />
          {/* Display error message if username field is invalid */}
          <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
          <Input
            placeholder="Password"
            type="password"
            {...register('password', { required: 'Password is required' })} // Add required validation message
            isInvalid={errors.password} // Add isInvalid prop based on errors
          />
          {/* Display error message if password field is invalid */}
          <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginPage;
