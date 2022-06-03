import React from 'react';
import './App.css';
import MyConfig from 'config/MyConfig'
import SectionBarTitle from './components/SectionBarTitle/SectionBarTitle';
import { appConfig, getProfiles} from 'config/appConfig';
function App() {
  const profiles=getProfiles();
  console.log('profiles',profiles);
  
  return (
    <div className="App">
      {/* <SectionBarTitle title='Some Title'> */}
      <h1>APP-Foundation</h1>
         <MyConfig />

      {/* </SectionBarTitle> */}
         
    </div>
  );
}

export default App;
