import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z.object({
      phone: z.string().trim().min(8).max(20).regex(/^[0-9 +()-]+$/, "Teléfono inválido"),
    }).parse(d),
  )
  .handler(async ({ data }) => {
    const phone = data.phone.replace(/\s+/g, "");
    const { error } = await supabaseAdmin
      .from("subscribers")
      .insert({ phone })
      .select("id")
      .maybeSingle();
    // Ignore unique conflicts - just say ok
    if (error && !error.message.toLowerCase().includes("duplicate")) {
      throw new Error(error.message);
    }
    return { ok: true };
  });
