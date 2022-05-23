import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
} from "@mui/material";
import BookList from "./BookList";
import BookModal from "./BookModal";

const HomePage = () => {
  const [input, setInput] = useState("");
  const [books, setBooks] = useState([]);
  const [recButton, setRecButton] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [book, setBook] = useState();

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setOpenDetails(false);
    });
  });

  function submitHandler(e) {
    e.preventDefault();
    if (input !== "") {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
        .then((result) => {
          if (result.data.items !== undefined) {
            setBooks(result.data.items);
            setRecButton(true);
          } else {
            setErrorMsg("result not found!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setErrorMsg("You did not enter anything!");
      return;
    }
  }

  const searchHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setErrorMsg("");
  };

  const recommendClick = () => {
    setOpen(true);
    setBook(books[Math.floor(Math.random() * books.length)]);
  };

  const styles = {
    appbar: {
      borderRadius: "5px",
    },
    box: {
      flexGrow: 1,
    },
    bar: {
      display: "flex",
      flexDirection: "column",
    },
    form: {
      display: "flex",
      alignItems: "center",
      marginTop: "5px",
    },
    typograpfy: {
      display: { xs: "none", sm: "block" },
    },
    div: {
      textAlign: "center",
      margin: "2px",
    },
    button: {
      textTransform: "none",
    },
    error: {
      display: "flex",
      justifyContent: "center",
    },
    appbarCard: {
      margin: "2px",
    },
    appbarContent: {
      display: "flex",
      justifyContent: "center",
    },
    modalCard: {
      margin: "140px 5px 0px 5px",
      background: "whitesmoke",
    },
  };

  return (
    <>
      <>
        <AppBar color="primary" style={styles.appbar}>
          <Card color="primary">
            <div style={styles.appbarCard}>
              <Box style={styles.box}>
                <Card>
                  <Toolbar style={styles.bar}>
                    <Typography
                      style={styles.typograpfy}
                      variant="h5"
                      noWrap
                      component="div"
                    >
                      Book Recommender
                    </Typography>
                    <Typography variant="subtitle12">
                      Which book should you read?
                    </Typography>
                  </Toolbar>
                </Card>

                <form onSubmit={submitHandler} style={styles.form}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder=" Enter the book title"
                    onChange={searchHandler}
                  />
                  <Button variant="outlined" onClick={submitHandler}>
                    <SearchIcon />
                  </Button>
                </form>

                {!!errorMsg && (
                  <Typography
                    color="red"
                    variant="subtitle1"
                    style={styles.error}
                  >
                    {errorMsg}
                  </Typography>
                )}
              </Box>
            </div>

            {recButton && books ? (
              <div style={styles.div}>
                <Button
                  fullWidth
                  onClick={recommendClick}
                  variant="outlined"
                  color="primary"
                  style={styles.button}
                >
                  Recommend
                </Button>
              </div>
            ) : (
              <Card style={styles.appbarCard}>
                <AppBar position="relative">
                  <CardContent style={styles.appbarContent}>
                    <Typography variant="subtitle12">
                      Search the books and chose recomanded
                    </Typography>
                  </CardContent>
                </AppBar>
              </Card>
            )}
          </Card>
        </AppBar>
      </>
      <Card style={styles.modalCard}>
        {recButton && books && <BookList books={books} />}

        {!!open && <BookModal open={open} setOpen={setOpen} book={book} />}
      </Card>
    </>
  );
};

export default HomePage;
