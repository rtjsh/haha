import Footer from "./components/Footer/Footer";
import Hero from "./components/Nav/Hero/Hero";
import Nav from "./components/Nav/Nav";
const App = () => {
  return (
    <div className="min-h-full flex flex-col  items-center py-6">
      <Nav />
      <Footer />
      <Hero />
    </div>
  );
};

export default App;
