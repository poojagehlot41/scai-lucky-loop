import { Link } from "react-router-dom";

function NotFound() {

  return (

    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <div
        style={{
          textAlign: "center",
        }}
      >

        <h1
          style={{
            fontSize: "80px",
            marginBottom: "20px",
          }}
        >
          404
        </h1>

        <h2
          style={{
            marginBottom: "20px",
          }}
        >
          Page Not Found
        </h2>

        <Link
          to="/"
          style={{
            textDecoration: "none",
            background: "#7B61FF",
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "10px",
            fontWeight: "600",
          }}
        >
          Back To Home
        </Link>

      </div>

    </section>

  );

}

export default NotFound;