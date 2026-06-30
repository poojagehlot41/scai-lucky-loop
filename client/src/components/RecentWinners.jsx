import "../styles/recentwinners.css";

function RecentWinners() {

  return (

    <section className="recent-winners container">

      <div className="winner-heading">

        <span>Latest Winners</span>

        <h2>Recent Winners</h2>

        <p>
          Every winner is selected transparently through secure blockchain smart contracts.
        </p>

      </div>

      <div className="winner-list">

        <div className="winner-card">

          <h3>0x8A4F...29D1</h3>

          <p>Won 120,000 SCAI</p>

        </div>

        <div className="winner-card">

          <h3>0xF92B...1A83</h3>

          <p>Won 85,000 SCAI</p>

        </div>

        <div className="winner-card">

          <h3>0x3DE7...8BC4</h3>

          <p>Won 50,000 SCAI</p>

        </div>

      </div>

    </section>

  );

}

export default RecentWinners;