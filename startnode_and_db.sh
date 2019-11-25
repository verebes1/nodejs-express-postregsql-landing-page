#! /bin/bash
APP_NAME=${1:-myapp}
pg_ctl -D /usr/local/var/postgres start
DEBUG="$APP_NAME":* npm start

