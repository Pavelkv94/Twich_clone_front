'use client';

import { Button } from "@/components/shared/Button";
import { useFindChannelByUsernameQuery } from "@/graphql/generated/graphql";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  const { data, loading, error } = useFindChannelByUsernameQuery({
    variables: { username: "pavelWik" },
  });

  return (
    <div>
      <h1>{t("title")}</h1>
      {loading ? <p>Loading...</p> : JSON.stringify(data)}
      <br />
      <Button variant="default">default</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>

    </div>
  );
}
