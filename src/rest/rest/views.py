from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json, logging, os
from pymongo import MongoClient
from django.http import JsonResponse
# from rest_framework.parsers import JSONParser    

mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
db_name = MongoClient(mongo_uri)['test_db']

# collection_name = db_name['todos']
collection = db_name.todolist
collectionName = db_name.collectionName

class TodoListView(APIView):

    def get(self, request):
        global collectionName
        # collections_name.delete_many({})
        data = []
        data = list(data)
        todo = collectionName.find()
        
        for info in todo:
            data.append({'title' : info["title"]})
        # data = JsonResponse(data,safe=False)
        return Response(data, status=status.HTTP_200_OK)
        
    def post(self, request):
        global collectionName
        collectionName.insert_one(request.data).inserted_id
        return Response('OK!!!',status=status.HTTP_200_OK)