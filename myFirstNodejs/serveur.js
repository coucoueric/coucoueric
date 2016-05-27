//serveur.js
// copyright by Openclassroom, but pour étudier et comprendre le mécanisme de fonction serveur web
/*
require effectue un appel à une bibliothèque de Node.js,
ici la bibliothèque "http" qui nous permet de créer un serveur web. 

la plupart pouvant être téléchargées avec NPM, le gestionnaire de paquets de Node.js

*/
var http = require('http');


/*
La variable http représente un objet JavaScript qui va nous permettre de lancer un serveur web. 
C'est justement ce qu'on fait avec :  var serveur = http.createServer();

On appelle la fonction createServer() contenue dans l'objet http
et plus
on enregistre ce serveur dans la variable server. 

*/
/*
var server = http.createServer()
// la fonction createServer() prend un paramètre, et que ce paramètre est une fonction: function()

//La fonction de callback est donc appelée à chaque fois qu'un visiteur se connecte à notre site. 
//Elle prend 2 paramètres   function(req,res)
	{
		//On renvoie le code 200 dans l'en-tête de la réponse, 
		//qui signifie au navigateur "OK tout va bien"
	 req.write(200);
	
		//on termine la réponse (avec end()) en envoyant le message de notre choix au navigateur. 
		//Ici, on n'envoie même pas de HTML, juste du texte brut.
	 res.end('Salut, bienvenue à tous!');
});
//Tout le code ci-dessus correspond à l'appel à createServer(). 
//Il comprend en paramètre la fonction à exécuter quand un visiteur se connecte à notre site.
*/

//Enfin, le serveur est lancé et "écoute" sur le port 8080 avec l'instruction
//On évite d'utiliser ici le port 80 qui est normalement réservé aux serveurs web, 
//car celui-ci est peut-être déjà utilisé par notre machine.




// Code identique au précédent

var instructionsNouveauVisiteur = function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
}

var server = http.createServer(instructionsNouveauVisiteur);
server.listen(8080);


/*
Pour tester votre premier serveur, rendez-vous dans la console et tapez:

node serveur?js

*/