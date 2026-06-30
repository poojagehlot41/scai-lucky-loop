import "../styles/stats.css";

function StatsSection() {
  return (
    <section className="stats container">

      <div className="stat-card">
        <h2>25K+</h2>
        <p>Active Players</p>
      </div>

      <div className="stat-card">
        <h2>10K+</h2>
        <p>Lottery Draws</p>
      </div>

      <div className="stat-card">
        <h2>150K+</h2>
        <p>SCAI Rewards</p>
      </div>

      <div className="stat-card">
        <h2>99.9%</h2>
        <p>Secure Platform</p>
      </div>

    </section>
  );
}

export default StatsSection;