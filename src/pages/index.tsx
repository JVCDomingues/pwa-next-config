import type { NextPage } from 'next'
import { Flex, Text, Button, Input, Box, VStack, useToast } from '@chakra-ui/react';
import { useState, useRef } from 'react';

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast()
  const audioRef = useRef<HTMLAudioElement>(null)

  async function promise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('Something went wrong'), 3000)
    });
  }

  async function login() {
    setIsLoading(true)
    try {
      const response = await promise();
    } catch(err) {
      toast({
        title: 'Ops!',
        description: 'Something went wrong',
        status: 'error',
        isClosable: true,
        duration: 5000
      })
      audioRef.current?.play();
      window.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]);
    }
    setIsLoading(false)
  }

  return (
    <Box h="100vh" bg="gray.900" display="flex" justifyContent="center" alignItems="center" px="4">
      <Flex 
        bg="gray.800" 
        direction="column" 
        p="5"
        borderRadius="8"
        w="100%"
      >
        <VStack>
          <Text color="gray.100">Enter your credentials</Text>
          <Input placeholder="Username" color="white" type="text" value={username} onChange={event => setUsername(event.target.value)}/>
          <Input placeholder="Password" type="password" color="white" value={password} onChange={event => setPassword(event.target.value)}/>

          <Button colorScheme="twitter" w="full" onClick={login} isLoading={isLoading} disabled={!username || !password}>Login</Button>

        </VStack>

      </Flex>
      <audio ref={audioRef} src="/sounds/error.mp3"></audio>
    </Box>
  )
}

export default Home
