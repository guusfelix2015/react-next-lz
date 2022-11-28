import { render } from '@testing-library/react';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
