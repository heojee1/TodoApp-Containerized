# sf-todo-app

1. Build API docker image and push it to the registry
```console
docker build -t localhost:32000/todo-api:v1 ./api
docker push localhost:32000/todo-api:v1
```

2. Build UI docker image and push it to the registry
```console
docker build -t localhost:32000/todo-ui:v1 ./api
docker push localhost:32000/todo-ui:v1
```

3. Start Postgres service
```console
kubectl apply -f myK8s/db/
```

4. Start API service
```console
kubectl apply -f myK8s/api/api-config.yaml
kubectl apply -f myK8s/api/api-deployment.yaml
kubectl apply -f myK8s/api/api-service.yaml
kubectl apply -f myK8s/api/api-ingress.yaml
```

5. Start UI service
```console
kubectl apply -f myK8s/ui/
```
