# sf-todo-app

1. Build API docker image and push it to the registry
```console
docker build -t localhost:32000/todo-api ./api
docker push localhost:32000/todo-api:latest
```

2. Build UI docker image and push it to the registry
```console
docker build -t localhost:32000/todo-ui ./api
docker push localhost:32000/todo-ui:latest
```

3. Start Postgres service
```console
kubectl apply -f myK8s/db/
```

4. Start API service
```console
kubectl apply -f myK8s/api/
```

5. Start UI service
```console
kubectl apply -f myK8s/ui/
```
