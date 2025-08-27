import Cards from "./Components/Cards";
import Hooks from "./Components/hook";
import { Section } from "./Components/Section";
import { UploadsFiles } from "./Components/UploadsFiles";

function App() {
  return (
    <div>
      <Section />
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      
      <h1 className="text-4xl font-extrabold text-blue-600 mb-8 font-roboto tracking-wide">
        How are you my friend?
      </h1>

      
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Card</h2>
        <Cards
          name="David"
          age={23}
          clan="Blackman"
          address="USA"
          briefs="Christian"
        />
      </div>

      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Counter & Friends
        </h2>
        <Hooks />
      </div>
    </div>
    <UploadsFiles />
    </div>
  );
}

export default App;
