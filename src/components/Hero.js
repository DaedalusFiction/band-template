import { Box, Container, Typography } from "@mui/material";
import React from "react";
import heroImage from "../images/band1.jpg";

const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),
                      url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 5%",
            }}
        >
            <Container>
                <Box
                    sx={{
                        padding: "15vw 0 20vw 0",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            color: "var(--fc-secondary)",
                            textShadow: "5px 5px 5px black",
                            fontSize: "clamp(3rem, 6vw, 10.5rem)",
                        }}
                    >
                        SNACK BAR
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            color: "var(--fc-secondary-muted)",
                            textShadow: "5px 5px 5px black",
                        }}
                    >
                        Garage Punk and Alternative
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
// <Box sx={{ marginTop: "1rem" }}>
//     <img
//         src={heroImage}
//         alt="event banner"
//         style={{ width: "100%", height: "auto" }}
//     />
// </Box>
