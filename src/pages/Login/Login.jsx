import React, { useContext } from "react";
import { Card, Typography, Input, Button } from "@material-tailwind/react";
import google from "../../assests/icons/google.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("Login success!");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success("Login success!");
        }
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error);
      });
  };

  return (
    <div className="mt-16 flex justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your Email and Password to Sign In.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" name="email" required />
            <Input type="password" size="lg" label="Password" name="password" required />
          </div>
          <button className="w-full">
            <Button>Sign In</Button>
          </button>
          <Button fullWidth variant="outlined" color="blue-gray" className="flex items-center justify-center gap-3 mt-5" fullwidth="true" onClick={handleGoogleLogin}>
            <img src={google} alt="google" className="h-6 w-6" />
            Continue with Google
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don't have an account?{" "}
            <Link to="/register" className="font-medium text-blue-500 transition-colors hover:text-blue-700">
              Sign Up
            </Link>
            <Toaster />
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Login;
