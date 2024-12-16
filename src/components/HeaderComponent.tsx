import React, { useState } from "react";
import { Box, Tooltip, Typography } from "@mui/material";

interface HeaderComponentProps {
  isDisplay?: boolean;
}

export const HeaderComponent: React.FC<HeaderComponentProps> = ({
  isDisplay,
}) => {
  const message = [
    "5j8PkxaUn882f8SMvWZwC3uh8r82TWCEcSgE3NyKh9w7",
    "You like it? Donate me some $Timmi",
  ];

  const [currentMessage, setCurrentMessage] = useState(false);

  const handleClick = () => {
    setCurrentMessage(!currentMessage);
    console.log(isDisplay);

    // Kopiowanie drugiej wiadomości po kliknięciu
    if (!currentMessage) {
      navigator.clipboard
        .writeText(message[0])
        .then(() => {
          console.log("Copied to clipboard:", message[0]);
        })
        .catch((err) => {
          console.error("Failed to copy text:", err);
        });
    }
  };

  return (
    <Tooltip title="Copy">
      <Box
        onClick={handleClick}
        sx={{
          top: 0,
          position: "fixed",
          width: "100vw",
          height: "60px",
          backgroundColor: "#6380C8",
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          whiteSpace: "normal", // Poprawka: wyłącz obcinanie tekstu
          overflow: "hidden",
          transition: "max-height 5.5s ease-in-out",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
          mb: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "white",
            textAlign: "center",
            maxWidth: "100%", // Tekst nie wyjdzie poza kontener
            overflowWrap: "break-word", // Zawijanie długiego tekstu
          }}
        >
          {currentMessage ? message[0] : message[1]}
        </Typography>
      </Box>
    </Tooltip>
  );
};
