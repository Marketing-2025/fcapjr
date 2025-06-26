"use client";

import type React from "react";
import { Box, Typography, TextField, Button, Grid, Paper } from "@mui/material";
import { useState } from "react";

function SchedulePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen">
      <Box sx={{ py: 8 }}>
        <div className="container mx-auto px-4">
          <Typography
            variant="h3"
            component="h1"
            align="center"
            color="primary"
            className="mb-8"
          >
            Agendar Reunião
          </Typography>

          <Paper elevation={3} sx={{ p: 4, maxWidth: 800, mx: "auto" }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nome"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Telefone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Empresa"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Mensagem"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      backgroundColor: "#0a4c8a",
                      "&:hover": {
                        backgroundColor: "#063a6a",
                      },
                    }}
                  >
                    Enviar Solicitação
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </div>
      </Box>
    </div>
  );
}

export default SchedulePage;
