import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";

// file-level next.js config to say revalidate cache after 5 seconds
//export const revalidate = 5;
//next's force-dynamic is same as cache: no-store == always refresh
//export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  // same effect as force-dynamic (just inside this specific component and any requests sent to data sources)
  //unstable_noStore();

  const response = await fetch("http://localhost:8080/messages");
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
