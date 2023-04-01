# Chat público

Lee esto hasta el final antes de empezar.

He publicado un backend para un chat público básico en https://vulnerable-public-chat-staging.up.railway.app/

En este respositorio entrontrarás un fichero que puedes importar en Insomnia. En el dispones de múltiples peticiones preconfiguradas para la API, tanto para realizarlas en un clon local del backend como en el servicio desplegado en Internet en la dirección indicada en el párrafo anterior.

Mirando el código del backend y la información proporcionada para Insomnia, puedes construir tu propio frontend para poder chatear en la aplicación.

Antes de empezar a programar, asegurate de que entiendes cómo funcionar el backend:

* Para empezar, es necesario que crees una cuenta de usuario.
* Puedes ver los nombres de los usuarios existentes para buscar un nombre que no esté ya en uso.
* Para poder enviar o ver los mensajes, tienes que obtener un token de autorización usando tu nombre de usuario y contraseña.
* Ese token de autorización tiene una validez de una hora. Ha de acompañar todas las peticiones al backend en el encabezado Authorization indicando un tipo bearer. Cuando el token ya no sea válido, tendrás que solicitar uno nuevo.

Puedes ver cómo se aplica todo lo anterior y verlo funcionando usando la aplicación Insomnia e importanto en ella el fichero Insomnia.json.

Para empezar a escribir tu frontend, recuerda:
* Soluciona los componentes de uno en uno. Ya te ocuparas de componer la aplicación cuando tengas todos los componentes funcionando.
* Cada componente ha de ocuparse de una tarea específica y sólo de eso:
  * Obtener y mostrar la lista de usuarios.
  * Permitir proporcionar los datos para crear un nuevo usuario y crearlo en el backend.
  * Solicitar usuario y contraseña para pedir un token de autorización al backend.
  * Obtener los mensajes existentes en el chat y mostrarlos.
  * Permitir escribir un mensaje para y enviarlo al chat.
  * BONUS: Mostrar el nombre del usuario que envió un mensaje en base a su id.
* No te preocupes si no puedes unificar todos los componentes para que se comporten como una aplicación. Para poder hacerlo de forma limpia y sencilla hemos de usar el hook useContext en React o los stores en Svelte.
* Si te atascas, puedes buscar ayuda en el canal de Telegram al que puedes unirte en la página t.me/+VX5ZGOwFOgPACeMm 

Suerte!