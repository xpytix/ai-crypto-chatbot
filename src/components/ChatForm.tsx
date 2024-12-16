import { useState } from "react";
import { Box, TextField, Button, Avatar, Card } from "@mui/material";
import image1 from "../assets/Timmi.png";
import chatSession from "../services/AIService";

import SendIcon from "@mui/icons-material/Send";

export const ChatForm = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { text: "H-H-Hello! How can I help you today-y-y?!", sender: "bot" },
    { text: "yyy when we break 1M?", sender: "user" },
    { text: "Idk, any other stupid question degen?", sender: "bot" },
  ]);

  const scrollToBottom = () => {
    // window.scrollTo(0, #);
  };

  const handleSendMessage = async () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { text: message, sender: "user" }]);
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: "Loading...", sender: "bot" },
      ]);
      setMessage(""); // Wyczyść pole po wysłaniu

      const resultText = await chatSession.sendMessage(message);
      console.log(resultText);

      const parsedResult = JSON.parse(resultText.response.text());

      setChatMessages((prevMessages) => prevMessages.slice(0, -1));
      if (parsedResult.response) {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { text: parsedResult.response, sender: "bot" },
        ]);
      } else {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { text: "Idk, just hold $TIMMI.", sender: "bot" },
        ]);
      }

      scrollToBottom(); // Przewiń na dół po odpowiedzi bota
    }
  };

  // const handleSendMessage = async () => {
  //   try {
  //     setLoading(true);

  //     console.log(message[length - 1]);

  //     const result = await chatSession.sendMessage(message[length - 1]);

  //     const resultText = await result.response.text();
  //     // const parsedResult = JSON.parse(resultText);

  //     setChatMessages((prevMessages) => [
  //       ...prevMessages,
  //       { text: result.response.text(), sender: "bot" },
  //     ]);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <Box
      sx={{
        height: "60vh",
        width: "80vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 4,
        m: { xs: 0, sm: 4, md: 9 },
      }}
    >
      {/* Kontener wiadomości */}
      <Card
        elevation={2}
        sx={{
          backgroundColor: "white",
          borderRadius: "60px",
          width: "90%",
          height: "60%",
          overflowY: "auto",
          padding: 2.5,
          mb: 2,
        }}
      >
        {/* Dynamicznie generowane wiadomości */}
        {chatMessages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
              mb: 1,
            }}
          >
            {msg.sender === "bot" && (
              <Avatar
                alt="Bot Avatar"
                src={image1}
                sx={{ width: 40, height: 40, mr: 1 }}
              />
            )}
            <Box
              sx={{
                backgroundColor: msg.sender === "user" ? "#6C7FCA" : "#F4B63D",
                color: "black",
                borderRadius: 2,
                padding: "8px 12px",
                maxWidth: "70%",
                textAlign: "left",
              }}
            >
              {msg.text}
            </Box>
            {msg.sender === "user" && (
              <Avatar
                alt="User Avatar"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 40, height: 40, ml: 1 }}
              />
            )}
          </Box>
        ))}
      </Card>

      {/* Formularz do wysyłania wiadomości */}
      {
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: 1,
            alignItems: "center",
          }}
        >
          <TextField
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            size="small"
            InputProps={{
              sx: {
                backgroundColor: "white",
                borderRadius: "8px",
              },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            endIcon={<SendIcon />}
            onClick={handleSendMessage}
            sx={{
              height: "100%",
              backgroundColor: "#6C7FCA",
              "&:hover": {
                backgroundColor: "#5A6AB7",
              },
              borderRadius: 2,
            }}
          >
            Send
          </Button>
        </Box>
      }
    </Box>
  );
};
