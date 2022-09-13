#! /bin/sh
DIRECTORY=$(pwd)
if [[ "$DIRECTORY" = */nest-cli-test ]]
then
  sudo docker build -f infrastructure/Dockerfile -t nest-cli-test-app .
else
  echo "You semm to be not in project root directory (working dir / pwd)"
fi