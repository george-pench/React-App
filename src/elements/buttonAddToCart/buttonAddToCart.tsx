import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";

import SignInModal from "@/components/account/signInModal";

interface ButtonProps {
  children: string;
  className: string;
}

export default function ButtonAddToCart({ children, className }: ButtonProps) {
  const authData = useAppSelector((state) => state.authReduxState);
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  if (authData.username && isSignInOpen) {
    setIsSignInOpen(false);
  }

  return (
    <>
      <button className={className} type="button">
        {children}
      </button>
      <SignInModal isSignInOpen={isSignInOpen} setIsSignInOpen={setIsSignInOpen} authData={authData} />
    </>
  );
}
