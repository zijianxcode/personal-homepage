"""Minimal static file server for ai-builders.space deployment. Reads PORT from env."""
import os
import http.server
import socketserver

PORT = int(os.getenv("PORT", "8000"))


class SecureStaticHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-Frame-Options", "SAMEORIGIN")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
        super().end_headers()

with socketserver.TCPServer(("", PORT), SecureStaticHandler) as httpd:
    httpd.serve_forever()
