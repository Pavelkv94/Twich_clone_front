'use client';

import ChannelAvatar from "@/components/ui/elements/ChannelAvatar";
import { useCurrent } from "@/hooks/useCurrent";

export default function Home() {

  const { user, isLoadingProfile, refetchProfile } = useCurrent();


  return (
    <div>
      {isLoadingProfile ? "Loading..." : <ChannelAvatar
        channel={{
          username: user?.username || "",
          avatar: user?.avatar || "",
        }}
        size="lg"
        isLive={true}
      />}


    </div>
  );
}
