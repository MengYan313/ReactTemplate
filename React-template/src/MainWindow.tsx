import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'

/**
 * Main window component
 * Demonstrates best practices for using Grid and Box together:
 * - Grid: For responsive layout structure (rows, columns)
 * - Box: For local styling containers (non-layout related styles)
 */
export function MainWindow() {
  return (
    <Grid container spacing={2} sx={{ p: 2, minHeight: '100vh' }}>
      {/* Header Section - Full Width */}
      <Grid item xs={12}>
        <Box
          sx={{
            p: 2,
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            borderRadius: 1,
          }}
        >
          <Typography variant="h4" component="h1">
            React MUI Template
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            A template project built with React and MUI v5.18.0
          </Typography>
        </Box>
      </Grid>

      {/* Main Content Area - Two Column Layout */}
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 3, height: '100%' }}>
          <Typography variant="h5" gutterBottom>
            Main Content Area
          </Typography>
          <Typography variant="body1" paragraph>
            This is the primary content area. Grid handles the responsive layout,
            while Box is used for local styling like background colors and padding.
          </Typography>
          
          {/* Nested Grid for Cards */}
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  p: 2,
                  backgroundColor: 'grey.100',
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Card 1
                </Typography>
                <Typography variant="body2">
                  Content for card 1. Box provides local styling.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  p: 2,
                  backgroundColor: 'grey.100',
                  borderRadius: 1,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Card 2
                </Typography>
                <Typography variant="body2">
                  Content for card 2. Responsive layout with Grid.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* Sidebar - Right Column */}
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 3, height: '100%' }}>
          <Typography variant="h6" gutterBottom>
            Sidebar
          </Typography>
          <Divider sx={{ my: 2 }} />
          
          {/* Sidebar Content with Box for styling */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box
              sx={{
                p: 2,
                backgroundColor: 'action.hover',
                borderRadius: 1,
              }}
            >
              <Typography variant="body2" fontWeight="medium">
                Info Section
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sidebar content goes here.
              </Typography>
            </Box>
            
            <Button variant="contained" fullWidth>
              Action Button
            </Button>
            
            <Button variant="outlined" fullWidth>
              Secondary Action
            </Button>
          </Box>
        </Paper>
      </Grid>

      {/* Footer - Full Width */}
      <Grid item xs={12}>
        <Box
          sx={{
            p: 2,
            backgroundColor: 'grey.50',
            borderTop: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Footer content - Using Box for styling, Grid for layout structure
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

