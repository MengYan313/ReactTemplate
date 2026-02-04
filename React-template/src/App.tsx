import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { MainWindow } from './MainWindow'

// Create MUI theme instance with default settings
const theme = createTheme()

/**
 * Application root component
 * Provides theme configuration and renders the main window
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainWindow />
    </ThemeProvider>
  )
}

export default App

