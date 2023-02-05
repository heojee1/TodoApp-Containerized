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
kubectl apply -f myK8s/api/api-config.yaml
kubectl apply -f myK8s/api/api-deployment.yaml
kubectl apply -f myK8s/api/api-service.yaml
kubectl apply -f myK8s/api/api-ingress.yaml
```

5. Start UI service
```console
kubectl apply -f myK8s/ui/
```


# GCP 

1- Install Google Cloud CLI with the installation guide mentioned below 
 ```console
 https://cloud.google.com/sdk/docs/install
 ```
2- Initialize GCloud CLI 
```console
gcloud init
```

3- Create new cluster 
```console
gcloud container clusters create --binauthz-evaluation-mode=PROJECT_SINGLETON_POLICY_ENFORCE --zone us-central1-a  sf-todo-app-cluster
```



4- Configure this cluster with kube.config
```console
gcloud container clusters get-credentials --zone us-central1-a sf-todo-app-cluster
```

4-Run the apply -f commands as mentioned in previous sections
