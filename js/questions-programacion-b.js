export const questions = [
    {
        question: "1. Seleccione la opción que no es una propiedad de la programación orientada a objetos",
        options: ["Polimorfismo", "Abstracción", "Todas las opciones son correctas.", "Encapsulamiento"],
        answer: 2,
         explanation: "**[Respuesta - Página 14]** *Sus propiedades más importantes las podemos dividir en: Abstracción, Encapsulamiento, Modularidad, Jerarquía, Polimorfismo*"
    },
    {
        question: "2. ¿Cuál es el carácter especial que podemos utilizar en printf() para escribir un número real?",
        options: ["%d", "%f", "%s", "%c"],
        answer: 1,
        explanation: "**[Respuesta - Página 46]** *%f float decimales (-3.1, 0.1, 3. Real decimal*"
    },
     {
        question: "3. ¿Para sobreescribir un método de la clase padre en la clase hija, que condiciones debe tener?",
        options: ["Coincidir el número de parámetros.", "Todas las opciones anteriores son correctas", "Coincidir el tipo de todos los parámetros.", "Coincidir el nombre."],
        answer: 1,
        explanation: "**[Respuesta - Página 63]** *Debemos comprobar que la estructura del método sea la misma a la de la superclase.\n *Debe tener, no solo el mismo nombre, sino también el mismo número de argumentos y valor de retorno.*"
    },
    {
      question: "5. ¿Qué efecto tiene la palabra reservada final si lo encontramos delante de un método?",
        options: ["Es un método estático.", "Es un método abstracto.", "Es un método que no puede ser sobrescrito", "Es un método que pertenece a otra clase."],
        answer: 2,
        explanation: "**[Respuesta - Página 59]** *final: estos métodos no ofrecen la posibilidad de sobrescribirlos. Se pueden definir como métodos constantes que no admiten modificaciones.*"
    },
    {
         question: "6. ¿Qué instrucción encontramos encima de la implementación de un método que está sobrescribiendo a otro?",
        options: ["@param", "@super", "@override", "Ninguna de las opciones anteriores es correcta."],
        answer: 2,
        explanation: "**[Respuesta - Página 63]** *Adicionalmente, se incluirá la anotación @Override encima del método, la cual obligará al compilador a comprobar si se está realizando correctamente la sobrescritura del método.*"
    },
    {
        question: "7. El paso del mismo mensaje da como resultado diferente respuesta dependiendo de la clase a la que se envía. Esto se llama...",
        options: ["Herencia", "Interface", "Abstracción", "Polimorfismo"],
        answer: 3,
        explanation: "**[Respuesta - Página 14]** *Polimorfismo: nos va a permitir el envío de mensajes iguales a diferentes tipos de objetos. Solo se debe conocer la forma en la que debemos contestar a estos mensajes.*"
    },
     {
        question: "8. Java es un lenguaje",
        options: ["Todas las opciones anteriores son correctas", "Interpretado", "Orientado a objetos", "Multiplataforma"],
        answer: 0,
          explanation: "**[Respuesta - Página 7]** *Es un lenguaje compilado e interpretado... Es un lenguaje multiplataforma... Es un lenguaje orientado a objetos..."
    },
    {
       question: "9. Los constructores",
        options: ["Pueden no tener parámetros.", "Todas las respuestas son verdaderas", "Puede haber más de uno en una clase.", "Se llaman igual que la clase."],
          answer: 1,
            explanation: "**[Respuesta - Página 28]** *Generalmente son públicos, aunque en algunas ocasiones pueden ser privados... Tienen el mismo nombre que la clase... Pueden existir diversos constructores, dependiendo de la cantidad de parámetros que reciban.*"
   },
    {
        question: "10. String",
        options: ["Es un tipo de datos primitivo.", "Ninguna de las opciones es verdadera.", "Es una clase envolvente", "Es un operador."],
        answer: 1,
         explanation: "**[Respuesta - Página 74]** *String: NO es primitivo, es tipo objeto, de la biblioteca estándar de java.*"
    },
      {
        question: "11. Character",
        options: ["Es una clase envolvente", "Es un tipo de datos primitivo.", "Ninguna de las opciones anteriores es verdadera.", "Es un operador."],
        answer: 0,
          explanation: "**[Respuesta - Página 76]** *Character: Es una clase envolvente. *"
    },
    {
      question: "12. La herencia en JAVA:",
        options: ["Es múltiple para interfaces, pero no para clases", "Es múltiple para interfaces y clases.", "No puede ser múltiple ni para interfaces ni para clases.", "Es múltiple para clases, pero no para interfaces."],
          answer: 0,
            explanation: "**[Respuesta - Página 57]** *En Java la herencia es múltiple para interfaces, pero no para clases.*"
    },
    {
       question: "13. ¿Cuál es el carácter especial que podemos utilizar en printf() para escribir un número entero?",
        options: ["%c", "%s", "%d", "%f"],
          answer: 2,
            explanation: "**[Respuesta - Página 46]** *%d digitos enteros (-3,0,3) / Entero/decimal.*"
   },
   {
      question: "14. Seleccione la opción falsa sobre los destructores.",
        options: ["Los destructores son métodos que no devuelven ningún tipo de dato, ni siquiera void.", "Los destructores son métodos que no devuelven ningún tipo de dato, se debe indicar void como tipo de dato que devuelven", "Los destructores no tienen parámetros.", "En Java no existen los destructores."],
          answer: 1,
            explanation: "**[Respuesta - Página 101]** *En Java no existen los destructores como tal, por ser un tipo de lenguaje que ya se encarga de la eliminación o liberación de memoria que ocupa un objeto determinado a través del recolector de basura.*"
   },
   {
      question: "15. El método main",
        options: ["Es una interfaz.", "Es un método estático", "Es un método abstracto.", "Ninguna opción es correcta."],
          answer: 1,
            explanation: "**[Respuesta - Página 12]** *La clase que permite la entrada en Java puede tener cualquier nombre, pero contendrá una función llamada main. Esta será publica, estática, recibirá un array de Strings por parámetro y no devolverá ningún dato.*"
    },
   {
         question: "16. ¿Qué operador utilizamos para crear nuevos objetos en Java?",
        options: ["instanceof", "this", "new", "try"],
          answer: 2,
            explanation: "**[Respuesta - Página 33]** * new tipo de dato [tamaño];*"
   },
   {
      question: "17. ¿Qué modificador tendrá un método que puede ser accesible desde una clase de otro paquete?",
        options: ["protected", "private", "public", "Sin modificador."],
          answer: 2,
            explanation: "**[Respuesta - Página 35]** *Públicos (public). Engloba aquellos elementos a los que se puede acceder desde fuera de la clase y package. Todas las clases de nuestro aplicativo tendrán acceso completo a las funciones o atributos del objeto.*"
   },
    {
        question: "18. ¿Cuál de los siguientes elementos permite al usuario escribir en la aplicación gráfica creada con Swing?",
        options: ["JButton", "JTextField", "JRadioButton", "JLabel"],
        answer: 1,
        explanation: ""
    },
    {
         question: "19. Señale la opción con la que recorremos una lista de ArrayList.",
        options: ["for (int i = 0; i <= lista.size(); i++)", "for (int i = 0; i <= array.length; i++)", "for (int i = 0; i < lista.size(); i++)", "for (int i = 0; i < array.length; i++)"],
        answer: 2,
         explanation: "**[Respuesta - Página 79]** *for (int i = 0; i < lista.size(); i++)*"
   },
   {
      question: "20. A la hora de crear un menú con Swing, ¿cuál de los siguientes elementos es opcional?",
       options: ["JMenuBar", "JMenu", "JMenuSeparator", "JMenultem"],
        answer: 2,
          explanation: "**[Respuesta - Página 75]** *Separator (JSeparator): permite dividir las diferentes opciones. Aparte de todas estas opciones, también podemos añadir menús conceptuales o Popup Menú.*"
    },
    {
        question: "21. ¿Cuál de los siguientes métodos nos permite dividir una cadena en un array de cadenas?",
        options: ["charAt()", "trim()", "indexOf()", "split()"],
        answer: 3,
          explanation: "**[Respuesta - Página 75]** *String clase split()*"
    },
   {
        question: "22. Queremos añadir la letra C en la colección ArrayList letras, que tiene los elementos A, B, D, E. Como queremos que salga en la posición que le corresponde (entre el 2 y el 4), ¿cómo debemos realizarlo?",
       options: ["letras.add('C');", "letras.add(3, 'C');", "letras.add('C', 3);", "letras.add(2, 'C');"],
         answer: 3,
           explanation: "**[Respuesta - Página 79]** * ArrayList clase add(). * En este ejemplo, queremos añadir el elemento C en la posición 2, es decir, el tercer elemento, ya que, la primera posición del arraylist es el 0.*"
    },
    {
        question: "23. Si tengo la definición, int [] array = new int [100]; ¿cuál es la última posición del array?",
        options: ["99", "Ninguna de las opciones es correcta.", "101", "100"],
        answer: 0,
           explanation: "**[Respuesta - Página 32]** *En Java, el primer índice siempre va a ser 0, no 1. Los valores van desde 0 hasta el último, n-1*."
   },
   {
      question: "24. Las excepciones en Java:",
       options: ["Son un mecanismo para representar errores en tiempo de ejecución.", "Son un mecanismo para representar errores en tiempo de compilación.", "Pueden ser capturadas mediante un bloque try/catch.", "Son un mecanismo para representar errores en tiempo de ejecución, y además, pueden ser capturadas mediante un bloque try/catch"],
         answer: 3,
            explanation: "**[Respuesta - Página 105]** *Las excepciones son fragmentos de código que se diseñan para tener en cuenta los posibles errores que pudieran surgir durante la ejecución de un programa…  Cuando se producen errores en tiempo de ejecución y no se controlan, el programa finaliza de una manera brusca. En este apartado vamos a profundizar la forma de asegurarnos, pese a estos errores, de que el programa funciona de una forma correcta y, en el caso de que presente errores, controlarlos de alguna forma para que todo pueda seguir funcionando.*"
   },
     {
        question: "25. Sea el método \n ```java\npublic static void muestra (Double [] a) {\n  for (int i=0; i <= a.length; i++) {\n     System.out.print(\"---> \"+a[i]);\n  }\n}\n``` \nAl ejecutar estas dos sentencias se puede afirmar que: \n `Double [] array = {1.0, 2.0, 3.0, 4.0, 5.0};` \n`muestra(array);`",
       options: ["Se obtiene la cadena \"---> 5.0 4.0 3.0 2.0 1.0\"", "Se obtiene la cadena \"---> 1.0 2.0 3.0 4.0\"", "Se obtiene la cadena \"---> 1,0 2,0 3,0 4,0 5.0\"", "Se eleva la excepción ArrayIndexOutOfBoundsException."],
        answer: 3,
         explanation: "**[Respuesta - Página 79]** *La condición `i <= a.length` hace que el bucle intente acceder a un elemento del array con un índice que está fuera de los límites del array. Los índices de un array en Java van desde `0` hasta `longitud - 1`. Al intentar acceder al índice igual a `a.length`, se produce una excepción `ArrayIndexOutOfBoundsException`.*"
    },
    {
       question: "26. Las operaciones que se encuentran en el bloque finally",
        options: ["Ninguna de estas opciones es correcta.", "Se ejecutan tanto si se produce la excepción como si no se produce", "Sólo se ejecutan si no se produce la excepción.", "Sólo se ejecutan si se produce la excepción."],
          answer: 1,
            explanation: "**[Respuesta - Página 106]** *Bloque finally: fragmento de código que siempre se ejecuta tanto si se produce como si no se produce la excepción.*"
    },
     {
        question: "27. ¿Cuál de las siguientes opciones es una interfaz?",
        options: ["TreeMap", "HashMap", "Map", "Todas las opciones anteriores son interfaces."],
          answer: 2,
            explanation: "**[Respuesta - Página 79]** *A partir de la interfaz Collection se extienden otras interfaces, imponiendo más restricciones y dando más funcionalidades.*"
    },
    {
        question: "28. Selecciona la opción que no se corresponde con una colección en Java ¡!",
        options: ["ArrayList", "Properties", "Vector", "Iterator"],
        answer: 1,
          explanation: "**[Respuesta - Página 48]** *Properties: No se corresponde con una colección.*"
    },
    {
      question: "29. ¿Qué colección permite acceder a cualquier posición?",
        options: ["Ninguna de las opciones anteriores es correcta.", "Stack", "List", "Queue"],
         answer: 2,
           explanation: "**[Respuesta - Página 79]** *Las listas podemos definirlas como una secuencia de elementos que ocupan una posición determinada. Sabiendo la posición que ocupa cada uno, podemos insertar o eliminar un elemento en una posición determinada.*"
    },
    {
       question: "30. ¿Cómo recuperamos la clave conociendo el campo valor (Ordenador) en un HashMap?",
        options: ["hm.containsKey(“ORDENADOR\");", "hm.containsValue(“ORDENADOR\");", "Sólo es posible conocer el contenido del campo valor si conocemos la clave, pero no al revés.", "hm.contains(\"ORDENADOR\");"],
          answer: 2,
            explanation: "**[Respuesta - Página 79]**  *Los Maps permiten crear una colección de elementos repetibles indexados por clave única - valor.*"
   },
    {
       question: "31. Señale la opción con la que podemos sobrescribir el valor del tercer elemento de una lista, que vale D, para que tenga un valor C.",
       options: ["set (2, 'C');", "set (3, 'C');", "set ('D', 'C');", "El método set no se puede aplicar a la colección ArrayList."],
        answer: 0,
         explanation: "**[Respuesta - Página 79]** *set (int, Objeto): sobrescribe el elemento que se encuentra en la posición int por un objeto que se indica por parámetro.*"
   },
   {
       question: "32. ¿Cómo conocemos el número de caracteres de una cadena?",
        options: ["length()", "length", "size()", "Todas las opciones anteriores son correctas."],
          answer: 0,
            explanation: "**[Respuesta - Página 77]** *length(): devuelve el número de caracteres de la cadena.*"
   },
   {
        question: "33. ¿Cuál de estas clases no hereda de RuntimeException?",
        options: ["FileNotFoundException", "ClassCastException", "ArithmeticException", "IndexOutBoundException"],
          answer: 0,
          explanation: "**[Respuesta - Página 105]** *IOException: Excepciones comprobadas, errores que no son generados por el programador.  RunTimeException: Excepciones no comprobadas, errores por parte del programador.*"
    },
    {
        question: "34. ¿Qué hace este código?\\n ```java\\n Iterator <String> iterador = nombre. iterator();\\n        While (iterador. hasNext()) {\\n        String nombre = iterador. next ();\\n        }\\n```",
        options: ["Recorre una colección de tipo Set denominada nombre e imprime cada uno de los valores.", "Recorre una colección cualquiera denominada nombre e imprime cada uno de los valores.", "Recorre una colección de tipo Map denominada nombre e imprime cada uno de los valores.", "Recorre una colección de tipo List denominada nombre e imprime cada uno de los valores."],
        answer: 1,
         explanation: "**[Respuesta - Página 95]** *Un iterador es un componente existente en todas las colecciones que, independientemente del tipo que sean, nos permite recorrerlas utilizando un mismo mecanismo.*"
   },
     {
         question: "35.  Cuando trabajamos con bases de datos desde Java, debemos recordar cerrar",
         options: ["El resultado obtenido de la consulta.", "La conexión a la base de datos.", "Ambas son correctas", "Ambas son incorrectas."],
          answer: 2,
            explanation: "**[Respuesta - Página 154]** *Para poder llevar a cabo la conexión desde un código fuente Java hasta una base de datos debemos utilizar una serie de colecciones dentro de la API de SQL de Java, incluida en la versión 7 de dicho compilador.*"
    },
   {
        question: "36. ¿Qué elementos necesitamos para realizar la conexión a la base de datos?",
        options: ["La contraseña.", "Todas las respuestas son correctas", "El usuario.", "El nombre de la base de datos."],
          answer: 1,
            explanation: "**[Respuesta - Página 154]** *También necesitaremos los datos de la base de datos a conectar: driver JDBC, dirección de la base de datos, usuario y contraseña.*"
   },
    {
       question: "37. Las consultas SQL las guardamos en variables de tipo",
       options: ["int.", "boolean.", "String", "SQL."],
        answer: 2,
          explanation: ""
    },
   {
      question: "38. En las bases de datos orientadas a objetos se implementan",
        options: ["Sobrecarga de funciones.", "Ambas son incorrectas.", "Polimorfismo", "Ambas son correctas."],
          answer: 3,
            explanation: "**[Respuesta - Página 154]** *En las bases de datos orientadas a objetos se implementan: Sobrecarga de funciones, Polimorfismo.*"
    },
    {
        question: "39. Selecciona la opción falsa:",
        options: ["Una base de datos relacional representa la información en forma de tablas.", "En las bases de datos relacionales podemos almacenar objetos", "Un SGBD nos permite extraer información de una base de datos.", "En las bases de datos relacionales tendremos un campo clave que identifique el registro."],
          answer: 1,
            explanation: "**[Respuesta - Página 153]** *Una base de datos relacional es una base de datos que almacena la información del mundo real a través de tablas que se relacionan entre sí para organizar mejor la información... Todas los datos son almacenados en la base de datos en forma de relaciones que se visualizarán como una tabla, que a su vez tiene filas y columnas.*"
    },
   {
      question: "40. Entre las excepciones de bases de datos tenemos",
        options: ["Ambas son incorrectas.", "SQLException", "ExceptionSQL", "Ambas son correctas."],
          answer: 1,
            explanation: "**[Respuesta - Página 167]** *Para poder llevar a cabo la conexión desde un código fuente Java hasta una base de datos debemos utilizar una serie de colecciones dentro de la API de SQL de Java, incluida en la versión 7 de dicho compilador... Las excepciones de base de datos tiene una clase especifica para su manejo, llamada SQLException.*"
   },
   {
      question: "41. ¿Cuál de estos tipos de diagramas es de estructuras?",
      options: ["Diagrama de paquetes", "Diagrama de comunicación.", "Diagrama de actividad.", "Diagrama de secuencia."],
          answer: 0,
            explanation: "**[Respuesta - Página 179]** *Diagramas de estructuras (parte estática): Define los elementos que deben existir en un sistema de modelado. Diagrama de paquetes.*"
   },
    {
       question: "42. El método createStatement() tiene como parámetros:",
        options: ["La contraseña.", "El nombre de usuario.", "Ambas opciones son correctas.", "Ninguna opción es correcta"],
        answer: 3,
         explanation: "**[Respuesta - Página 154]** * El método createStatement() no tiene parámetros.*"
   },
   {
        question: "43. El método executeQuery() tiene como parámetros:",
        options: ["Ambas opciones son correctas.", "Ninguna opción es correcta", "La petición SQL.", "La contraseña."],
          answer: 1,
            explanation: "**[Respuesta - Página 154]** * El método executeQuery() no tiene parámetros.*"
    },
    {
        question: "44. Para la conexión a una base de datos",
        options: ["Ambas opciones son incorrectas.", "Además del usuario y contraseña, necesitamos el driver para realizar la conexión", "Además del nombre de la base de datos, necesitamos el driver para realizar la conexión.", "Ambas opciones son correctas."],
         answer: 1,
           explanation: "**[Respuesta - Página 154]** *También necesitaremos los datos de la base de datos a conectar: driver JDBC, dirección de la base de datos, usuario y contraseña.*"
    },
    {
       question: "45. Selecciona la opción falsa sobre las bases de datos orientadas a objetos:",
        options: ["Necesitamos realizar conversiones para poder almacenar los objetos en las bases de datos orientadas a objetos", "En las bases de datos orientadas a objetos, se busca plasmar la realidad en la base de datos según la percibimos.", "En una base de datos orientada a objetos, los objetos tienen un único identificador.", "Los usuarios pueden definir junto con la estructura de la base de datos, las operaciones sobre los datos."],
          answer: 0,
            explanation: "**[Respuesta - Página 153]** * En las bases de datos orientadas a objetos, se busca plasmar la realidad en la base de datos según la percibimos.\nAdemás, los objetos que se utilizan en la base de datos pueden heredar los unos de los otros.\nFinalmente, los usuarios pueden definir junto con la estructura de la base de datos, las operaciones sobre los datos.*"
    },
    {
      question: "46. Señala la opción que no es un gestor de bases de datos relacionales para Java:",
        options: ["Db4o", "Obtetivity/DB.", "EyeDB.", "Todos son gestores de bases de datos relacionales."],
          answer: 0,
            explanation: "**[Respuesta - Página 100]**  *Db4o: Es un gestor de datos orientado a objetos.*"
    },
    {
      question: "47. Señala la opción falsa",
        options: ["En las bases de datos orientadas a objetos existen dos tipos de herencia.", "Los objetos de las bases de datos orientadas a objetos no desaparecen al terminar la ejecución del programa.", "En las bases de datos orientadas a objetos no se pueden crear relaciones muchos a muchos sin necesidad de crear entidades intermedias.", "Las bases de datos orientadas a objetos permiten almacenar atributos multivaluados."],
         answer: 2,
           explanation: "**[Respuesta - Página 178]** *En las bases de datos orientadas a objetos no se pueden crear relaciones muchos a muchos sin necesidad de crear entidades intermedias.*"
    },
    {
        question: "48. ¿Cuál de estos tipos de diagramas es de estructuras?",
        options: ["Diagrama de casos de uso.", "Diagrama de objetos.", "Diagrama de tiempo.", "Diagrama de secuencia."],
          answer: 1,
            explanation: "**[Respuesta - Página 179]** *Diagramas de estructuras (parte estática): Diagrama de objetos.*"
    }
];