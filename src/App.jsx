import TopNav from "./components/NavBar";
import ProductCardHorizontal from "./components/ProductCard";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <TopNav />

      <div className="grid grid-cols-12 gap-6 mt-4 p-6">
        <div className="col-span-3 shadow-lg">
          <Profile />
        </div>
        <div className="col-span-9 grid grid-cols-2 gap-6">
          <div className="col-span-2 p-4 border-b-2  border-neutral-200 text-xl font-bold">
            Saved
          </div>
          <ProductCardHorizontal />
          <ProductCardHorizontal />
          <ProductCardHorizontal />
          <ProductCardHorizontal />
        </div>
      </div>
    </>
  );
}

export default App;
