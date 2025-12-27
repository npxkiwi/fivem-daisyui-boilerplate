import { useState } from 'react';
import { isEnvBrowser } from './utils/misc';
import { useNuiEvent } from './hooks/useNuiEvents';
import { fetchNui } from './utils/fetchNui';

function App() {
  const [visible, setVisible] = useState(isEnvBrowser());

  useNuiEvent('setVisible', (data: { visible?: boolean }) => {
    setVisible(data.visible || false);
  });

  function handleHideModal() {
    setVisible(false);
    void fetchNui('exit');
  }
  return (
    <>
    {visible && (
      <div className='nui-wrapper w-screen h-screen flex justify-center items-center'>
        <div id="nui-content" className='w-1/2 h-1/2 bg-base-200 p-2'>
        <button className="btn" onClick={()=> handleHideModal()}>Default</button>
        </div>
      </div>
    )}
    </>
  )
}

export default App
