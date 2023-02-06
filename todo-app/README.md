# sf-todo-app

## Project overview
We built a simple todo app using React (UI) and Django (API).
UI will be available on todo-app.com and API information will be available on api.todo-app.com.
On the index page of api.todo-app.com, you can see the version information of the app (must be set manually in api/todos/view.py).
On api.todo-app.com/api/todos, you can see the current list of tasks.

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
