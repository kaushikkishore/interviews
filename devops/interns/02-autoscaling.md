To configure Horizontal Pod Autoscaling (HPA) in Kubernetes to automatically scale the number of pods based on CPU utilization, you can follow these steps:

1. **Enable Metrics Server**: Before setting up HPA, ensure that the Metrics Server is installed and running in your Kubernetes cluster. Metrics Server collects resource utilization data, which is required for HPA to work.

   To install Metrics Server, you can use the following command:

   ```bash
   kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml
   ```

2. **Define Resource Requests and Limits**: In your application's Kubernetes Deployment or Pod specification, you should specify resource requests and limits for CPU. This allows Kubernetes to track CPU utilization for each Pod.

   Here's an example of how to define CPU resource requests and limits in a Deployment:

   ```yaml
   apiVersion: apps/v1
   kind: Deployment
   metadata:
     name: my-app
   spec:
     replicas: 3
     template:
       metadata:
         labels:
           app: my-app
       spec:
         containers:
           - name: my-app-container
             image: my-node-app:v1
             resources:
               requests:
                 cpu: "100m" # Request 100 milliCPU (0.1 CPU core)
               limits:
                 cpu: "200m" # Limit to 200 milliCPU (0.2 CPU core)
   ```

3. **Create HPA Resource**: Next, you need to create an HPA resource that specifies the scaling behavior based on CPU utilization. Here's an example HPA manifest:

   ```yaml
   apiVersion: autoscaling/v2beta2
   kind: HorizontalPodAutoscaler
   metadata:
     name: my-app-hpa
   spec:
     scaleTargetRef:
       apiVersion: apps/v1
       kind: Deployment
       name: my-app
     minReplicas: 1
     maxReplicas: 5
     metrics:
       - type: Resource
         resource:
           name: cpu
           target:
             type: Utilization
             averageUtilization: 50 # Target average CPU utilization (in percentage)
   ```

   In this example, we create an HPA named `my-app-hpa` that targets the `my-app` Deployment. It specifies that the average CPU utilization should be maintained at 50%, and it can scale the number of pods between 1 and 5.

4. **Apply the HPA Configuration**: Apply the HPA configuration to your cluster using `kubectl`:

   ```bash
   kubectl apply -f my-app-hpa.yaml
   ```

5. **Monitor HPA Scaling**: After applying the HPA configuration, Kubernetes will automatically monitor CPU utilization and adjust the number of pods as needed to maintain the specified CPU utilization target.

   You can monitor the HPA and observe its behavior using the following command:

   ```bash
   kubectl describe hpa my-app-hpa
   ```

   This command will show you the current metrics, target CPU utilization, and the number of replicas that the HPA has adjusted.

With these steps, you have configured Horizontal Pod Autoscaling (HPA) in Kubernetes to automatically scale the number of pods based on CPU utilization for your application. The HPA will increase or decrease the number of pods to maintain the target CPU utilization percentage defined in the HPA manifest.
