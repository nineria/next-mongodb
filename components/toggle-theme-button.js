import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';

const ToggleThemeButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label='Toggle theme'
      colorScheme={useColorModeValue('purple', 'yellow')}
      bgColor={useColorModeValue('purple.400', 'yellow.200')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    />
  );
};

export default ToggleThemeButton;
