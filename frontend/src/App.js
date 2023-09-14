
import Popup from './components/popup';
import { useState } from 'react';


function App() {
  const [btnPopup, setBtnpopup] = useState(false)
  return (
    <div>
    <main>
    <h1>Shopping </h1>
    <button onClick={() => setBtnpopup(true)}> More Info</button>
</main>
<Popup trigger={btnPopup} setTrigger={setBtnpopup}>
<h3>My Popup</h3>
 </Popup>
 </div>
  );
}

export default App;
