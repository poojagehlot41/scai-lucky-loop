import { useState } from "react";
import toast from "react-hot-toast";

import Button from "./Button";
import { useWallet } from "../context/WalletContext";

import "../styles/buyticket.css";

function BuyTicket() {

  const [quantity, setQuantity] = useState(1);

  const { isConnected } = useWallet();

  function handleBuyTicket() {

    if (!isConnected) {

      toast.error("Please connect wallet first");

      return;

    }

    if (quantity <= 0) {

      toast.error("Enter valid quantity");

      return;

    }

    toast.success(`Successfully purchased ${quantity} ticket(s)`);

  }

  return (

    <section className="buy-ticket container">

      <h2>Buy Lottery Ticket</h2>

      <div className="ticket-box">

        <div className="ticket-info">

          <h3>Ticket Price</h3>

          <p>10 SCAI</p>

        </div>

        <div className="ticket-info">

          <h3>Your Balance</h3>

          <p>0 SCAI</p>

        </div>

        <div className="ticket-info">

          <h3>Quantity</h3>

          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

        </div>

        <Button
          text="Buy Ticket"
          onClick={handleBuyTicket}
        />

      </div>

    </section>

  );

}

export default BuyTicket;