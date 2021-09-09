import Header from './components/Header/Header.js';
import Layout from './components/Layout/Layout.js';
import Footer from './components/Footer/Footer.js';
import bgLayout1 from './images/image-bg-layout1.jpg';
import bgLayout3 from './images/image-bg-layout3.jpg';

function App() {
  return (
    <div className="App">
      <Header 
        title="This is header title" 
        descr="This is header description..."
      />
      <Layout 
        title="This is layout1 title" 
        descr="This is layout1 description..."
        urlBg={bgLayout1}
      />
      <Layout
        title="This is layout2 title" 
        descr="This is layout2 description..." 
        colorBg="red"
      />
      <Layout 
        title="This is layout3 title" 
        descr="This is layout3 description..." 
        urlBg={bgLayout3}
      />
      <Footer/>
    </div>
  );
}

export default App;
