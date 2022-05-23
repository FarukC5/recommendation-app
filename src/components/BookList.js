import React from "react";
import { experimentalStyled as styled, Paper, Box, Grid } from "@mui/material";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  const styles = {
    box: {
      marginTop: "20px",
      flexGrow: 1,
    },
    grid: {
      width: "fit-content",
    },
  };

  return (
    <Box style={styles.box}>
      <Grid
        style={{ display: "flex" }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {books.map((books, index) => (
          <Grid item xs={2} sm={4} md={3} key={index} style={styles.grid}>
            <Item>
              <BookCard books={books} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default BookList;
