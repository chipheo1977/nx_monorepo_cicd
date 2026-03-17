build-app:
	@docker stop nx_monorepo_cicd || true
	@docker rm nx_monorepo_cicd || true
	@docker-compose build
	@docker-compose up -d
	@docker image prune -f || (echo "build_docker failed"; exit 1)
