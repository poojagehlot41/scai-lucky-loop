import Card from "./Card";

function LotteryStats() {
  return (
    <section className="lottery-stats">

      <Card
        icon="🎟️"
        title="Ticket Price"
        text="10 SCAI per ticket"
      />

      <Card
        icon="🎫"
        title="Your Tickets"
        text="0 Active Tickets"
      />

      <Card
        icon="👥"
        title="Players"
        text="2,547 Participants"
      />

      <Card
        icon="🏆"
        title="Winning Chance"
        text="Fair & Transparent Draw"
      />

    </section>
  );
}

export default LotteryStats;