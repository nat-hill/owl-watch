import * as React from"https://cdn.skypack.dev/react@17.0.1";
import './aboutcards.css';
import CardItem from './aboutcarditem';
 
function Cards() {
   return (
       <div className="wrapper">
           <div class="about">
               <div className="about-border-wrap">
                   <div className="about__body">
                       <h1>
                       Meet the Team
                       </h1>
                   </div>
               </div>
           </div>
           <div className="grid1">
               <CardItem
               title="Nat Hill"
               description="Hello! I'm Nat -- a student at Rice University studying computer science & math. I'm from Brooklyn, NY -- and one of the mentors on this project. In my free time, I enjoy alternative rock, building things, and twitter."
               img="/profile_images/Nat Hill.jpg"
               position="Mentor | Jones" />
               <CardItem
               title="Jasmine Lee"
               description="Jasmine is a tech lead for the OSA Team Productivity 2 group and have been part of RiceApps for the past two years and a summer! She’s a junior from Will Rice majoring in Computer Science and minoring in Statistics. She’s from Chapel Hill, North Carolina and loves beaches, boba, and watching interesting movies. "
               img="/profile_images/Jasmine.jpeg"
               position="Mentor | Will Rice"/>
               <CardItem
               title="Michael Ngo"
               description="Michael is a sophomore from Wiess College majoring in Computer Science. He is from Dallas, Texas, and this is his first RiceApps project. Some of his hobbies include soccer, video games, and starting hobbies that he has no intentions of carrying on (e.g., harmonica, drums, skateboarding)."
               img="/profile_images/Michael.png"
               position="Mentee | Wiess"/>
               <CardItem
               title="Zarek Lu"
               description="Zarek is a sophomore from Hanszen who is majoring in Computer Science. Originally from Austin, Texas, he enjoys biking, gaming and playing sports in his free time."
               img="/profile_images/Zarek2.png"
               position="Mentee | Hanszen"/>
           </div>
           <div className="grid2">
               <CardItem
               title="Annie Ribordy"
               description="Annie is a sophomore from Baker College double majoring in Computer Science and Business. She is from Glenview, Illinois (a suburb of Chicago) and this is her first RiceApps project. She enjoys biking, reading, cooking and watching sports in her free time."
               img="/profile_images/Annie Picture.jpg"
               position="Mentee | Baker"/>
               <CardItem
               title="Liam Ruiz-Steblein"
               description="Liam is a sophomore majoring in Computer Science and minoring in Data Science. Hailing from Fort Worth, Texas, he enjoys lifting, biking and watching shows/movies."
               img="/profile_images/Liam.jpeg"
               position="Mentee | Sid Richardson"/>
               <CardItem
               title="Tom Vincent"
               description="Tom is a sophomore from Martel College majoring in Computer Science and minoring in Math. He is a native Houstonian and is also on the Men's Baseball Team. This is his first RiceApps project. He spends his free time hiking, learning languages, and swimming."
               img="/profile_images/Tom.jpg"
               position="Mentee | Martel"/>
               <CardItem
               title="Dingding Ye"
               description="Dingding is a sophomore from Jones College majoring in Electrical and Computer Engineering and pursuing a certificate in Spanish. She is from Lawrence, Kansas, and this is her first RiceApps project. She tends to visit coffee shops (Agora and Siphon are two of the best!), sneeze due to allergies while geocaching or biking, and overestimate her spice tolerance when eating her favorite foods."
               img="/profile_images/Dingding.jpg"
               position="Mentee | Jones"/>
 
           </div>
       </div>
     );
}
  export default Cards;
