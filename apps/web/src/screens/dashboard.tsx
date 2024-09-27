import { useEffect, useState } from "react";

export default function Dashboard() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    fetch("/api")
      .then((res) => res.text())
      .then((text) => setGreeting(text))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>{greeting} From my proxy api</h1>
      <h1>Dashboard</h1>
    </>
  );
}
