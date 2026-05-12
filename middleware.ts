export const config = {
  matcher: "/((?!_next|_vercel|favicon\\.ico|favicon\\.svg|robots\\.txt).*)",
};

export default function middleware(request: Request): Response | undefined {
  const user = process.env.BASIC_AUTH_USER;
  const pass = process.env.BASIC_AUTH_PASS;

  if (!user || !pass) return;

  const auth = request.headers.get("authorization");
  if (auth) {
    const [scheme, encoded] = auth.split(" ");
    if (scheme === "Basic" && encoded) {
      const [u, p] = atob(encoded).split(":");
      if (u === user && p === pass) return;
    }
  }

  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Restricted", charset="UTF-8"',
    },
  });
}
