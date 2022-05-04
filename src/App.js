import "./App.css";

import {
  Link,
  Button,
  Grid,
  Box,
  Avatar,
  Container,
  TextField,
  CssBaseline,
  createTheme,
  Switch,
  FormControlLabel,
  Typography,
  Checkbox,
} from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { StyledButton } from "./component/Button";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = () =>
    createTheme({
      palette: {
        mode,
      },
    });

  function handleSubmit() {}

  return (
    <ThemeProvider theme={darkTheme}>
      <FormControlLabel
        control={
          <Switch
            checked={mode === "dark" ? true : false}
            onChange={() =>
              setMode((oldValue) => (oldValue === "light" ? "dark" : "light"))
            }
            name="Light"
          />
        }
        label={mode === "light" ? "Dark" : "Light"}
      />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: "secondary.main" }}>
            <VpnKeyIcon />
          </Avatar>

          <Typography component="h1" variant="h3">
            Login
          </Typography>

          {/* Fazer o form usando o Box */}

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              error={true}
              helperText="Email inválido"
            />
            <TextField
              label="Senha"
              type="password"
              fullWidth
              margin="normal"
            />

            <FormControlLabel control={<Checkbox />} label="Lembre de mim" />

            {/* Construir um FormControlLabel com um Remember me */}

            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Enviar
            </StyledButton>

            <Grid container>
              <Grid item xs>
                <Link>Esqueceu a senha?</Link>
              </Grid>
              <Grid item>
                <Link>Ainda não tem cadastro?</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
