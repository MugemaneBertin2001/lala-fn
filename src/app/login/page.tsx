// app/(routes)/login/page.tsx

import LoginPage from "./components/login-page";

export const metadata = {
  title: "Login | ",
  description: "Sign in with Google",
};

export default function Page() {
  return <LoginPage />;
}
