from google.cloud import storage
BUCKET_NAME="mchacks_vigilens"

""" Uploads a file to the bucket. """
def upload_image_to_storage( source_file_name, destination_blob_name):
    """Uploads a file to the Google Cloud Storage bucket."""
    storage_client = storage.Client()

    # Get the bucket
    bucket = storage_client.bucket(BUCKET_NAME)

    # Upload the file
    blob = bucket.blob(destination_blob_name)
    blob.upload_from_filename(source_file_name)

    print(f"File {source_file_name} uploaded to {destination_blob_name} in {BUCKET_NAME}.")

# Example usage
source_file_name = "path/to/your/local/image.jpg"
destination_blob_name = "images/image.jpg"

upload_image_to_storage( source_file_name, destination_blob_name)
