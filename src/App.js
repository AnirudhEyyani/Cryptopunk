import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
// import {useState , useEffect } from 'react'
// import axios from 'axios'

function App() {
  // const[punkListData, setPunkListData] = useState{[]}

  // useEffect(() => {
  //   const getMyNfts = async () => {
  //      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?assets_contract=0x467F9F0f6BC0591a683BB5A392c8A55ace994c98order_direction=asc') 
  //       console.log(openseaData.data.assets)
  //     }
  // }, [])

  return (
  <div className='app'>
    <Header/>
    <CollectionCard 
      id={0}
      name={'RED CP'}
      traits={[{'value' : 7}]}
      image='https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu'
      />
  </div> 
  )
}

export default App;
