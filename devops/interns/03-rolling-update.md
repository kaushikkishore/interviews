Certainly! Rolling updates and rollbacks are essential tasks in Kubernetes for managing application versions. Here's how you can perform a rolling update and a rollback in Kubernetes:

**Performing a Rolling Update:**

1. **Update the Docker Image:** First, you need to create a new version of your application (`v2`) with the desired changes and build a new Docker image for it.

2. **Update the Deployment:** To perform a rolling update, you can update the image for your existing Deployment to use the new version (`v2`). You can do this by running the `kubectl set image` command:

   ```bash
   kubectl set image deployment/my-deployment my-container=kaushikkishore/application:v2
   ```

   Replace `my-deployment` with the name of your Deployment, `my-container` with the name of the container within your Deployment, and `kaushikkishore/application:v2` with the new Docker image.

3. **Monitor the Update:** Kubernetes will gradually replace the old Pods with the new ones, ensuring there is no downtime during the update. You can monitor the progress using `kubectl get pods` or `kubectl rollout status deployment/my-deployment`.

**Performing a Rollback:**

In case of issues or unexpected behavior with the new version (`v2`), you may need to roll back to the previous version (`v1`). Here's how to do it:

1. **Check Deployment Revision History:** To view the revision history of your Deployment, use the `kubectl rollout history` command:

   ```bash
   kubectl rollout history deployment/my-deployment
   ```

   This will show you the revision numbers and details.

2. **Roll Back to the Previous Version:** You can roll back to the previous version (`v1`) by specifying the revision number you want to revert to using the `kubectl rollout undo` command:

   ```bash
   kubectl rollout undo deployment/my-deployment --to-revision=<revision-number>
   ```

   Replace `<revision-number>` with the revision number of the previous version (`v1`).

3. **Monitor the Rollback:** Kubernetes will perform a rolling rollback to the previous version. You can monitor the progress using `kubectl get pods` or `kubectl rollout status deployment/my-deployment`.

By following these steps, you can perform a rolling update to a new version of your application and, if necessary, perform a rollback to the previous version in case of issues, ensuring the reliability and availability of your application in your Kubernetes cluster.
