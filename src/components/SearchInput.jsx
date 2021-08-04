import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const SearchInput = ({ value, handleChange, placeholder, ...props }) => (
  <InputGroup {...props} size="lg" color="transparent">
    <InputLeftElement height="100%" pointerEvents="none">
      <SearchIcon color="gray.500" />
    </InputLeftElement>
    <Input
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      color="black"
      border="0"
      fontSize={['2xl', null, '3xl']}
      fontFamily="Helvetica Neue"
      fontWeight="bold"
      focusBorderColor="invisible"
      paddingX="0"
      autoFocus
    />
  </InputGroup>
)

export default SearchInput
