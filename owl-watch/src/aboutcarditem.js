import * as React from"https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from"https://cdn.skypack.dev/react-dom@17.0.1";
 
function AboutCardItem(props) {
   return (
       <div className="main">
           <div class="module-border-wrap">
               <div className="card">
                   <div className="card__body">
                       <h2 className="card__title">{props.title}</h2>
                       <h3 className="card_position">{props.position}</h3>
                       <img src={props.img} class="card__image" />
                       <p className="card__description">{props.description}</p>
                   </div>
               </div>
           </div>
       </div>
   );
 }
export default AboutCardItem;
 
ReactDOM.render(<AboutCardItem />,
document.getElementById('root'));
