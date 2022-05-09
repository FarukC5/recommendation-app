import React, { useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  styled,
  alpha,
} from "@mui/material";
import BookList from "./BookList";
import BookModal from "./BookModal";

const HomePage = () => {
  const [input, setInput] = useState("");
  const [books, setBooks] = useState([]);
  const [recButton, setRecButton] = useState(false);
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState();

  async function submitHandler(e) {
    e.preventDefault();
    await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
      .then((result) => {
        setBooks(result.data.items);
        setRecButton(true);
      });
  }

  const searchHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const recommendClick = () => {
    setOpen(true);
    setBook(books[Math.floor(Math.random() * books.length)]);
  };

  const styles = {
    box: {
      flexGrow: 1,
    },

    typograpfy: {
      flexGrow: 1,
      display: { xs: "none", sm: "block" },
    },

    div: {
      textAlign: "center",
    },

    button: {
      marginTop: "10px",
      width: "50%",
    },
  };

  return (
    <>
      <div>
        <Box style={styles.box}>
          <AppBar position="static">
            <Toolbar style={styles.bar}>
              <Typography
                style={styles.typograpfy}
                variant="h5"
                noWrap
                component="div"
              >
                Book Recommender
              </Typography>
              <form onSubmit={submitHandler}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search titles…"
                    onChange={searchHandler}
                  />
                </Search>
              </form>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      {!!recButton && (
        <div style={styles.div}>
          <Button
            onClick={recommendClick}
            variant="contained"
            style={styles.button}
          >
            Recommend me a book
          </Button>
          <BookList setOpen={setOpen} setBook={setBook} books={books} />
        </div>
      )}
      {!!open && <BookModal setOpen={setOpen} book={book} />}
    </>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default HomePage;
