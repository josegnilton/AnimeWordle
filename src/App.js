import React, { useState, useEffect } from "react";
import { Input, Button, Layout, Menu } from "antd";
import "./assets/css/WordleGame.css"; // import the CSS file
import "./App.css";

const { Header, Footer } = Layout;

const WordleGame = () => {
  const wordsList = [
    {
      word: "Naruto",
      quote:
        "A ninja must always strive to be the best, that's what makes us strong",
      anime: "Naruto",
      date: "11/02/2003",
    },
    {
      word: "Sasuke",
      quote: "I will never go back to being weak again",
      anime: "Naruto",
      date: "11/02/2003",
    },
    {
      word: "Goku",
      quote:
        "I am the hope of the universe. I am the answer to all living things that cry out for peace",
      anime: "Dragon Ball Z",
      date: "26/02/1989",
    },
    {
      word: "Luffy",
      quote: "I'm gonna be the Pirate King!",
      anime: "One Piece",
      date: "19/07/1999",
    },
    {
      word: "Ichigo",
      quote: "I'll take a potato chip... and eat it!",
      anime: "Bleach",
      date: "05/10/2004",
    },
  ];
  const [wordToGuess, setWordToGuess] = useState({});
  const [guess, setGuess] = useState("");
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setWordToGuess(wordsList[Math.floor(Math.random() * wordsList.length)]);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (guess.toLowerCase() === wordToGuess.word.toLowerCase()) {
      setMessage("Correct!");
    } else {
      setWrongAttempts(wrongAttempts + 1);
      setMessage("Incorrect!");
    }
    if (wrongAttempts === 1) {
      setMessage(
        `Dica: A data que o personagem apareceu pela primeira vez foi ${wordToGuess.date}`
      );
    }
    if (wrongAttempts === 4) {
      setMessage(
        `Dica: O personagem já falou essa frase. "${wordToGuess.quote}"`
      );
    }
    if (wrongAttempts === 6) {
      setMessage(`Dica: É do anime ${wordToGuess.anime}`);
    }
  };

  const handleReset = () => {
    setWrongAttempts(0);
    setMessage("");
    setWordToGuess(wordsList[Math.floor(Math.random() * wordsList.length)]);
  };

  return (
    <Layout>
      <Header style={{ backgroundColor: "#3f3a3b" }}>
        <div className="logo">Guess the Anime Character</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Game</Menu.Item>
          <Menu.Item key="2">How to Play</Menu.Item>
          <Menu.Item key="3">Creators</Menu.Item>
        </Menu>
      </Header>
      <div style={{ backgroundColor: "#504a4b" }}>
        <div className="game-container">
          <form className="game-form" onSubmit={handleSubmit}>
            <Input
              className="game-input"
              placeholder="Enter the character name"
              value={guess}
              onChange={(event) => setGuess(event.target.value)}
            />
            <Button className="game-button" type="primary" htmlType="submit">
              Submit
            </Button>
          </form>
          <p>{message}</p>
          <Button className="game-button" onClick={handleReset}>
            Reset
          </Button>
        </div>
        <Footer>
          <div className="footer-content">
            <p>Copyright © 2022 Wordle Game</p>
            <p>All rights reserved.</p>
          </div>
        </Footer>
      </div>
    </Layout>
  );
};

export default WordleGame;
