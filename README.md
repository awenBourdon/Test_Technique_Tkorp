# Test Technique

## Technologies utilisées

- **TypeScript**
- **NestJS**
- **NextJS**
- **MySQL** 
- **GraphQL**
- **Tailwind CSS**
- **Framer Motion**

## Installation

### Avant de commencer, assurez-vous d'avoir installé les outils suivants :

1. **Node.js** : Téléchargez et installez Node.js depuis [ici](https://nodejs.org).
2. **NestJS CLI** : Installez-le avec la commande suivante :
   ```bash
   npm install -g @nestjs/cli

3.   MySQL : Installez et configurez MySQL sur votre machine. Vous pouvez le télécharger depuis [ici](https://dev.mysql.com/downloads/installer/.

### Étapes pour configurer le projet

    Clonez ce repository sur votre machine :

git clone https://github.com/awenBourdon/Test_Technique_Tkorp.git

#### Allez dans le dossier du projet :

    cd technical-test

#### Connectez-vous à MySQL via le terminal (exemple avec root):

      mysql -u root -p

#### Créez une nouvelle base de données (exemple avec technical_test) :

      CREATE DATABASE technical_test;

#### Sélectionnez la :

      USE technical_test;

#### Créez la table person :

      CREATE TABLE person (
          id INT AUTO_INCREMENT PRIMARY KEY,
          lastName VARCHAR(255) NOT NULL,
          firstName VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL UNIQUE,
          phoneNumber VARCHAR(50) NOT NULL
      );

#### Créez la table animal :

      CREATE TABLE animal (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          dateOfBirth DATE NOT NULL,
          species VARCHAR(255) NOT NULL,
          breed VARCHAR(255) NOT NULL,
          color VARCHAR(255) NOT NULL,
          weight DECIMAL(10, 2) NOT NULL,
          ownerId INT,
          FOREIGN KEY (ownerId) REFERENCES person(id) ON DELETE SET NULL
      );

#### Quittez MySQL :

    EXIT;

#### Dans le terminal vous n'avez plus qu'à intégrer les données en rentrant :

     mysql -u root -p < data-SQL.txt

#### Pour vérifier sur MySQL si les données ont bien été rentrée :

     SELECT * FROM person;
     SELECT * FROM animal;

### Paramétrage des variables d'environnement

#### Dans le dossier backend, créez un fichier .env et ajoutez les informations suivantes :

    MYSQL_USERNAME= (votre identifiant)
    MYSQL_PASSWORD= (votre mot-de-passe)
    MYSQL_DB_NAME= (le nom de votre base de donnée)
    MYSQL_PORT= (le port de votre base de donnée)
    PORT= (le port que vous souhaitez utiliser pour NestJS/GraphQL)

#### Démarrer le Backend (NestJS)

Allez dans le dossier backend :

      cd backend

### Installez les dépendances :

      npm install

#### Démarrez l'application NestJS :

    nest start --watch

    Ouvrez votre navigateur et accédez à http://localhost:(le PORT que vous avez défini). Vous devriez voir le message "Hello Tkorp".

#### Démarrer le Frontend (NextJS)

Allez dans le dossier frontend :

      cd frontend

#### Installez les dépendances :

      npm install

#### Créez un fichier .env dans le dossier frontend et ajoutez l'URL de votre API GraphQL :

      NEXT_PUBLIC_GRAPHQL_URI=http://localhost:(le PORT que vous avez défini précédemment)/graphql

#### Démarrez l'application NextJS :

    npm run dev

#### Ouvrez votre navigateur et allez sur http://localhost:3000 pour voir le frontend.

## Important : Par défaut, NextJS utilise le port 3000. Si vous modifiez ce port, n'oubliez pas de mettre à jour l'URL dans le fichier main.ts de votre backend pour qu'elle corresponde au nouveau port.
