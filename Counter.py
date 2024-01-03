import boto3
import json
import os

def lambda_handler(event, context):
    TABLE_NAME = os.environ.get('COUNTER_TABLE_NAME')

    try:
        # Read the current item with id = 1 and counter = 0
        dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
        table = dynamodb.Table(TABLE_NAME)
        
        response = table.get_item(Key={'id': 1})

        # Check if the 'Item' key exists in the response
        if 'Item' in response:
            item = response['Item']
            
            # Increment the counter by 1
            updated_counter = int(item.get('counter', 0)) + 1
            
            # Update the item with the incremented counter
            table.update_item(
                Key={'id': 1},
                UpdateExpression='SET #counter = :new_counter',
                ExpressionAttributeNames={'#counter': 'counter'},
                ExpressionAttributeValues={':new_counter': updated_counter}
            )

            # Return a simple response without CORS headers
            return {
                'statusCode': 200,
                'body': json.dumps({'message': 'Success', 'data': f'{updated_counter}'}),
                'headers': {
                    'Content-Type': 'application/json',
                }
            }

        else:
            # Handle the case where the item is not found
            print("Item not found in DynamoDB.")
            return {
                'statusCode': 404,
                'body': json.dumps({'message': 'Item not found in DynamoDB'}),
                'headers': {
                    'Content-Type': 'application/json',
                }
            }

    except Exception as e:
        print(f"Error details: {e}")
        return {
            'statusCode': 500,
            'body': f'Error details: {e}'
        }
