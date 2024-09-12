import { cardData } from "../../data/card";
import Card from "../../utils/Card";
import ResultAndSort from "./ResultAndSort";

function MainSpace() {
  return (
    <div>
      <ResultAndSort />
      <div className="grid grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

export default MainSpace;
