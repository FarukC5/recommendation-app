import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

const BookCard = ({ books, setOpen, setBook }) => {
  const detailsClick = () => {
    setOpen(true);
    setBook(books);
  };

  const styles = {
    card: {
      border: "none",
      boxShadow: "none",
      height: "100%",
      maxWidth: "fit-content",
    },
    content: {
      height: "180px",
    },
  };

  return (
    <Card style={styles.card}>
      <CardContent>
        <img
          component="img"
          height="160px"
          src={books?.volumeInfo?.imageLinks?.thumbnail}
          alt=""
        />
        <CardContent style={styles.content}>
          <Typography gutterBottom variant="h5" component="div">
            {books.volumeInfo.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {books?.searchInfo?.textSnippet}
          </Typography>
        </CardContent>
      </CardContent>
      <CardActions>
        <Button onClick={detailsClick} size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookCard;
