import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import image1 from "../assets/Timmi.png";
import image2 from "../assets/Timmi2.png";
import image3 from "../assets/Timmi3.png";
import image4 from "../assets/Timmi4.png";

const images = [image1, image2, image3, image4];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 500); // Opóźnienie animacji przed zmianą zdjęcia
    }, 1000);

    return () => clearInterval(interval); // Czyszczenie interwału po odmontowaniu komponentu
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        height: { xs: "auto" },
        zIndex: -9999,
        backgroundColor: "#F4B63D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        sx={{
          maxWidth: "100%",
          height: { xs: "auto", sm: "400px", md: "800px" },
        }}
      />
    </Box>
  );
};

export default ImageCarousel;
