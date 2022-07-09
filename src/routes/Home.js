import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Divider,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <Box>
            <Hero />
            <Container>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Typography
                            sx={{
                                columnCount: { xs: 1, md: 2 },
                                color: "var(--fc-secondary-muted)",
                                textAlign: "justify",
                            }}
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Numquam dicta accusamus eius vitae nisi,
                            excepturi accusantium neque, quasi tempore quaerat
                            voluptate porro quibusdam. Perferendis voluptatum
                            quasi pariatur nihil nostrum a quia velit veritatis
                            illum sequi, ad impedit qui nisi dolore voluptates
                            facilis fugiat officia eius laboriosam officiis nam
                            nulla modi et debitis! Eum ab ratione dolore,
                            corrupti necessitatibus sequi? Ipsa, suscipit nam
                            eum consectetur error quisquam minima hic velit
                            necessitatibus laborum ratione tenetur esse,
                            assumenda debitis voluptatibus adipisci odio at
                            vero, labore aut atque. Incidunt autem ducimus qui
                            impedit facilis corporis blanditiis! Voluptatem
                            assumenda illum doloremque recusandae dicta nulla
                            sapiente!
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Home;
