#!/bin/bash
set -e

SERVER="my_database_server";
PW="mysecretpassword";
DB="my_database";

if [[ $(docker ps -q | wc -l) -gt 0 ]]
then
  echo "Killing docker images"
  docker kill $(docker ps -q)
else
  echo "No running docker images"
fi

if [[ $(sudo lsof -ti:5432 | wc -l) -gt 0 ]]
then
  echo "Killing port 5432"
  sudo kill -9 "$(sudo lsof -ti:5432)"
else
  echo "Port 5432 isn't in use"
fi

echo "echo stop & remove old docker [$SERVER] and starting new fresh instance of [$SERVER]"
(docker kill $SERVER || :) && \
  (docker rm $SERVER || :) && \
  docker run --name $SERVER -e POSTGRES_PASSWORD=$PW \
  -e PGPASSWORD=$PW \
  -p 5432:5432 \
  -d postgres

# wait for pg to start
echo "sleep wait for pg-server [$SERVER] to start";
SLEEP 3;

# create the db
echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $SERVER psql -U postgres
echo "\l" | docker exec -i $SERVER psql -U postgres