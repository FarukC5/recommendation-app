import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import "../index.css";
import noimage from "../images/noimage.png";

const BookCard = ({ books }) => {
  const [openDetails, setOpenDetails] = useState(false);

  const [change, setChange] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", () => {
      setOpenDetails(false);
      setChange(false);
    });
  });

  const detailsClick = () => {
    setOpenDetails(true);
    setChange(true);
  };

  const styles = {
    card: {
      border: "none",
      boxShadow: "none",
      height: "100%",
      width: "100%",
      overflowX: "auto",
    },
    content: {
      padding: "15px",
      margin: "0",
      maxWidth: "100%",
      height: "320px",
      overflowX: "auto",
    },

    description: {
      overflowX: "auto",
    },

    detailsCard: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },

    detailsCard2: {
      position: "absolute",
      marginTop: "-320px",
    },

    cardAction: {
      background: "#cef8cd",

      width: "fit-content",
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    span: {
      cursor: "pointer",
      color: "black",
    },
    detailsButton: {
      textTransform: "none",
    },
  };

  return (
    <>
      <>
        <Card style={styles.card}>
          <CardContent>
            <img
              component="img"
              height="160px"
              src={books?.volumeInfo?.imageLinks?.thumbnail || noimage}
              alt=""
            />

            <CardContent style={styles.content}>
              <Typography gutterBottom variant="h5" component="div">
                {books.volumeInfo.title || "no title"}
              </Typography>
              &nbsp;
              <Typography variant="h5" color="text.secondary">
                {books.volumeInfo.authors || "no author"}
              </Typography>
              &nbsp;
              <>
                {!openMore && books ? (
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    id="description"
                    style={styles.description}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          books?.searchInfo?.textSnippet

                            .split(" ")
                            .slice(0, 10)
                            .join(" ") || "no description",
                      }}
                    />

                    <span style={styles.span} onClick={() => setOpenMore(true)}>
                      ...
                    </span>
                  </Typography>
                ) : (
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    id="description"
                    style={styles.description}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          books?.searchInfo?.textSnippet || "no description",
                      }}
                    />

                    <span
                      style={styles.span}
                      onClick={() => setOpenMore(false)}
                    >
                      &nbsp; less
                    </span>
                  </Typography>
                )}
              </>
            </CardContent>
          </CardContent>

          <CardActions>
            <Button
              fullWidth
              onClick={detailsClick}
              variant="outlined"
              color="primary"
              style={styles.detailsButton}
            >
              Details
            </Button>
          </CardActions>
        </Card>
      </>

      <>
        <Card style={styles.detailsCard}>
          <Card style={styles.detailsCard2}>
            {openDetails ? (
              <CardActions style={styles.cardAction}>
                <CardContent style={styles.cardContent}>
                  <Typography gutterBottom variant="h5" component="div">
                    Publisher: {books.volumeInfo.publisher || "no info"}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Page count: {books.volumeInfo.pageCount || "no info"}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Average rating:{" "}
                    {books.volumeInfo.averageRating || "no info"}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Ratings count: {books.volumeInfo.ratingsCount || "no info"}
                  </Typography>
                </CardContent>
              </CardActions>
            ) : null}
          </Card>
        </Card>
      </>
    </>
  );
};

export default BookCard;

//asdasdasdasdasd
