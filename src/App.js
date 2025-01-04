import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import MainContent from './component/MainContent';
import info from "./info"

function App() {
  const cardElements = info.map((card)=>{
    return(
      <MainContent
        key={card.id}
        img={card.img}
        title={card.title}
        text={card.text}
      />
    )
  })
  return (
    <>
      <Header/>
      <main>{cardElements}</main>
      
      <Footer/>
    </>

  );
}

export default App;
