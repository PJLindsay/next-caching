//import { unstable_noStore } from "next/cache";

import Messages from "@/components/messages";
import { getMessages } from "@/lib/messages";

// file-level next.js config to say revalidate cache after 5 seconds
//export const revalidate = 5;

//next's force-dynamic is same as cache: no-store == always refresh
// if you use this - you won't see the o beside this component when you npm run build
//export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  // same effect as force-dynamic (just inside this specific component and any requests sent to data sources)
  //unstable_noStore();

  // example of setting a tag (for cache tag purposes eg. revalidateTag())
  // const response = await fetch("http://localhost:8080/messages", {
  //   next: { tags: ["msg"] },
  // });
  // const messages = await response.json();

  // an example of caching when you don't have an external API
  const messages = getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
