FROM mhart/apline-node:8

COPY src node_modules index.js /app

ENTRYPOINT node /app/index.js