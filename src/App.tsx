import "./App.css";
import { ChatForm } from "./components/ChatForm";
import ImageCarousel from "./components/ImageCarousel";
import { HeaderComponent } from "./components/HeaderComponent";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

function App() {
  const [showHeader, setShowHeader] = useState(false); // Stan do kontrolowania widoczności HeaderComponent

  useEffect(() => {
    // Ustaw widoczność HeaderComponent po 4 sekundach
    const timer = setTimeout(() => {
      setShowHeader(true);
      console.log(showHeader);
    }, 4000);

    // Czyszczenie timera, aby uniknąć błędów
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Warunkowe renderowanie HeaderComponent */}
      {showHeader && <HeaderComponent />}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row-reverse" }, // Kolumna dla małych ekranów, rząd dla średnich i większych
          alignItems: "center",
          justifyContent: "space-between",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            flex: 1, // Równa szerokość dla komponentów w rzędzie
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: { xs: "60%", sm: "100%" }, // 50% wysokości dla małych ekranów
            width: { xs: "100%", sm: "30%" },
          }}
        >
          <ChatForm />
        </Box>
        <Box
          sx={{
            flex: 1, // Równa szerokość dla komponentów w rzędzie
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: { xs: "40%", sm: "100%" }, // 50% wysokości dla małych ekranów
          }}
        >
          <ImageCarousel />
        </Box>
      </Box>
    </>
  );
}

export default App;
