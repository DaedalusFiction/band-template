import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./routes/Layout.js";
import Home from "./routes/Home";
import Photos from "./routes/Photos";
import Nopage from "./routes/Nopage";
import "./App.css";
import Contact from "./routes/Contact.js";
import Schedule from "./routes/Schedule.js";
import Event from "./routes/Event.js";

function App() {
    const theme = createTheme({
        palette: {
            background: {
                default: "#001d1b",
            },
            primary: {
                main: "#004b46",
            },
            secondary: {
                main: "#C42021",
            },
        },
        typography: {
            fontFamily: "var(--ff-primary)",
            color: "var(--fc-primary)",
            h1: {
                fontSize: "clamp(3rem, 4vw, 10.5rem)",
                fontFamily: "var(--ff-secondary)",
                fontWeight: "bold",
            },
            h2: {
                fontSize: "clamp(2.25rem, 3vw, 10.5rem)",

                fontFamily: "var(--ff-secondary)",
            },

            h5: {
                fontSize: "1.2rem",
            },
            h6: {
                lineHeight: "1.25rem",
                fontSize: "1.2rem",
            },
        },
        components: {
            MuiTooltip: {
                styleOverrides: {
                    tooltip: {
                        backgroundColor: "var(--bg-accent)",
                        color: "var(--fc-secondary)",
                    },
                },
            },
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="photos" element={<Photos />} />
                        <Route path="schedule" element={<Schedule />} />
                        <Route path="events/:event" element={<Event />} />
                        <Route path="contact" element={<Contact />} />

                        <Route path="*" element={<Nopage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
