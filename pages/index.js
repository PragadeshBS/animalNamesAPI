import Link from "next/link";

export default function Home() {
  return (
    <p style={{ textAlign: "center", fontSize: "2rem" }}>
      Visit{" "}
      <i>
        <Link href="/api/animal">/api/animal</Link>
      </i>{" "}
      to get a cool animal name
    </p>
  );
}
