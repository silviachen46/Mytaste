import "./App.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="text-2xl border-b border-gray-400">
      <div className="flex justify-between">
        <div>
          <Link to="/">
            <div>
              <button className="p-4">MyTaste</button>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/login">
            <button className="p-4">Login</button>
          </Link>
        </div>
        <div>
          <Link to="/chat">
            <button className="p-4">Chat</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
