import { CircularProgress, Container } from "@mui/material";

export default function Loading() {
  return (
    <Container
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress 
        color='info'
        size={60}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginTop: '-20px',
          marginLeft: '-20px',
        }}
      />
    </Container>
  )
}