import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { slides } from './data';
import 'yet-another-react-lightbox/styles.css';
import { Captions,Fullscreen,Zoom } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css'

function App(){
  const[open,setOpen]=useState<boolean>(false);
  return (
    <>
    <button onClick={()=>setOpen(true)}>Open Menu</button>
    
    <Lightbox 
    plugins ={[Captions,Fullscreen,Zoom]}
    captions={{
      showToggle:true,
      descriptionTextAlign:'end',
    }}
    open={open} 
    slides={slides} 
    close ={()=> setOpen(false)}/>
    </>
    
  );
}
export default App;