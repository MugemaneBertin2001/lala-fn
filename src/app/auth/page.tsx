// app/(routes)/login/page.tsx

import LoginPage from "./components/login-page";

export const metadata = {
  title: "Login | Your App Name",
  description: "Sign in with Google",
};

export default function Page() {
  return <LoginPage />;
}
