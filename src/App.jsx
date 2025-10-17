import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (count > 0) {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${count}`);
        const data = await res.json();
        setUser(data);
      }
    };
    fetchData();
  }, [count]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 to-orange-200 flex flex-col items-center justify-center p-6">
      
      {/* Counter Display */}
      <div className="text-4xl font-bold text-gray-800 bg-white shadow-md rounded-2xl px-8 py-4 mb-8">
        User ID: {count}
      </div>

      {/* Buttons */}
      <div className="flex gap-6 mb-10">
        <button
          onClick={() => count < 10 && setCount(count + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg shadow-md transition-all cursor-pointer"
        >
          ➕ Increase
        </button>

        <button
          onClick={() => count > 1 && setCount(count - 1)}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-lg shadow-md transition-all cursor-pointer"
        >
          ➖ Decrease
        </button>
      </div>

      {/* User Data */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[350px] text-center transition-all">
        {user ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>
            <p className="text-blue-600 mt-2 font-medium">{user.email}</p>
          </>
        ) : (
          <p className="text-gray-500 animate-pulse">Loading...</p>
        )}
      </div>
        <Card name="Rao Shahbaz" age="23" />
    </div>
  );
};

export default App;
