import "../styles/button.css";

function Button({ text, type, onClick }) {

  return (

    <button
      className={
        type === "secondary"
          ? "secondary-btn"
          : "primary-btn"
      }
      onClick={onClick}
    >

      {text}

    </button>

  );

}

export default Button;