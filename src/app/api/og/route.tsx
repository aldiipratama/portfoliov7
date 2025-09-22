// app/api/og/route.tsx
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title =
      searchParams.get("title") || "Aldi Pratama - Portfolio AI Chat";
    const description =
      searchParams.get("description") || "Web Developer & AI Enthusiast";

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#1a202c",
            color: "white",
            fontFamily: "sans-serif",
            padding: "50px",
            textAlign: "center",
          }}
        >
          <img
            src="http://localhost:3000/img/avatar.png"
            alt="Logo"
            width="100"
            height="100"
            style={{
              marginBottom: "20px",
              borderRadius: "50%",
              border: "2px solid white",
            }}
          />
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              margin: "0",
              lineHeight: "1.2",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "30px",
              marginTop: "20px",
              opacity: "0.8",
            }}
          >
            {description}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
