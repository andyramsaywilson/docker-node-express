up-docker-run:
	docker run --rm -it --name node-docker-init-5 \
	-v "$(PWD)/app":/home/app -w /home/app \
	-e "PORT=3000" -p 8080:3000  \
	-u node node:latest /bin/bash

up-dockerfile:
	docker build -t node-docker-init-5 ./docker/node/ && \
	docker run --rm -it --name node-docker-init-5 \
	-v "$(PWD)/app":/home/app -p 8080:3000 \
	node-docker-init-5
up-docker-compose:
	docker-compose run --rm --service-ports nod_dev_env

up:
	docker-compose build && docker-compose up
down:
	docker-compose stop
rebuild:
	docker-compose down && docker-compose up --build --force-recreate --no-deps -d

#test: test-mocked test-live
#test-mocked:
#	docker exec -it -u root bpdts-application ./vendor/bin/simple-phpunit -c ./phpunit.xml.dist --exclude-group="realApi"
#test-live:
#	docker exec -it -u root bpdts-application ./vendor/bin/simple-phpunit -c ./phpunit.xml.dist --exclude-group="default"