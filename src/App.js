import React from 'react';
import data from './data';
import TekSoru from'./TekSoru';


function App() {
  const [sorular, sorularıAyarla] = React.useState(data);
    
  return (
    <main>

<div className='kapsayici'>
  <h3>questions and answers about login</h3>
  <section className='bilgi'>
    {sorular.map((soru) =>{
      return(
        <TekSoru key={soru.id}{ ...soru}/>
      );
    })}

  </section>


</div>

    </main>
    

  );
}

export default App;
