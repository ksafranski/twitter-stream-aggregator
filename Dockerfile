# Slim, Apline-based Node image
FROM mhart/alpine-node:8

# Copy assets needed to serve application
COPY src /app/src/
COPY node_modules /app/node_modules/
COPY client /app/client/ 
COPY index.js /app/

# Expose port
EXPOSE 8080

# Required environment variables
ENV TWITTER_ACCESS_TOKEN_KEY=$TWITTER_ACCESS_TOKEN_KEY
ENV TWITTER_ACCESS_TOKEN_SECRET=$TWITTER_ACCESS_TOKEN_SECRET
ENV TWITTER_CONSUMER_KEY=$TWITTER_CONSUMER_KEY
ENV TWITTER_CONSUMER_SECRET=$TWITTER_CONSUMER_SECRET
ENV ES_CONN=$ES_CONN
ENV ES_PORT=9200

# Start app
ENTRYPOINT node /app/index.js
