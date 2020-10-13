import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Meet a buddy, learn a language.",
      "Møt en venn lær et språk.",    
      "Incontrare un amico, imparare una lingua",
      "Träffa en vän, lära sig ett språk.",
      "Poznaj przyjaciela, naucz się języka.",
      "Møde en ven, lære et sprog.",
      "встретить друга, выучить язык.", 
      "Einen Freund treffen, eine Sprache lernen.",
      "Conocer a un amigo, aprender un idioma.",
      "Susitikti su draugu, išmokti kalbą."],
    typeSpeed: 60,
    loop: true,     
    backDelay: 800,
    fadeOut:true,
    fadeOutDelay: 500,    
  });
}

export { loadDynamicBannerText };