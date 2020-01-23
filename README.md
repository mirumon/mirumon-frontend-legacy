# Mirumon Front-end service
## Get started
1. Build an image
```
docker build --tag "mirumon-frontend:0.1.0" .
```
2. Run that!
```
docker run -p 80:80 -d --name mirumon-frontend mirumon-frontend:0.1.0 
```
## How to check is container running
```
docker ps -a | grep mirumon-frontend
```
## How to stop
```
docker stop mirumon-frontend
```