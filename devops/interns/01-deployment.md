To create a Kubernetes Deployment that runs three replicas of the Docker image `kaushikkishore/application:v1`, you can create a YAML manifest file for the Deployment. Here's an example of a Kubernetes Deployment manifest for your scenario:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-container
          image: kaushikkishore/application:v1
```

Explanation of the manifest:

- `apiVersion` and `kind` specify the Kubernetes resource type, which is a Deployment in this case.
- `metadata` includes the name of the Deployment, which is `my-deployment`.
- `spec` defines the desired state of the Deployment.
  - `replicas: 3` indicates that you want three replicas of the container to be running.
  - `selector` specifies how the Deployment selects which Pods to manage. In this case, it matches Pods with the `app: my-app` label.
  - `template` defines the Pod template for the Deployment. It includes the label `app: my-app` to match the selector.
    - `containers` specifies the container configuration.
      - `name: my-container` is the name of the container.
      - `image: kaushikkishore/application:v1` is the Docker image you want to run in the Pod.

To create this Deployment in your Kubernetes cluster, save the YAML manifest to a file (e.g., `my-deployment.yaml`) and apply it using the `kubectl apply` command:

```bash
kubectl apply -f my-deployment.yaml
```

Kubernetes will create the Deployment, and it will ensure that three replicas of the `kaushikkishore/application:v1` container are running in your cluster. You can check the status of the Deployment and the Pods it manages using `kubectl` commands like `kubectl get deployment my-deployment` and `kubectl get pods -l app=my-app`.
