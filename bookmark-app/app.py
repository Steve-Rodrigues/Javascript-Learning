"""
Bookmarks API - a tiny zero-dependency Python backend for practicing real
GET/POST/PUT/DELETE requests from the frontend. Data is saved to a local
SQLite file (bookmarks.db), so it actually persists between server restarts
- unlike a fake API like JSONPlaceholder.

Uses only Python's standard library (http.server + sqlite3), so there's
NOTHING to pip install. Just run:

    python app.py

It'll start on http://localhost:5000
"""

from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import sqlite3
import json
import os
import re
from urllib.parse import urlparse

DB_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "bookmarks.db")
ID_PATH = re.compile(r"^/bookmarks/(\d+)$")


def get_db():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS bookmarks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            url TEXT NOT NULL,
            category TEXT DEFAULT 'general'
        )
    """)
    conn.commit()
    conn.close()


def row_to_dict(row):
    return {"id": row["id"], "title": row["title"], "url": row["url"], "category": row["category"]}


class Handler(BaseHTTPRequestHandler):
    def _send_json(self, status, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        # CORS headers - lets a frontend on a different port/file:// call this API
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()
        self.wfile.write(body)

    def _read_json_body(self):
        length = int(self.headers.get("Content-Length", 0))
        if length == 0:
            return {}
        raw = self.rfile.read(length)
        try:
            return json.loads(raw)
        except json.JSONDecodeError:
            return None

    def do_OPTIONS(self):
        # browsers send this automatically before PUT/DELETE/POST with JSON headers
        self._send_json(204, {})

    def do_GET(self):
        path = urlparse(self.path).path

        if path == "/bookmarks":
            conn = get_db()
            rows = conn.execute("SELECT * FROM bookmarks").fetchall()
            conn.close()
            self._send_json(200, [row_to_dict(r) for r in rows])
            return

        match = ID_PATH.match(path)
        if match:
            bookmark_id = int(match.group(1))
            conn = get_db()
            row = conn.execute("SELECT * FROM bookmarks WHERE id = ?", (bookmark_id,)).fetchone()
            conn.close()
            if row is None:
                self._send_json(404, {"error": "Bookmark not found"})
            else:
                self._send_json(200, row_to_dict(row))
            return

        self._send_json(404, {"error": "Not found"})

    def do_POST(self):
        path = urlparse(self.path).path
        if path != "/bookmarks":
            self._send_json(404, {"error": "Not found"})
            return

        data = self._read_json_body()
        if data is None:
            self._send_json(400, {"error": "Invalid JSON"})
            return
        if "title" not in data or "url" not in data:
            self._send_json(400, {"error": "title and url are required"})
            return

        category = data.get("category", "general")

        conn = get_db()
        cursor = conn.execute(
            "INSERT INTO bookmarks (title, url, category) VALUES (?, ?, ?)",
            (data["title"], data["url"], category),
        )
        conn.commit()
        new_id = cursor.lastrowid
        row = conn.execute("SELECT * FROM bookmarks WHERE id = ?", (new_id,)).fetchone()
        conn.close()

        self._send_json(201, row_to_dict(row))

    def do_PUT(self):
        path = urlparse(self.path).path
        match = ID_PATH.match(path)
        if not match:
            self._send_json(404, {"error": "Not found"})
            return

        bookmark_id = int(match.group(1))
        conn = get_db()
        existing = conn.execute("SELECT * FROM bookmarks WHERE id = ?", (bookmark_id,)).fetchone()
        if existing is None:
            conn.close()
            self._send_json(404, {"error": "Bookmark not found"})
            return

        data = self._read_json_body() or {}
        title = data.get("title", existing["title"])
        url = data.get("url", existing["url"])
        category = data.get("category", existing["category"])

        conn.execute(
            "UPDATE bookmarks SET title = ?, url = ?, category = ? WHERE id = ?",
            (title, url, category, bookmark_id),
        )
        conn.commit()
        row = conn.execute("SELECT * FROM bookmarks WHERE id = ?", (bookmark_id,)).fetchone()
        conn.close()

        self._send_json(200, row_to_dict(row))

    def do_DELETE(self):
        path = urlparse(self.path).path
        match = ID_PATH.match(path)
        if not match:
            self._send_json(404, {"error": "Not found"})
            return

        bookmark_id = int(match.group(1))
        conn = get_db()
        existing = conn.execute("SELECT * FROM bookmarks WHERE id = ?", (bookmark_id,)).fetchone()
        if existing is None:
            conn.close()
            self._send_json(404, {"error": "Bookmark not found"})
            return

        conn.execute("DELETE FROM bookmarks WHERE id = ?", (bookmark_id,))
        conn.commit()
        conn.close()

        self._send_json(200, {"message": f"Bookmark {bookmark_id} deleted"})

    def log_message(self, format, *args):
        # quieter console output
        print(f"{self.command} {self.path} -> {args[1] if len(args) > 1 else ''}")


if __name__ == "__main__":
    init_db()
    port = 5000
    server = ThreadingHTTPServer(("localhost", port), Handler)
    print(f"Bookmarks API running at http://localhost:{port}")
    print("Try it: http://localhost:5000/bookmarks")
    server.serve_forever()
