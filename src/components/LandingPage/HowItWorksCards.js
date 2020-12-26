import HowItWorks from "./HowItWorks";
import question from "../../assets/question.png";
import wallet from "../../assets/wallet.png";
import gift from "../../assets/gift.png";

function HowItWorksCards() {
  return (
    <div className="how-it-works-cards">
      <HowItWorks description="Select your Secret Santa" cardImage={question} />
      <HowItWorks description="Select your Budget" cardImage={wallet} />
      <HowItWorks
        description="See the collection of gifts we selected for you"
        cardImage={gift}
      />
    </div>
  );
}

export default HowItWorksCards;
