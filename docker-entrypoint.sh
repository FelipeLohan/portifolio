#!/bin/sh
set -e

# Start Angular SSR server in background
node /app/dist/portifolio/server/server.mjs &

# Start nginx in foreground (keeps container alive)
exec nginx -g 'daemon off;'
