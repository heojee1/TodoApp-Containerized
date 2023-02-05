# sf-todo-app

## 1. Build docker images and push to registry
1. API 
```console
docker build -t localhost:32000/todo-api:<version> ./api
docker push localhost:32000/todo-api:<version>
```

2. UI
```console
docker build -t localhost:32000/todo-ui:<version> ./api
docker push localhost:32000/todo-ui:<version>
```

## 2. Add the following on the /etc/hosts file
```console
127.0.0.1 todo-app.com api.todo-app.com
```

## 3. Deploy using Kubernetes (no helm charts)
3. Start Postgres service
```console
kubectl apply -f k8s/db/
```

4. Start API service
```console
kubectl apply -f k8s/api/
```

5. Start UI service
```console
kubectl apply -f k8s/ui/
```

## 4. Deploy using Helm Charts
1. Create namespace
```console
kubectl create namespace todo-app-helm
```
2. Install
```console
microk8s helm3 install todo-app-helm ./helm/todo-app-chart/ -n todo-app-helm
```
3. see the pods
```console
kubectl get pods -n todo-app-helm
```

4. scale applications horizontally
```console
kubectl -n todo-app-helm scale deployment/todo-api-deployment --replicas=5
```

5. see the api pods
```console
kubectl get pods -l app=todo-api -n todo-app-helm
```

6.  uninstall HELM chart
```console
microk8s helm3 uninstall todo-app-helm -n todo-app-helm
```

7. see installation list
```console
microk8s helm3 ls -n todo-app-helm
```


## GCP 

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
