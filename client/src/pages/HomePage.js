import Header from "../components/Header";
import Footer from "../components/Footer";
import GrandfaGrandma from '../images/grandfa_grandma.jpg';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <div className="welcome">
        <div>Պարավս եկալ մատաղ ինիմ</div>
        <div>#եկ_խաղանինք</div>
      </div>
      <div className="main">
        <div className="left-section">
          <div className="welcome-message">
            Տու միշտ գիդա վեր Դեդոն ու Բաբոն քեզ շատն սիրում, համ ել աշխարհքը ուրանցնա ինում վեր կյամս խաղանինք
          </div>
          <img
            src={GrandfaGrandma}
            alt="grandfa_grandma"
            className="grandfa-grandma-img"
          ></img>
        </div>
        <div className="right-section">
          <div className="question">
            Հինչը՞ս օզում խաղանինք․
          </div>
          <div className="game-types">
            <div className="game-name">մեր Արցախա բարբառը բացատրել</div>
            <div className="game-name">մեր Արցախա լյավ մարդկանց ճինանչիլ</div>
            <div className="game-name">մեր Արցախա հրաշք վայրերը ճինանչիլ</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
