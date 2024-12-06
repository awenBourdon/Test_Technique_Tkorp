
    <h1>Guide d'installation et de configuration du projet</h1>

    <h2>Technologies utilisées</h2>
    <div class="tech-stack">
        <ul>
            <li><strong>TypeScript</strong>: Un sur-ensemble de JavaScript avec typage statique</li>
            <li><strong>NestJS</strong>: Un framework Node.js progressif pour la construction d'applications côté serveur</li>
            <li><strong>NextJS</strong>: Un framework React pour le rendu côté serveur</li>
            <li><strong>MySQL</strong>: Système de gestion de base de données relationnelle</li>
            <li><strong>GraphQL</strong>: Un langage de requêtes pour les APIs</li>
            <li><strong>Tailwind CSS</strong>: Un framework CSS utilitaire-first</li>
            <li><strong>Framer Motion</strong>: Une bibliothèque d'animations pour React</li>
        </ul>
    </div>

    <h2>Installation</h2>
    <p>Suivez les étapes ci-dessous pour configurer le projet localement.</p>

    <h3>1. Installer les dépendances</h3>
    <p>Assurez-vous d'avoir les outils suivants installés :</p>
    <ul>
        <li><strong>Node.js</strong>: Téléchargez-le et installez-le depuis <a href="https://nodejs.org" target="_blank">ici</a>.</li>
        <li><strong>NestJS CLI</strong>: Installez-le globalement en utilisant la commande suivante :
            <pre><code>npm install -g @nestjs/cli</code></pre>
        </li>
        <li><strong>MySQL</strong>: Installez MySQL si ce n'est pas déjà fait. Vous pouvez le télécharger depuis <a href="https://dev.mysql.com/downloads/installer/" target="_blank">ici</a>.</li>
    </ul>

    <h3>2. Configurer MySQL</h3>
    <p>Une fois MySQL installé, ouvrez votre terminal et suivez ces étapes :</p>

    <ol>
        <li>Créez une base de données appelée <code>technical_test</code> avec la commande suivante :
            <pre><code>CREATE DATABASE technical_test;</code></pre>
        </li>
        <li>Connectez-vous à MySQL :
            <pre><code>mysql -u root -p</code></pre>
        </li>
        <li>Sélectionnez la base de données :
            <pre><code>USE technical_test;</code></pre>
        </li>
        <li>Créez la table <code>person</code> :
            <pre><code>CREATE TABLE person (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lastName VARCHAR(255) NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phoneNumber VARCHAR(50) NOT NULL
);</code></pre>
        </li>
        <li>Créez la table <code>animal</code> :
            <pre><code>CREATE TABLE animal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    dateOfBirth DATE NOT NULL,
    species VARCHAR(255) NOT NULL,
    breed VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    weight DECIMAL(10, 2) NOT NULL,
    ownerId INT,
    FOREIGN KEY (ownerId) REFERENCES person(id) ON DELETE SET NULL
);</code></pre>
        </li>
        <li>Quittez MySQL :
            <pre><code>EXIT;</code></pre>
        </li>
    </ol>

    <h3>3. Configurer les variables d'environnement</h3>
    <p>Créez un fichier <code>.env</code> à la racine du dossier <strong>backend</strong> et ajoutez les variables suivantes :</p>
    <pre><code>MYSQL_USERNAME=root
MYSQL_PASSWORD=root123
MYSQL_DB_NAME=technical_test
MYSQL_PORT=3306
PORT=8000</code></pre>

    <h3>4. Lancer le Backend</h3>
    <p>Une fois MySQL et les variables d'environnement configurées, suivez ces étapes pour lancer le backend :</p>
    <ol>
        <li>Allez dans le dossier <strong>backend</strong> :
            <pre><code>cd backend</code></pre>
        </li>
        <li>Installez les dépendances :
            <pre><code>npm install</code></pre>
        </li>
        <li>Démarrez le serveur NestJS avec la commande suivante :
            <pre><code>nest start --watch</code></pre>
        </li>
        <li>Ouvrez votre navigateur et allez sur <code>http://localhost:8000</code> pour vérifier que le serveur fonctionne. Vous devriez voir "Hello Tkorp".</li>
    </ol>

    <h3>5. Lancer le Frontend</h3>
    <p>Pour lancer le frontend (NextJS), suivez ces étapes :</p>
    <ol>
        <li>Allez dans le dossier <strong>frontend</strong> :
            <pre><code>cd frontend</code></pre>
        </li>
        <li>Installez les dépendances :
            <pre><code>npm install</code></pre>
        </li>
        <li>Créez un fichier <code>.env</code> dans le dossier <strong>frontend</strong> avec ce contenu :
            <pre><code>NEXT_PUBLIC_GRAPHQL_URI=http://localhost:8000/graphql</code></pre>
        </li>
        <li>Démarrez le serveur de développement NextJS :
            <pre><code>npm run dev</code></pre>
        </li>
        <li>Allez sur <code>http://localhost:3000</code> pour voir le frontend en action.</li>
    </ol>

    <h3>Important</h3>
    <p><span class="important">Par défaut, NextJS utilise le port 3000. Si vous changez ce port dans l'application <code>frontend</code>, n'oubliez pas de mettre à jour l'URL dans <code>main.ts</code> dans la configuration du backend.</span></p>

    <h2>Conclusion</h2>
    <p>Voilà ! Votre application devrait maintenant être en fonctionnement avec un backend NestJS, une base de données MySQL et un frontend NextJS. Vous pouvez commencer à travailler sur votre projet ou personnaliser celui-ci selon vos besoins.</p>

