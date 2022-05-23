import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Link,
  ButtonGroup,
  Dialog,
  DialogActions,
} from "@mui/material";
import noimage from "../images/noimage.png";

const BookModal = ({ setOpen, book, open }) => {
  const styles = {
    card: {
      textAlign: "center",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "fit-content",
      boxShadow: "0px 0px 5px 0px ",
    },

    typograpfy: {
      cursor: "pointer",
    },
    closeButton: {
      margin: "5px",
      textTransform: "none",
    },
  };

  return (
    <div>
      <Dialog open={open}>
        <DialogActions>
          <Card style={styles.card}>
            <CardContent>
              <img
                height="250"
                src={book?.volumeInfo?.imageLinks?.thumbnail || noimage}
                alt=""
              />

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  color="primary"
                  component="div"
                >
                  {book.volumeInfo.title || "no info"}
                </Typography>

                <Typography gutterBottom variant="h5" component="div">
                  {book.volumeInfo.authors || "no author"}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Page count: {book.volumeInfo.pageCount || "no info"}
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

            <ButtonGroup variant="contained" fullWidth color="primary">
              <Button
                style={styles.closeButton}
                onClick={() => setOpen(false)}
               // variant="outlined"
                variant="outlined"
                color="primary"
                size="big"
              >
                Close
              </Button>
            </ButtonGroup>
          </Card>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BookModal;
