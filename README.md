# Insurance

Project workspace for an insurance policy document assistant.

## Technology stack

| Layer | Technology |
| --- | --- |
| Frontend framework | Next.js |
| Frontend language | TypeScript |
| UI | React |
| Styling | Tailwind CSS |
| Package manager | npm |
| Backend | Python |
| API framework | FastAPI |
| API server | Uvicorn |
| Validation | Pydantic |
| ORM | SQLAlchemy |
| Database | PostgreSQL |
| Vector search | pgvector similarity search |
| RAG framework | LangChain |
| RAG orchestration | LangGraph (optional initially) |
| PDF processing | PyMuPDF |
| Document processing | python-docx |
| Embeddings | OpenAI Embeddings / Hugging Face |
| LLM | OpenAI / Azure OpenAI |
| Environment variables | python-dotenv |
| HTTP client | httpx |
| File uploads | python-multipart |
| Database migrations | Alembic |
| Testing | Pytest |
| Containerization | Docker |
| API documentation | FastAPI Swagger / OpenAPI |

## Structure

- `frontend/`: Next.js application
- `backend/`: FastAPI application
- `documents/`: policy documents for ingestion

## Local development

Frontend:

```powershell
cd frontend
npm install
npm run dev
```

Backend:

```powershell
cd backend
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

The frontend runs on `http://localhost:3000` and the backend runs on `http://localhost:8000`.