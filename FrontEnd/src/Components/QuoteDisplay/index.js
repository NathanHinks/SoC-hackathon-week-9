import "./QuoteDisplay.css";

function QuoteDisplay({ data }) {
  return (
    <div className="quote-display">
      <h2 className="quote-title">Motivational Quote:</h2>
      <p className="quote">"{data.quote}"</p>
    </div>
  );
}

export default QuoteDisplay;
