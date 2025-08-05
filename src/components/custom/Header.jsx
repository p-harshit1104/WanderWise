import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo.access_token}`, {
        headers: {
          Authorization: `Bearer ${tokenInfo.access_token}`,
          Accept: "application/json",
        },
      })
      .then((resp) => {
        console.log(resp.data);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setUser(resp.data); // update user without reload
        setOpenDialog(false);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => GetUserProfile(tokenResponse),
    onError: (error) => console.log(error),
  });

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    setUser(null); // clear user without reload
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-gradient-to-b from-blue-300 to-gray-100">
  {/* Left - Logo */}
  <div className="flex items-center">
    <a href="/">
      <img className="w-16 h-16" src="/logoaibg.png" alt="Logo" />
    </a>
  </div>

  {/* Center - Title */}
  <div className="flex-1 text-center">
    <h1 className="text-xl font-bold">WanderWise Your Smart AI Trip Planner 😎</h1>
  </div>

  {/* Right - Buttons or Profile */}
  <div className="flex items-center gap-x-3">
    {user ? (
      <>
        <a href="/my-trip">
          <Button variant="outline" className="rounded-full">
            My Trips
          </Button>
        </a>
        <Popover>
          <PopoverTrigger>
            <img className="h-10 w-10 rounded-full" src="/man.jpg" alt="Profile" />
          </PopoverTrigger>
          <PopoverContent>
            <Button
              onClick={handleLogout}
              className="rounded-2xl border-2 p-2 cursor-pointer"
            >
              Logout
            </Button>
          </PopoverContent>
        </Popover>
      </>
    ) : (
      <Button onClick={() => setOpenDialog(true)}>Sign in</Button>
    )}
  </div>

  {/* Sign-in Dialog */}
  <Dialog open={openDialog} onOpenChange={setOpenDialog}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Sign In</DialogTitle>
        <DialogDescription>
          <div className="flex flex-col items-center">
            <img src="/logoaibg.png" alt="Logo" className="w-21" />
            <span>Sign in with Google Authentication securely</span>
            <Button onClick={login} className="w-full mt-5">
              Sign in with Google
              <img src="/logogoogle.svg" alt="Google" className="inline-block w-8 h-8 ml-2" />
            </Button>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</header>

  );
};

export default Header;
