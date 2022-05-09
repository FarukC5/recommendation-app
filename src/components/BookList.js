import React from "react";
import { experimentalStyled as styled, Paper, Box, Grid } from "@mui/material";
import BookCard from "./BookCard";

const BookList = ({ books, setBook, setOpen }) => {
  const styles = {
    box: {
      margin: "40px",
      flexGrow: 1,
    },

    grid: {
      width: "fit-content",
    },
  };

  return (
    <Box style={styles.box}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {books.map((books, index) => (
          <Grid item xs={2} sm={4} md={3} key={index} style={styles.grid}>
            <Item>
              <BookCard setOpen={setOpen} setBook={setBook} books={books} />
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
