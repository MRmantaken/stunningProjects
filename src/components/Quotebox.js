import React , {useState} from 'react';


const Quotebox = () => {
  const quoteBoxStyles ={
    display: 'flex' ,
    justifyContent: 'center' ,
    alignItems: "center",
    borderStyle: 'solid',
    height :'300px',
    width :'600px',
    borderRadius:'30px',
    backgroundColor: "#74d4ec"
  };
    const quotePosi = {
      paddingBottom: '100px',
    };

    const buttonPosi ={
      display: 'flex'
    , justifyContent: 'bottom',
    alignItems: 'bottom',
    }
  ;

  const quotes = [
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In three words, I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky"
  ];
  
  const [quote , setQuote] =useState(quotes[1]);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };;
  
  return (
    <div className='quotebox' style={quoteBoxStyles}>
      <div className='quoteDisplay' style={quotePosi}>{quote}</div>
      <button className='newQuoteButton' style={buttonPosi} onClick={handleButtonClick}>Random Quote</button>
      
    </div>
  );
};

export default Quotebox;
