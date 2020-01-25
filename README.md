# Mirumon Front-end service
## Get started
### How to up development server for testing and debug
```
docker-compose up -d
```

### How to build production image
1. Build an image
```
docker build --tag "mirumon-frontend:<current_image_version_from_package.json>" .
```
2. Run that!
```
docker run -p 8000:80 -d --name mirumon-frontend mirumon-frontend:<version>
```
