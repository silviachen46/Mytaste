import "./App.css";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
function Homepage() {
  return (
    <div>
        <Navigation />
        <div className="mx-16 h-screen py-52">
        <div class="slide-bck-center flex justify-center text-8xl mt-8 text-center puff-in-center">
          Recipes&nbsp;Made &nbsp;for&nbsp;You
        </div>
        <div className="mb-100 text-2xl text-center mt-4 ">
            There is a wide multitude of recipes available online for different dishes, each with their own ingredients and styles of cooking. Finding the right recipe can be a lengthy process, especially with how many resources are available online. MyTaste streamlines this process by recommending users recipes, while maintaining a tailored account of each recipe which would otherwise take ages to find manually. The flexible recipes of MyTaste can not only accommodate for specific dietary needs such as allergens, but can also be modified instantly if the user is missing an ingredient.
        </div>
      </div>
    </div>
  );
}

export default Homepage;
