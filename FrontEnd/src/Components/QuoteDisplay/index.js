import { useSelector } from "react-redux";
import "./QuoteDisplay.css";

const QuoteDisplay = () => {
  const {quote} = useSelector(state => state.suggestedSong)
  return (
    <div className="quote-display">
      <h2 className="quote-title">Motivational Quote:</h2>
      <p className="quote">"{quote}"</p>
    </div>
  );
}

export default QuoteDisplay;
