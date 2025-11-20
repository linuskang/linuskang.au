export default {
  async fetch(request) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*", // Or your domain in production
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle preflight OPTIONS
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }

    try {
      const data = await request.json();
      const { name, email, message } = data;

      if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: "Missing required fields" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const discordPayload = {
        embeds: [
          {
            title: "📬 New Contact Form Submission",
            color: 3447003,
            fields: [
              { name: "👤 Name", value: name, inline: true },
              { name: "📧 Email", value: email, inline: true },
              { name: "💬 Message", value: message, inline: false },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      };

      const discordResponse = await fetch(
        "https://discord.com/api/webhooks/...YOUR_WEBHOOK_URL...", // Replace with your Discord webhook URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(discordPayload),
        }
      );

      if (!discordResponse.ok) {
        return new Response(JSON.stringify({ error: "Failed to send message" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Internal server error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  },
};
