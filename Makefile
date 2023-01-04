COMPOSE := docker-compose -f docker-compose.yml
JUSTDO := $(MAKE) --no-print-directory

up:
	${COMPOSE} up -d

down:
	${COMPOSE} down

logs:
	${COMPOSE} logs -f 

logs-client:
	${COMPOSE} logs -f client

logs-server:
	${COMPOSE} logs -f server

# restart: down up
restart: 
	$(JUSTDO) down
	$(JUSTDO) up
