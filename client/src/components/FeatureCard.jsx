import Card from "./Card";

function FeatureCard() {
  return (
    <section className="features">

      <Card
        icon="🎟️"
        title="Daily Lottery"
        text="Join transparent blockchain lottery draws every day."
      />

      <Card
        icon="👛"
        title="Wallet Connect"
        text="Securely connect MetaMask and manage SCAI rewards."
      />

      <Card
        icon="🤝"
        title="Referral Rewards"
        text="Invite friends and earn bonus SCAI reward coins."
      />

      <Card
        icon="🪙"
        title="SCAI Tokens"
        text="Convert your reward coins into SecureChain AI Tokens."
      />

    </section>
  );
}

export default FeatureCard;