'use client';

import { useFindChannelByUsernameQuery } from "@/graphql/generated/graphql";

export default function Home() {
  const { data, loading, error } = useFindChannelByUsernameQuery({
    variables: { username: "pavelWik" },
  });

  console.log(data);

  return (
    <div>
      <h1>Home</h1>
      {loading ? <p>Loading...</p> : JSON.stringify(data)}
    </div>
  );
}
