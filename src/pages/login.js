import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import FirebaseContext from "../context/firebase";

export default function Login() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iphone with profile" />
      </div>
      <div className="flex flex-col w-2/5">
        <h1 className="flex justify-center w-full">
          <img
            src="/images/logo.png"
            alt="instagram logo"
            className="mt-2 w-6/12"
          />
        </h1>
        {error && <p className="mb-4 text-xs test-red-primary">{error}</p>}

        <form onSubmit={handleLogin} method="POST">
          <input
            aria-label="Enter Your Email Address"
            type="text"
            placeholder="Email Address"
            className="text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border-gray-primary rounded mb-2"
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <input
            aria-label="Enter Your Password"
            type="password"
            placeholder="Password"
            className="text-sm text-grey-base w-full mr-3 py-5 px-4 h-2 border-gray-primary rounded mb-2"
            onChange={({ target }) => setPassword(target.value)}
          />
          <button
            disabled={isInvalid}
            type="submit"
            className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${
              isInvalid && `opacity-50`
            }`}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
