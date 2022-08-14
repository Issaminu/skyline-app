# About

As part of creating a solution that solves the multitude of problems encountered by 
co-owners, I conceived and created a web application that centralizes all 
the actions relating to managing buildings.

A complete and innovative solution of co-ownership management which takes into 
account all the functionalities essential to the activity of a syndic would be 
extremely beneficial to any co-owner. It would allow easy access to information on 
who, when and how much someone has contributed to the building's treasury, as 
well as provide clear and detailed information on how the contributed funds are 
spent. This ensures total transparency of the collection and spending of funds.

My solution, hosted on the web at www.skyline-app.ga on a Heroku server, 
allows users to add buildings where they own or rent apartments to the application, 
invite other co-owners to join the building, give some of them administrator 
privileges over the building, as well as manage the collection of co-owner funds and 
spend these funds on various actions related to the improvement of their common 
space, such as building improvements, repairs, etc.

To learn more about the application, feel free to check out the application repport: https://bit.ly/3w4BnIq (Note: Currently, it's only available in French).

# Application link

Visit www.skyline-app.ga to use the application.

# Local deployement

Follow these steps to run this app locally:
1. Clone the repo with `git clone https://github.com/Issam-Boubcher/skyline-app.git`
2. Create a `.env` file in the repo and provide the following variables:
```
#Prisma variables:
DATABASE_URL= #Provide the string connection to your database
SHADOW_DATABASE_URL=  #(Optional) Provide the string connection to your shadow database, check here for more info: https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database

#Auth0 variables:
AUTH0_SECRET=
AUTH0_BASE_URL=
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=

#Amazon S3 variables:
ACCESS_KEY=
SECRET_KEY=
BUCKET_NAME=
REGION=

#next-s3-upload variables:
S3_UPLOAD_KEY=  #Same value as ACCESS_KEY
S3_UPLOAD_SECRET=  #Same value as SECRET_KEY
S3_UPLOAD_BUCKET=  #Same value as BUCKET_NAME
S3_UPLOAD_REGION=  #Same value as REGION
```

3. Run `npm install` to install the application's dependencies.
4. Run `npm run dev` to start your local server.
5. Visit http://localhost:3000 to use the application.
