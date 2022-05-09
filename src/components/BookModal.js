import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Link,
} from "@mui/material";

const BookModal = ({ setOpen, book }) => {
  const styles = {
    card: {
      textAlign: "center",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "fit-content",
      margin: "10px",
      boxShadow: "0px 0px 5px 0px ",
    },

    typograpfy: {
      cursor: "pointer",
    },
  };

  return (
    <div>
      <Card style={styles.card}>
        <CardContent>
          <img
            height="250"
            src={book?.volumeInfo?.imageLinks?.thumbnail}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Title: {book.volumeInfo.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Publisher: {book.volumeInfo.publisher}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Author: {book.volumeInfo.authors}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Page count: {book.volumeInfo.pageCount}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Average rating: {book.volumeInfo.averageRating}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Ratings count: {book.volumeInfo.ratingsCount}
            </Typography>
            <Link href={book.volumeInfo.canonicalVolumeLink}>
              <Typography
                style={styles.typograpfy}
                gutterBottom
                variant="h5"
                component="div"
              >
                Read this book online
              </Typography>
            </Link>
          </CardContent>
        </CardContent>
        <CardActions>
          <Button onClick={() => setOpen(false)} size="small" color="primary">
            Close
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default BookModal;
