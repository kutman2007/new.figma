import React from "react";
import "./style.css"
import f from "./v.png"
export const Man=()=>{
  return(
    <div>
        <div className="cub">
        <div className="cub1"><span className="a"> PEOPLE</span></div>
        <div className="cub2"><span className="a">TAG 46</span></div>
        <div className="cub3"><span className="a">TAG 44</span></div>
        </div>
    <div className="Count">
        
        <div className="one">
           
        <span>ST PETER IN DER AU</span>
        </div>
    
        <div className="two">
            <span>Tulln</span>
        </div>
       
        <div className="three">
            <span>Krems</span>
        </div>
    </div>
    <div className="qwer">
    <p>
        Woher kommen unsere <br />
        Lebensmittel? Ein Besuch <br />
         beim Zurück zum Ursprung <br />
       Bauern - Teil 
       <p className="d">
       „Das ist die Helena, die Pia, die Muli und da <br />
        drüben steht die Sissi“, Alois Lainerberger <br />
         zeigt mir stolz seine Kühe. Alle 17 Bio- <br />
          Rinder auf seinem Hof haben einen Namen: <br />
           „manchmal sind sie gar nicht so leicht <br />
            auseinander zu halten“, erklärt der Bio- <br />
             Bauer. Gemeinsam mit seiner Frau Felicitas <br />
              betreibt er den Hof in St. Peter …
       </p>
       <p className="w"> weiterlesen  <img src={f} alt="" /></p>
        </p>
        <p>
        Etappe 31+32: Krems <br /> 
        - Sachsendorf - Tulln
        <p className="d">
        Zu Beginn hatte ich noch keine Ahnung, <br />
         was mich im Zuge der Wanderei erwartet. <br />
          Jetzt weiß ich: die letzten sieben Wochen <br />
           waren eines der größten Abenteuer, das ich <br /> 
           in meinen 26 Jahren erleben durfte. Man <br />
            kann den Vergleich mit einem bekannten <br />
             Hollywoodfilm schon ziehen, das ganze <br />
              Projekt war wie eine Schachtel Pralinen. <br />
               Manche schmecken ungemein …
        </p>
        <p className="w">weiterlesen  <img src={f} alt="" /></p>
        </p>
        <p>
        Etappe 30: Spitz an der <br />
         Donau nach Krems
         <p className="d">
         Hier in Krems bin ich ja fast in einer <br />
          Metropole gelandet, zumindest dieses <br />
           Wochenende tut sich einiges. Ich bin in <br />
            einer wahnsinnig netten WG mitten <br />
             im Zentrum untergekommen, zwei Stockwerke <br />
              unter mir tobt gerade das Kremser <br />
               Marillenfest. Die Blasmusikkapelle <br />
                marschiert durch die Straßen. Tausende <br />
                 Besucher wälzen sich durch die Innenstadt <br />
                  und feiern alles zum Thema …
         </p>
         <p className="w">weiterlesen  <img src={f} alt="" /></p>
        </p>
        </div>
    </div>
  )
}