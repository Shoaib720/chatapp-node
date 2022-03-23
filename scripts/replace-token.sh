#!/bin/bash

sed -i 's+#{BACKEND_HOST}#+$(BACKEND_HOST)+g' .env
sed -i 's+#{BACKEND_PORT}#+$(BACKEND_PORT)+g' .env