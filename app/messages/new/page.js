import { redirect } from "next/navigation";

import { addMessage } from "@/lib/messages";
import { revalidatePath, revalidateTag } from "next/cache";

export default function NewMessagePage() {
  async function createMessage(formData) {
    "use server";

    const message = formData.get("message");
    addMessage(message);

    // we can revalidate cache here (revalidate a piece of cache on-demand)
    // a bit more nuanced than using config (eg. using something like revalidate: 5 -
    // which is a bit more brute - and may not be necessary to do)

    // this will revalidate the cache for this path, but not any nested pages
    //revalidatePath("/messages");

    // revalidate cache for this path *and* any nested pages
    //revalidatePath("/messages", "layout");

    // revalidate cache for all pages on this site
    //revalidatePath("/", "layout");

    revalidateTag("msg");

    redirect("/messages");
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
