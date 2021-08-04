import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchInput = ({ value, handleChange }) => (
  <InputGroup size="lg" color="transparent">
    <InputLeftElement height="100%" pointerEvents="none">
      <SearchIcon color="gray.300" />
    </InputLeftElement>
    <Input
      placeholder="Search..."
      value={value}
      onChange={handleChange}
      color="black"
      border="0px"
      h="90"
      fontSize="28px"
      fontFamily="Helvetica Neue"
      fontWeight="bold"
      focusBorderColor="invisible"
      paddingX="0"
      autoFocus
    />
  </InputGroup>
)

export default SearchInput
