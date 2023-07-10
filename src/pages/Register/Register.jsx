import React, { useContext } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Register success!");
        handleUpdateUserProfile(name);
        form.reset();
        // console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error);
      });
  };

  const handleUpdateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="mt-16 flex justify-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" name="name" required />
            <Input size="lg" label="Email" name="email" required />
            <Input type="password" size="lg" label="Password" name="password" required />
          </div>
          <button className="w-full" type="submit">
            <Button className="mt-6" fullwidth type="">
              Register
            </Button>
          </button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-blue-500 transition-colors hover:text-blue-700">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
