* Toda la data de la aplicación se encuentra en una estructura previamente DEFINIDA.
* Toda la informacion se encontrará almacenada en el STORE.
* El STORE jamás se modifica de forma directa.
* Interacciones de usuario y/o código dispara acciones que describen que sucedió.
* El valor actual de la información de la aplicación se llamada estado - 'STATE'.
* Un nuevo estado es creado en base a la combinación de un viejo estado y a una accion por una función llamada 'REDUCER'.


ACTION:
* Es la única fuente de información que se envía por interacciones de usuario o programa.
* Por lo general, se busca que las acciones sean lo más simples posibles.
* Una ACTION tiene únicamente 2 propiedades:
    - type -> COMPLETAR_TAREA
    - payload -> Es la menor cantidad posible de información para realizar dicha tarea (OPCIONAL)


REDUCER:
* Es una función que únicamente recibe 2 argumentos y siempre debe retornar un estado.
* Los 2 argumentos que recibe son:
    - oldState (Estado actual de la aplicación).
    - ACTION (Objeto plano que indica que hay que hacer).

STATE:
* Es de solo lectura.
* Nunca se mutara de forma directa.
* Hay funciones prohíbidas de javascript:
    - Push.
    - Manipulación directa del objeto oldState.

STORE:
Es un objeto que tiene las siguientes características:
* Contiene el estado actual de la aplicación.
* Permite la lectura del estado via: getState().
* Permite crear un nuevo estado utilizando: dispatch (ACTION).
* Permite notificar los cambios via suscribe().