import toast from "react-hot-toast";

import Button from "../components/Button";

import "../styles/referral.css";

function Referral() {

  function copyReferral() {

    navigator.clipboard.writeText(
      "https://scailuckyloop.io/ref/POOJA001"
    );

    toast.success("Referral Link Copied");

  }

  return (

    <section className="referral-page container">

      <div className="referral-box">

        <h1>Referral Program</h1>

        <p>
          Invite your friends and earn bonus SCAI rewards for every successful referral.
        </p>

        <div className="referral-link">

          <input
            type="text"
            value="https://scailuckyloop.io/ref/POOJA001"
            readOnly
          />

          <Button
            text="Copy Link"
            onClick={copyReferral}
          />

        </div>

        <div className="referral-stats">

          <div>

            <h3>0</h3>

            <span>Total Referrals</span>

          </div>

          <div>

            <h3>0 SCAI</h3>

            <span>Total Rewards</span>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Referral;