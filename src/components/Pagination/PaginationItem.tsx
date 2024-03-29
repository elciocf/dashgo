import { Stack, Button, Box } from "@chakra-ui/react";

interface PaginationItemProps{
  number : number;
  isCurrent?:boolean;  
}

export function PaginationItem({isCurrent = false , number}:PaginationItemProps){
  if (isCurrent){
   return(
     <Button size="sm" fontSize="xs" width="4" colorScheme="pink" disabled _disabled={{bgColor: 'pink.500', cursor: 'default'}} >{number}</Button>
   )
  }else{
    return(
       <Button size="sm" fontSize="xs" width="4" bg="gray.700" _hover={{bgColor: 'gray.500'}}>{number}</Button>
    )
  } 
}