from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:5173",  # Vite frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

fakeDB = [
    {
        "id": "E71",
        "username": "alice",
        "email": "alice@example.com",
        "role": "dev",
        "department": "backend",
        "status": "active"
    },
    {
        "id": "E72",
        "username": "bob",
        "email": "bob@example.com",
        "role": "devops",
        "department": "infra",
        "status": "active"
    },
    {
        "id": "E73",
        "username": "charlie",
        "email": "charlie@example.com",
        "role": "frontend",
        "department": "ui",
        "status": "inactive"
    },
    {
        "id": "E74",
        "username": "david",
        "email": "david@example.com",
        "role": "qa",
        "department": "testing",
        "status": "active"
    }
]


@app.get("/")
def home():
    return {"message": "DevOps learning"}


@app.get("/api/id/{id}")
def get_user(id: str):
    for user in fakeDB:
        if user["id"] == id:
            return user

    raise HTTPException(status_code=404, detail="User not found")