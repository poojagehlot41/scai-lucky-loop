import { useEffect, useState } from "react";
import { useWallet } from "../context/WalletContext";

import Button from "../components/Button";
import LotteryStats from "../components/LotteryStats";
import RecentWinners from "../components/RecentWinners";
import BuyTicket from "../components/BuyTicket";

import "../styles/lottery.css";

function Lottery() {

  const { isConnected } = useWallet();

  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 25,
    seconds: 40,
  });

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {

          seconds--;

        } else {

          seconds = 59;

          if (minutes > 0) {

            minutes--;

          } else {

            minutes = 59;

            if (hours > 0) {

              hours--;

            }

          }

        }

        return { hours, minutes, seconds };

      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  function handleBuyTicket() {

    if (!isConnected) {

      alert("Please connect your wallet first.");

      return;

    }

    document
      .querySelector(".buy-ticket")
      ?.scrollIntoView({
        behavior: "smooth",
      });

  }

  return (

    <div className="lottery-page container">

      <div className="lottery-header">

        <span className="page-badge">
          EtherAuthority
        </span>

        <h1>Daily Lottery</h1>

        <p>
          Join today's blockchain lottery draw and win exciting SCAI rewards.
        </p>

      </div>

      <div className="jackpot-card">

        <h3>Today's Jackpot</h3>

        <h2>250,000 SCAI</h2>

        <p>Next Draw Starts In</p>

        <div className="countdown">

          <div>

            <span>{timeLeft.hours}</span>

            <small>Hours</small>

          </div>

          <div>

            <span>{timeLeft.minutes}</span>

            <small>Minutes</small>

          </div>

          <div>

            <span>{timeLeft.seconds}</span>

            <small>Seconds</small>

          </div>

        </div>

        <Button
          text="Buy Ticket"
          onClick={handleBuyTicket}
        />

      </div>

      <LotteryStats />

      <RecentWinners />

      <BuyTicket />

    </div>

  );

}

export default Lottery;