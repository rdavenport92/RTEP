import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

ORIGINS = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=ORIGINS,
    allow_methods=['*'],
    allow_headers=['*']
)


@app.get('/')
@app.head('/')
def heartbeat():
    return 'Engine is up and running!'


def main():
    uvicorn.run(
        'engine.main:app',
        port=3005,
        host='0.0.0.0',
        reload=True,
        proxy_headers=True,
        forwarded_allow_ips='*'
    )


if __name__ == '__main__':
    main()
