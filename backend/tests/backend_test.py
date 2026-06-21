"""Backend API tests for BLOWUP studio."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")
if not BASE_URL:
    # Fallback: read from frontend/.env
    from pathlib import Path
    env_path = Path("/app/frontend/.env")
    if env_path.exists():
        for line in env_path.read_text().splitlines():
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip()
                break
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health ---
class TestHealth:
    def test_health_ok(self, session):
        r = session.get(f"{API}/health", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"
        assert "service" in data


# --- Contact create + list ---
class TestContact:
    def test_create_contact_persists_and_appears_in_list(self, session):
        payload = {
            "name": "TEST_Patrick QA",
            "email": "test_qa_blowup@example.com",
            "phone": "+4500000000",
            "topic": "Booking",
            "message": "TEST_message_blowup_studio_pytest",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=20)
        assert r.status_code == 200, r.text
        body = r.json()
        assert body.get("success") is True
        assert "id" in body and isinstance(body["id"], str) and len(body["id"]) > 0
        created_id = body["id"]

        # Verify it appears in GET /contacts
        r2 = session.get(f"{API}/contacts", timeout=20)
        assert r2.status_code == 200
        contacts = r2.json()
        assert isinstance(contacts, list)
        match = [c for c in contacts if (c.get("id") == created_id or c.get("_id") == created_id)]
        assert len(match) == 1, f"Created contact not found in list (id={created_id})"
        c = match[0]
        assert c["name"] == payload["name"]
        assert c["email"] == payload["email"]
        assert c["topic"] == payload["topic"]
        assert c["message"] == payload["message"]
        assert "created_at" in c and c["created_at"]

    def test_create_contact_minimal_defaults(self, session):
        payload = {
            "name": "TEST_minimal",
            "email": "minimal@test.dk",
            "message": "TEST_minimal_msg",
        }
        r = session.post(f"{API}/contact", json=payload, timeout=20)
        assert r.status_code == 200
        body = r.json()
        assert body["success"] is True

    def test_create_contact_invalid_missing_fields(self, session):
        r = session.post(f"{API}/contact", json={"name": "TEST_x"}, timeout=20)
        # missing required email/message
        assert r.status_code in (400, 422), r.text
