FROM python:3.11-slim

WORKDIR /app

# Copy static site and server
COPY . .

# Expose port (PORT set at runtime by Koyeb)
EXPOSE 8000

# Use shell form so PORT env var is expanded
CMD sh -c "python3 server.py"
