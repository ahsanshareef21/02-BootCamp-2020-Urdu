import React from 'react'
import Dinner from './dinner';

 function App() {
   return(
        <div className="App">

       <Dinner dishName = "Nihari"  sweetDish= "Jalabee"/>

       <hr/>

        <Dinner dishName = "Allo"  sweetDish= "Eggs"/>

        <hr/>

         <Dinner dishName = "Biryani"  sweetDish= "Suger"/>
         
  </div>
  
  );
}
export default App;
