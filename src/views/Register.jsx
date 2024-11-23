

export default function Register() {
  return (
    <div className="h-screen bg-gray-100 flex justify-center">
      <div className="py-6 px-8 h-96 w-80  mt-20 bg-white rounded shadow-xl">
        <div className="text-center text-md font-bold mb-4">Register</div>
        <form action="POST">
          <div className="">
            <label className="block text-gray-800 font-bold">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="username"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-bold">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>
     
            <label className="block text-gray-800 font-bold mt-2">Retype Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          
          <butt className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">
            Register
          </butt>
        </form>
      </div>
    </div>
  );
}
