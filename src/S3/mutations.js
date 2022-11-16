import { Storage, Auth } from 'aws-amplify';

 const uploadToS3 = async (fileName, image) => {
    Auth.currentCredentials();
    return Storage.put(fileName, image, {
        level: 'public',
        contentType: 'image/jpeg'
    }).then(response => response.key)
    .catch(error => error.message);
}

export default uploadToS3;