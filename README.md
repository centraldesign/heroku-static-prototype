You've been working on a prototype and you need to serve the static files compiled by Jekyll with your team?
Simply use Heroku instances to serve your file and share a url that you can protect with a login and password.

# Required
* Installed [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

# Create a new server

[Download the source](https://github.com/centraldesign/heroku-static-prototype/archive/master.zip) and unzip it your hard-drive.

Rename the folder with your project name, for example ```myprojectname-demo```.

Copy the ```_dist``` folder of your static prototype and paste it in the created folder (replace the existing empty ```_dist``` directory).

In terminal, navigate to the created folder.

```
cd directory/myprojectname-demo
```

We’ll use git to initialize and create a version of the site you want to deploy. To do that run the command:

```
git init
git add .
git commit -m "Prototype for deployment."
```

Now we will create your server on Heroku. If you didn’t logged to Heroku before do:

```
heroku login
```

Then enter the following commands to create a Heroku instance:

```
heroku apps:create stst-yourprojectname
```

We usually follow the ```stst-yourprojectname``` naming convention to name prototype servers. You can eventually add a version number if you want to host multiple versions of your prototype (```stst-yourprojectname-1.4```).

Now push your content to your Heroku instance:

```
git push heroku master
```

The server name must be unique, if not the command will return an error and you pick another one.

Once you see “remote: Verifying deploy…. done.” visit your prototype at https://stst-yourprojectname.heroku.app in your browser. This url is public and can be shared with anyone, if you want to password protect it see below.

Later if you want to update the instance with your changes just do:

```
git add .
git commit -m "Add useful message"
git push heroku master
```

# Update a pre-existing server
Use this if someone else already created a prototype server on Heroku and you want to update it with a new version of the prototype.
_If someone else created the server, be sure you’ve been added to it before._

First checkout the existing Heroku instance locally:

```
heroku git:clone -a stst-yourprojectname
```

```stst-yourprojectname``` is the name of the pre-existing instance.

Replace the ```_dist``` directory with the new version copied from your prototype.

Commit and push your change to Heroku:

```
git add .
git commit -m "Add useful message"
git push heroku master
```

# Protect with a password

Go to [Heroku](https://www.heroku.com)’s and edit the settings of your newly created instance.
In the Config Variables section:

1. Add a variable with the KEY “USERNAME” and enter the username you want to use in the VALUE field.
2. Add another variable with the KEY “PASSWORD” and enter the password you want to use in the VALUE field.

Go to https://stst-yourprojectname.heroku.app and now you will need to enter the credentials you set to access the prototype.
