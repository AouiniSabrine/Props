
import './App.css';
import FullnameComp from './profile/ProfileComp/FullName';
import BioComp from './profile/ProfileComp/Bio';
import ProfessionComp from './profile/ProfileComp/Profession';
import AlertComp from './profile/ProfileComp/Alert';




  
export default function App() {
  const myFunction = (MyName) => { 
    alert (`Hello to  ${MyName} 's world`);
  }
  
  return (
    <div className="App">
       <FullnameComp name = "Coco Chanel">
        <img src="./Coco.jpg"/>
        </FullnameComp>
       <ProfessionComp profession = " Fashion Designer"/>
       <BioComp bio ="Coco Chanel, byname of Gabrielle Bonheur Chanel, (born August 19, 1883, Saumur, France
       died January 10, 1971, Paris), French fashion designer who ruled Parisian haute couture for almost six decades.
        Her elegantly casual designs inspired women of fashion to abandon the complicated, 
        uncomfortable clothes such as petticoats and corsets that were prevalent in 19th-century dress. Among her now-classic innovations 
       were the Chanel suit, the quilted purse, costume jewelry, and the “little black dress.”" />
       <AlertComp myFunction = {myFunction} name={"Coco Chanel"}/>
     </div>
  );
}


