package com.douglasmatosdev.riodepremios.services;

import com.douglasmatosdev.riodepremios.entities.User;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class UserService {

    public String createUser(User user) throws InterruptedException, ExecutionException {
        Firestore dbfirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionWriteResultApiFuture = dbfirestore.collection("users").document(user.getDocumentId()).set(user);
        return collectionWriteResultApiFuture.get().getUpdateTime().toString();
    }

    public User getUser(String documentId) throws InterruptedException, ExecutionException {
        Firestore dbfirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference = dbfirestore.collection("users").document(documentId);
        ApiFuture<DocumentSnapshot> snapshotApiFuture = documentReference.get();
        DocumentSnapshot documentSnapshot = snapshotApiFuture.get();
        User user;
        if (documentSnapshot.exists()) {
            user = documentSnapshot.toObject(User.class);
            return user;
        }
        return null;
    }

    public String updateUser(User user) throws ExecutionException, InterruptedException {
        Firestore dbfirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> writeResultApiFuture = dbfirestore.collection("users").document(user.getDocumentId()).set(user);
        return writeResultApiFuture.get().getUpdateTime().toString();
    }

    public String deleteUser(String documentId) throws InterruptedException, ExecutionException {
        Firestore dbfirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> writeResultApiFuture = dbfirestore.collection("users").document(documentId).delete();
        return "Successfully deleted " + documentId;
    }

}
