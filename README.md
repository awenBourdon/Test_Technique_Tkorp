
  <h1>Nom du Projet</h1>
  <p>Une brève description de ton projet.</p>

  <hr>

  <h2>Prérequis</h2>
  <p>Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :</p>

  <h3>1. Installer Node.js</h3>
  <p>Ce projet utilise <strong>Node.js</strong>, donc vous devez l'avoir installé. Vous pouvez télécharger la dernière version de Node.js depuis <a href="https://nodejs.org/">le site officiel de Node.js</a>.</p>

  <h4>Installation sur macOS/Linux :</h4>
  <pre>
    # Sur macOS ou Linux, vous pouvez utiliser Homebrew (macOS) ou télécharger directement l'installateur
    # Exemple pour installer via Homebrew sur macOS
    brew install node
  </pre>

  <h4>Installation sur Windows :</h4>
  <p>Téléchargez et exécutez l'installateur depuis <a href="https://nodejs.org/en/download/">ici</a>.</p>
  <p>Après l'installation, vérifiez que Node.js et npm sont bien installés en exécutant les commandes suivantes dans votre terminal ou invite de commande :</p>
  <pre>
    node -v
    npm -v
  </pre>

  <h3>2. Installer Nest CLI</h3>
  <p>NestJS nécessite l'outil en ligne de commande <strong>Nest CLI</strong> pour créer et gérer les projets. Vous pouvez l'installer globalement via npm :</p>
  <pre>
    npm install -g @nestjs/cli
  </pre>
  <p>Une fois installé, vous pouvez vérifier la version de Nest CLI avec la commande suivante :</p>
  <pre>
    nest --version
  </pre>

  <h3>3. Installer MySQL</h3>
  <p>Ce projet utilise <strong>MySQL</strong> comme base de données. Si vous ne l'avez pas encore, vous pouvez l'installer sur votre machine en suivant les instructions ci-dessous :</p>

  <h4>Installation sur macOS/Linux :</h4>
  <p>Sur macOS, vous pouvez installer MySQL via Homebrew :</p>
  <pre>
    brew install mysql
  </pre>
  <p>Sur Linux, vous pouvez installer MySQL via le gestionnaire de paquets de votre distribution (par exemple <code>apt</code> pour Ubuntu) :</p>
  <pre>
    sudo apt update
    sudo apt install mysql-server
  </pre>

  <h4>Installation sur Windows :</h4>
  <ol>
    <li>Téléchargez et installez MySQL depuis <a href="https://dev.mysql.com/downloads/installer/">le site officiel de MySQL</a>.</li>
    <li>Suivez les instructions de l'installateur, en prenant soin de noter votre mot de passe root.</li>
    <li>Après l'installation, vous pouvez démarrer MySQL via l'invite de commande :</li>
    <pre>
      mysql -u root -p
    </pre>
    <li>Créez une base de données pour le projet :</li>
    <pre>
      CREATE DATABASE technical_test;
    </pre>
  </ol>

  <hr>

  <h2>Installation du projet</h2>
  <p>Suivez les étapes ci-dessous pour installer et configurer le projet sur votre machine.</p>

  <h3>1. Clonez ce dépôt</h3>
  <pre>
    git clone https://github.com/votre-utilisateur/votre-repository.git
  </pre>

  <h3>2. Installez les dépendances</h3>
  <p>Naviguez dans le répertoire du projet cloné et installez les dépendances :</p>
  <pre>
    cd votre-repository
    npm install
  </pre>

  <h3>3. Configurez les variables d'environnement</h3>
  <p>Créez un fichier <code>.env</code> à la racine de votre projet et ajoutez-y les variables suivantes pour configurer votre base de données :</p>
  <pre>
    MYSQL_USERNAME=root
    MYSQL_PASSWORD=root123
    MYSQL_DATABASE=technical_test
    MYSQL_HOST=localhost
    MYSQL_PORT=3306
    NEXT_PUBLIC_GRAPHQL_URI=http://localhost:8000/graphql
  </pre>
  <p><strong>Note : </strong>Vous pouvez modifier ces valeurs en fonction de votre configuration locale.</p>

  <h3>4. Lancer le serveur backend (NestJS)</h3>
  <p>Dans le répertoire du backend, lancez le serveur NestJS avec la commande suivante :</p>
  <pre>
    npm run start:dev
  </pre>
  <p>Cela démarre le serveur backend en mode développement, généralement accessible à l'adresse <code>http://localhost:3000</code>.</p>

  <h3>5. Lancer le serveur frontend (Next.js)</h3>
  <p>Dans le répertoire du frontend, lancez le serveur Next.js avec la commande suivante :</p>
  <pre>
    npm run dev
  </pre>
  <p>Cela démarre le serveur frontend en mode développement, généralement accessible à l'adresse <code>http://localhost:3000</code> ou <code>http://localhost:8000</code> selon la configuration.</p>

  <hr>

  <h2>Utilisation</h2>
  <p>Une fois les serveurs backend et frontend démarrés, vous pouvez commencer à interagir avec l'application via l'interface frontend (Next.js) ou effectuer des requêtes GraphQL via l'endpoint <code>/graphql</code> du serveur backend (NestJS).</p>

  <hr>

  <h2>Conclusion</h2>
  <p>Vous avez maintenant installé et configuré le projet avec Node.js, NestJS, MySQL et Next.js. Vous pouvez commencer à développer et personnaliser l'application en fonction de vos besoins.</p>

  <p><strong>Note :</strong> N'hésite pas à me faire savoir si tu as des questions ou si quelque chose ne fonctionne pas comme prévu.</p>
