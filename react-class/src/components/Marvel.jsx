import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import reactGif from "../assets/reactt.gif";
import errorImg from "../assets/some.gif";

const Marvel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const dataFetch = () => {
    axios

      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => setData(response.data.message))
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Random Dog Image</h1>

      {loading && <img width={500} height={400} src={reactGif} alt="" />}

      {error && <img src={errorImg} alt="" />}

      {!loading && !error && (
        <>
          <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 3 }}>
            <CardMedia
              component="img"
              height="300"
              image={data}
              alt="Random Dog"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Random Dog Image
              </Typography>
            </CardContent>
          </Card>

          <Button variant="contained" color="primary" onClick={dataFetch}>
            Click Me
          </Button>
        </>
      )}
    </div>
  );
};

export default Marvel;
