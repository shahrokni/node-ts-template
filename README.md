# 🧠 How to run the app

This is a minimal yet production-ready Node.js + TypeScript + Express project.  
You can run it in **two different ways** — depending on your environment and preferences.

## 🚀 1. Run with Docker Compose

### Prerequisites

- Docker installed
- Docker Compose v2 (preferred) or legacy v1

> ℹ️ If you're using Compose v1 (`docker-compose`), just replace `docker compose` with `docker-compose` in the commands below.

### Run the app:

```bash
docker compose up --build
```

## 2. Run Locally Without Docker (Dev Mode)

**_The simplest way to start developing_**

```bash
npm run dev
```

# 🧪 How to run the tests

```bash
npm run test
```

# 🐳 Docker & Docker Compose 2.x Commands Cheat Sheet

| **Command**                      | **Description**                                   |
| -------------------------------- | ------------------------------------------------- |
| `docker build -t name .`         | Build image from Dockerfile in current dir        |
| `docker images`                  | List all local images                             |
| `docker ps`                      | Show running containers                           |
| `docker ps -a`                   | Show all containers (including stopped)           |
| `docker run -d -p 80:80 name`    | Run container in detached mode, map port 80       |
| `docker exec -it container bash` | Open interactive bash shell in running container  |
| `docker logs container`          | View logs of a container                          |
| `docker stop container`          | Stop a running container                          |
| `docker rm container`            | Remove a container                                |
| `docker rmi image`               | Remove an image                                   |
| `docker volume ls`               | List volumes                                      |
| `docker network ls`              | List Docker networks                              |
| `docker system prune`            | Clean up unused data (containers, networks, etc.) |

## Docker Compose 2.x CLI Commands

> In Compose v2, `docker-compose` is now `docker compose` (without the dash).

| **Command**                        | **Description**                                  |
| ---------------------------------- | ------------------------------------------------ |
| `docker compose up`                | Start services defined in `docker-compose.yml`   |
| `docker compose up -d`             | Start services in detached mode                  |
| `docker compose down`              | Stop and remove containers, networks, volumes    |
| `docker compose build`             | Build or rebuild services                        |
| `docker compose logs`              | View logs of all services                        |
| `docker compose logs -f`           | Follow logs (like `tail -f`)                     |
| `docker compose ps`                | List containers managed by Compose               |
| `docker compose exec service bash` | Run bash shell inside running service container  |
| `docker compose restart`           | Restart services                                 |
| `docker compose stop`              | Stop running services                            |
| `docker compose rm`                | Remove stopped service containers                |
| `docker compose config`            | Validate and view the Compose file configuration |
