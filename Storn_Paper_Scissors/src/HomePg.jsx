import { useState } from "react";
import "./HomePg.css";
import img1 from "./Images/stoneComputer.png";
import img2 from "./Images/stonePlayer.png";
import img3 from "./Images/paperComputer.png";
import img4 from "./Images/paperPlayer.png";
import img5 from "./Images/scissorsComputer.png";
import img6 from "./Images/scissorsPlayer.png";
import { GiHearts } from "react-icons/gi";
import { GiStoneTower } from "react-icons/gi";
import { GiStabbedNote } from "react-icons/gi";
import { GiKnifeThrust } from "react-icons/gi";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
function HomePage() {
  const [PlayerMove, setPlayerMove] = useState("PlayerMoveStone");
  const [ComputerMove, setComputerMove] = useState("ComputerMoveStone");
  const [playerScore, setplayerScore] = useState("5");
  const [ComputerScore, setComputerScore] = useState("5");
  const [result, setresult] = useState("");
  const [confetti, setConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const images = {
    PlayerMoveStone: img2,
    PlayerMovePaper: img4,
    PlayerMoveScissors: img6,
    ComputerMoveStone: img1,
    ComputerMovePaper: img3,
    ComputerMoveScissors: img5,
  };
  const HandClick = (PlayerMove) => {
    setPlayerMove(PlayerMove);
    const randomMove = Math.random();
    let ComputerMove = "";
    if (randomMove >= 0 && randomMove < 1 / 3) {
      ComputerMove = "ComputerMoveStone";
    } else if (randomMove >= 1 / 3 && randomMove < 2 / 3) {
      ComputerMove = "ComputerMovePaper";
    } else {
      ComputerMove = "ComputerMoveScissors";
    }
    setComputerMove(ComputerMove);

    let result = "";
    if (
      (PlayerMove === "PlayerMoveStone" &&
        ComputerMove === "ComputerMoveStone") ||
      (PlayerMove === "PlayerMovePaper" &&
        ComputerMove === "ComputerMovePaper") ||
      (PlayerMove === "PlayerMoveScissors" &&
        ComputerMove === "ComputerMoveScissors")
    ) {
      result = "Tie";
    } else if (
      (PlayerMove === "PlayerMoveStone" &&
        ComputerMove === "ComputerMoveScissors") ||
      (PlayerMove === "PlayerMovePaper" &&
        ComputerMove === "ComputerMoveStone") ||
      (PlayerMove === "PlayerMoveScissors" &&
        ComputerMove === "ComputerMovePaper")
    ) {
      result = "You Win";
      setConfetti(true);
      setComputerScore(ComputerScore - 1);
    } else {
      result = "You Lose";
      setplayerScore(playerScore - 1);
    }
    setresult(result);
    if (confetti) {
      setTimeout(() => setConfetti(false), 1000);
    }
  };

  return (
    <div className="Game">
      {confetti && <Confetti wind={0} width={width} height={height} />}{" "}
      <h1>Stone Paper Scissors</h1>
      <div className="display row">
        {" "}
        <div className="display2 " id="Display2">
          <img id="img1" src={images[ComputerMove]} alt="" />
        </div>
        <h2>{result}</h2>
        <div className="display1 " id="Display1">
          <img id="img2" src={images[PlayerMove]} alt="" />
        </div>
      </div>
      <div className="Buttons">
        <button type="" onClick={() => HandClick("PlayerMoveStone")}>
          <GiStoneTower />
        </button>
        <button type="" onClick={() => HandClick("PlayerMovePaper")}>
          <GiStabbedNote />{" "}
        </button>
        <button type="" onClick={() => HandClick("PlayerMoveScissors")}>
          <GiKnifeThrust />
        </button>
      </div>
      <div className="ScoreBoardHeart">
        {" "}
        <GiHearts /> <GiHearts />
      </div>
      <div className="ScoreBoard">
        <h3 id="">Computer Score </h3>
        <h3 id="">Your Score</h3>
      </div>
      <div className="ScoreBoard">
        <h3 id="ComputerScore">{ComputerScore}</h3>
        <h3 id="PlayerScore">{playerScore}</h3>
      </div>
    </div>
  );
}

export default HomePage;
