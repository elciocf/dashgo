import { Flex, Text, Box, Avatar} from '@chakra-ui/react'

interface ProfileProps{
  showProfileData : boolean;
}
export function Profile({showProfileData = true}: ProfileProps){
  return (
  <Flex
      align="center"
    >
      { showProfileData && (
        <Box
          mr="4"
          textAlign="right"
        >
            <Text>Elcio C Freitas</Text>
            <Text color="gray.300" fontSize="small">elcio@cicom.com.br</Text>
        </Box> 
      )}

      <Avatar size="md" name="Elcio Freitas" src="https://github.com/elciocf.png" />
    </Flex>
  )
}    