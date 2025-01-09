export const questions = [
  {
    id: 1,
    question: "1. PREGUNTA: ¿Qué se utiliza en la declaración de un procedimiento o función para indicar que un parámetro es de entrada y no se modificará en el procedimiento?",
    options: ["IS-25", "IN", "OUT", "IN OUT"],
    answer: 1,
    explanation:
      '**[Respuesta]** La palabra clave "IN" se utiliza para declarar parámetros que son de entrada y cuyos valores no se modificarán dentro del procedimiento o función.',
  },
  {
    id: 2,
    question: "2. PREGUNTA: ¿Qué tipo de trigger se ejecuta antes de que se realice la operación de la base de datos?",
    options: ["AFTER", "INSTEAD OF", "BEFORE", "DURING"],
    answer: 2,
    explanation:
      "**[Respuesta]** Los triggers BEFORE se ejecutan antes de que se complete la operación en la base de datos.",
  },
  {
    id: 3,
    question: "3. PREGUNTA: ¿Cuál es la principal diferencia entre un procedimiento y una función en PL/SQL?",
    options: [
      "Los procedimientos no pueden contener sentencias SQL, mientras que las funciones sí.",
      "Los procedimientos no pueden ser reutilizados, mientras que las funciones sí.",
      "Los procedimientos pueden dar o no un valor de salida, mientras que las funciones siempre devuelven un valor.",
      "Los procedimientos pueden tener parámetros, mientras que las funciones no.",
    ],
    answer: 2,
    explanation:
      "**[Respuesta]** La diferencia clave entre procedimientos y funciones radica en que las funciones siempre devuelven un valor, mientras que los procedimientos no siempre tienen un valor de retorno.",
  },
  {
    id: 4,
    question:
      "4. PREGUNTA: ¿Cuál de las siguientes estructuras de control se utiliza en condicionales, para ejecutar un conjunto de instrucciones dependiendo de si se cumple una condición?",
    options: [
      "Estructura repetitiva básica.",
      "Estructura WHILE.",
      "Sentencia CASE.",
      "Todas las anteriores.",
    ],
    answer: 2,
    explanation: "",
  },
  {
    id: 5,
    question:
      "5. PREGUNTA: ¿Qué excepción se produce si una sentencia SELECT devuelve más de una fila en una operación que espera un único registro?",
    options: ["TOO_MANY_ROWS", "TWO_MORE_ROWS", "NO_DATA_FOUND", "ZERO_DIVIDE"],
    answer: 0,
    explanation: "**[Respuesta]** TOO_MANY_ROWS",
  },
  {
    id: 6,
    question:
      "6. PREGUNTA: ¿Cuál de las siguientes afirmaciones sobre los roles en una base de datos es cierta?",
    options: [
      "Los roles permiten asignar permisos a nivel de columna.",
      "Los roles son exclusivos de MySQL y no se utilizan en Oracle.",
      "Los roles son conjuntos de privilegios que se pueden asignar a usuarios.",
      "Los roles simplifican la administración de usuarios, pero no pueden contener privilegios.",
    ],
    answer: 2,
    explanation:
      "**[Respuesta]** Los roles son conjuntos de privilegios que se pueden asignar a usuarios.",
  },
  {
    id: 7,
    question:
      "7. PREGUNTA: ¿Cuál es el propósito de la sentencia SET SERVEROUTPUT ON en Oracle Database?",
    options: [
      "Desactivar la visualización de mensajes en la consola.",
      "Habilitar la ejecución de bloques PL/SQL.",
      "Definir variables de entorno en la base de datos.",
      "Activar la visualización de mensajes en la consola.",
    ],
    answer: 3,
    explanation:
      "**[Respuesta]** La sentencia SET SERVEROUTPUT ON se utiliza para activar la visualización de mensajes en la consola de Oracle Database, lo que permite ver los resultados de las sentencias dbms_output.put_line.",
  },
  {
    id: 8,
    question:
      "8. PREGUNTA: ¿Cuál es uno de los beneficios clave de utilizar vistas personalizadas en una base de datos?",
    options: [
      "Las vistas personalizadas mejoran la seguridad de la base de datos al ocultar todas las tablas subyacentes.",
      "Las vistas personalizadas facilitan la eliminación de registros duplicados de las tablas subyacentes.",
      "Las vistas personalizadas aceleran las consultas al evitar la necesidad de escribir consultas SQL complejas.",
      "Las vistas personalizadas permiten almacenar datos de manera eficiente y reducen la necesidad de tablas físicas."
    ],
    answer: 0,
    explanation:
      "**[Respuesta]** Una de las ventajas clave de las vistas personalizadas es que permiten ocultar la estructura y los detalles internos de las tablas subyacentes, lo que mejora la seguridad de la base de datos. Los usuarios pueden acceder a los datos a través de vistas sin necesidad de conocer la estructura exacta de las tablas o tener acceso directo a ellas. Esto proporciona un control de acceso más preciso y evita que los usuarios realicen operaciones no autorizadas en las tablas subyacentes, lo que contribuye a la seguridad general de la base de datos.",
  },
  {
    id: 9,
    question: "9. PREGUNTA: ¿Cuál de las siguientes afirmaciones es cierta sobre los cursores implícitos en PL/SQL?",
    options: [
      "Los cursores implícitos no pueden utilizarse en triggers.",
      "Los cursores implícitos se cierran automáticamente al final del bloque PL/SQL.",
      "Los cursores implícitos deben ser declarados e inicializados antes de ser utilizados.",
      "Los cursores implícitos se utilizan exclusivamente en funciones."
    ],
    answer: 1,
    explanation: "**[Respuesta]** Los cursores implícitos en PL/SQL se utilizan automáticamente para manejar consultas en bloques PL/SQL y se cierran automáticamente al final del bloque, lo que simplifica la gestión de cursores en comparación con los cursores explícitos.",
  },
  {
    id: 10,
    question: "10. PREGUNTA: ¿Qué tipo de cursor se utiliza para operaciones SELECT INTO que devuelven un único registro?",
    options: ["No se utiliza un cursor", "Explícito", "Declarado", "Implícito"],
    answer: 3,
    explanation: "**[Respuesta]** Implícito",
  },
  {
    id: 11,
    question: "11. PREGUNTA: Para poder crear tipos de objeto se debe hacer uso de la sentencia:",
    options: ["CREATE OBJECT", "CREATE TYPE", "CREATE OBJECT TYPE", "CREATE NAME TYPE"],
    answer: 1,
    explanation: "**[Respuesta]** CREATE TYPE",
  },
  {
    id: 12,
    question: "12. PREGUNTA: Si desea obtener el valor real de un objeto al que apunta una referencia, ¿Qué palabra reservada usaría?",
    options: ["DEREF", "POINTER", "ACCESS", "REF"],
    answer: 0,
    explanation: "**[Respuesta]** DEREF se utiliza para obtener el valor de un objeto al que apunta una referencia.",
  },
  {
    id: 13,
    question: "13. PREGUNTA: Selecciona la opción incorrecta sobre las características de la herencia:",
    options: [
      "Pueden crearse subtipos de objetos a partir de otros",
      "Los subtipos no pueden definir sus propios atributos y métodos",
      "Gracias a la herencia se pueden crear superclases abstractas",
      "Se puedan crear subclases más específicas",
    ],
    answer: 1,
    explanation:
      "**[Respuesta]** Los subtipos no pueden definir sus propios atributos y métodos",
  },
  {
    id: 14,
    question:
      "14. PREGUNTA: ¿Cuál de las siguientes afirmaciones es verdadera sobre una variable de tipo VARRAY en Oracle PL/SQL?",
    options: [
      "Los elementos de un VARRAY deben ser del mismo tipo de datos.",
      "Se declaran utilizando la palabra clave NESTED TABLE.",
      "Los VARRAYs siempre ocupan una cantidad fija de espacio en memoria.",
      "Pueden tener un número variable de elementos.",
    ],
    answer: 0,
    explanation:
      "**[Respuesta]** En un VARRAY (Variable Array), todos los elementos deben ser del mismo tipo de datos, y el número de elementos se define cuando se declara el VARRAY.",
  },
  {
    id: 15,
    question: "15. PREGUNTA: Identifica cuál es el programa de desarrollo en Oracle para bases de datos:",
    options: ["SQL developer", "LinQ", "MySQL", "SQLi"],
    answer: 0,
    explanation: "**[Respuesta]** SQL developer",
  },
  {
    id: 16,
    question: "16. PREGUNTA: Centrándonos en las colecciones de objetos, selecciona la respuesta correcta:",
    options: [
      "Son tablas anidadas",
      "Es un grupo de elementos del mismo tipo",
      "Tienen atributos atómicos",
      "Ninguna de las respuestas es correcta"
    ],
    answer: 1,
    explanation: "**[Respuesta]** Es un grupo de elementos del mismo tipo",
  },
  {
    id: 17,
    question: "17. PREGUNTA: ¿Qué es el encapsulamiento en la programación orientada a objetos?",
    options: [
      "El mecanismo para agrupar atributos y métodos dentro de una clase.",
      "La capacidad de definir múltiples funciones con el mismo nombre.",
      "La herencia de atributos y métodos de una superclase.",
      "La capacidad de tratar objetos derivados como si fueran de su superclase."
    ],
    answer: 0,
    explanation: "**[Respuesta]** El encapsulamiento se refiere a la agrupación de datos (atributos) y acciones (métodos) en una unidad lógica llamada clase.",
  },
  {
    id: 18,
    question: "18. PREGUNTA: ¿Qué representa el tipo REF en una base de datos objeto-relacional?",
    options: [
      "Una función para acceder a objetos.",
      "Un tipo de dato básico.",
      "Un objeto duplicado.",
      "Un puntero a un objeto."
    ],
    answer: 3,
    explanation: "**[Respuesta]** REF actúa como un puntero que contiene el OID de un objeto.",
  },
  {
    id: 19,
    question: "19. PREGUNTA: Se utiliza el polimorfismo cuando...",
    options: [
      "una clase derivada debe verse como la clase principal.",
      "una clase secundaria de verse como una clase derivada.",
      "una clase principal debe verse como una clase derivada.",
      "una clase derivada debe verse como una clase secundaria."
    ],
    answer: 0,
    explanation:
      "**[Respuesta]** El polimorfismo es un concepto fundamental en la programación orientada a objetos que permite que los objetos de clases derivadas se comporten como objetos de la clase principal.",
  },
  {
    id: 20,
    question: "20. PREGUNTA: ¿Qué cláusula se utiliza para especificar la superclase en una definición de tipo objeto?",
    options: ["OVER", "SUPER", "ABOVE", "UNDER"],
    answer: 3,
    explanation: "**[Respuesta]** La cláusula UNDER se utiliza para especificar la superclase de un tipo objeto en bases de datos objeto-relacionales.",
  },
  {
    id: 21,
    question: "21. PREGUNTA: ¿Cuál es el propósito de los perfiles de usuario en una base de datos?",
    options: [
      "Definir el nombre de usuario y la contraseña.",
      "Establecer restricciones y límites para el uso de la base de datos por parte de un usuario.",
      "Controlar el acceso a la base de datos en función de la dirección IP del usuario.",
      "Asignar roles a los usuarios."
    ],
    answer: 1,
    explanation: "**[Respuesta]** Los perfiles de usuario se utilizan para definir restricciones y límites, como cuotas de espacio o límites de tiempo de sesión, para el uso de la base de datos por parte de un usuario.",
  },
  {
    id: 22,
    question: "22. PREGUNTA: ¿Cuál de las siguientes afirmaciones sobre las vistas personalizadas en bases de datos es correcta?",
    options: [
      "Las vistas personalizadas son siempre físicas y almacenan datos en una tabla.",
      "Las vistas personalizadas son objetos virtuales que muestran datos de una o varias tablas, pero no almacenan datos por sí mismas.",
      "Las vistas personalizadas se utilizan para eliminar datos de las tablas subyacentes.",
      "Las vistas personalizadas son similares a las tablas, pero no permiten operaciones de consulta."
    ],
    answer: 1,
    explanation: "**[Respuesta]** Las vistas personalizadas, también conocidas como vistas, son consultas predefinidas almacenadas en la base de datos que permiten a los usuarios acceder y consultar datos desde una o varias tablas como si fueran una sola tabla virtual. Aunque las vistas proporcionan una representación personalizada de los datos, no almacenan datos físicamente en sí mismas. En cambio, actúan como consultas guardadas que se ejecutan dinámicamente cuando se accede a ellas.",
  },
  {
    id: 23,
    question: "23. PREGUNTA: ¿Cuál de las siguientes afirmaciones es cierta acerca de los privilegios en una base de datos?",
    options: [
      "Los privilegios solo se aplican a los administradores de la base de datos.",
      "Los privilegios permiten a los usuarios realizar acciones específicas en objetos de la base de datos.",
      "Los privilegios solo se pueden asignar de manera explícita, no a través de roles.",
      "Los privilegios son irrelevantes para la seguridad de la base de datos."
    ],
    answer: 1,
    explanation: "**[Respuesta]** Los privilegios en una base de datos son permisos que se otorgan a los usuarios para realizar acciones específicas en objetos de la base de datos, como insertar, actualizar, eliminar o consultar datos. Estos privilegios son fundamentales para la seguridad y la gestión de la base de datos, ya que permiten controlar quién puede realizar qué acciones.",
  },
  {
     id: 24,
     question: "24. PREGUNTA: ¿Cuál es uno de los beneficios clave de utilizar vistas personalizadas en una base de datos?",
     options: [
       "Las vistas personalizadas mejoran la seguridad de la base de datos al ocultar todas las tablas subyacentes.",
       "Las vistas personalizadas permiten almacenar datos de manera eficiente y reducen la necesidad de tablas físicas.",
       "Las vistas personalizadas facilitan la eliminación de registros duplicados de las tablas subyacentes.",
       "Las vistas personalizadas aceleran las consultas al evitar la necesidad de escribir consultas SQL complejas."
     ],
     answer: 0,
     explanation: "**[Respuesta]** Una de las ventajas clave de las vistas personalizadas es que permiten ocultar la estructura y los detalles internos de las tablas subyacentes, lo que mejora la seguridad de la base de datos. Los usuarios pueden acceder a los datos a través de vistas sin necesidad de conocer la estructura exacta de las tablas o tener acceso directo a ellas. Esto proporciona un control de acceso más preciso y evita que los usuarios realicen operaciones no autorizadas en las tablas subyacentes, lo que contribuye a la seguridad general de la base de datos.",
   },
  {
    id: 25,
    question: "25. PREGUNTA: Una de las principales ventajas de la programación orientada a objetos (POO) es...",
    options: [
      "la inserción de estructuras repetitivas.",
      "la inserción de condicionales.",
      "Todas las respuestas son correctas.",
      "la herencia."
    ],
    answer: 3,
    explanation: "**[Respuesta]** la herencia.",
  },
  {
    id: 26,
    question: "26. PREGUNTA: ¿Cuál es la principal diferencia entre un procedimiento y una función en PL/SQL?",
    options: [
      "Los procedimientos pueden dar o no un valor de salida, mientras que las funciones siempre devuelven un valor.",
      "Los procedimientos no pueden contener sentencias SQL, mientras que las funciones sí.",
      "Los procedimientos no pueden ser reutilizados, mientras que las funciones sí.",
      "Los procedimientos pueden tener parámetros, mientras que las funciones no."
    ],
    answer: 0,
    explanation: "**[Respuesta]** La diferencia clave entre procedimientos y funciones radica en que las funciones siempre devuelven un valor, mientras que los procedimientos no siempre tienen un valor de retorno.",
  },
  {
    id: 27,
    question: "27. PREGUNTA: En relación con los métodos en objetos, selecciona la respuesta correcta:",
    options: [
      "Son punteros a un objeto",
      "Mejoramos la búsqueda de información",
      "Todas las respuestas son correctas",
      "Acciones que modelan el comportamiento de los objetos"
    ],
    answer: 3,
    explanation: "**[Respuesta]** Acciones que modelan el comportamiento de los objetos",
  },
  {
    id: 28,
    question: "28. PREGUNTA: Si queremos heredar en el objeto \"tipo_coche\" los campos el objeto \"tipo_vehiculo\" cual es la instrucción que nos falta siguiendo este código. CREATE OR REPLACE TYPE tipo_vehiculo AS OBJECT ( id_v NUMBER, make VARCHAR2(15), modelo VARCHAR2(15) ) NOT FINAL NOT INSTANTIABLE; / CREATE TYPE tipo_coche ____?____ tipo_vehiculo ( convertible CHAR(1) );",
    options: [
      "REFERENCE",
      "UNDER",
      "FROM",
      "WITH"
    ],
    answer: 1,
    explanation: "**[Respuesta]** UNDER",
  },
  {
    id: 29,
    question: "29. PREGUNTA: ¿Qué instrucción se usa para declarar un tipo como abstracto?",
    options: [
      "ABTRACT",
      "NOT INITIAL",
      "NOT INSTANTIABLE",
      "INSTANTIABLE"
    ],
    answer: 2,
    explanation: "**[Respuesta]** NOT INSTANTIABLE",
  },
  {
    id: 30,
    question: "30. PREGUNTA: ¿Cuál de las siguientes partes es requerida como obligatoria en un bloque de PL/SQL?",
    options: [
      "Parte ejecutable",
      "Parte de tratamiento de excepciones",
      "Parte de declaraciones",
      "Todas las anteriores"
    ],
    answer: 0,
    explanation: "**[Respuesta]** La parte ejecutable es la única parte requerida en un bloque lógico PL/SQL. Esta sección contiene las instrucciones de programación y es esencial para que el bloque tenga funcionalidad.",
  },
  {
    id: 31,
    question: "31. PREGUNTA: Estás desarrollando un sistema de gestión de inventario y decides usar un trigger para mantener un registro de las veces que un producto ha sido actualizado en la base de datos y poder rastrear las actualizaciones de productos. ¿Cuál de las siguientes opciones sería la mejor manera de implementar este trigger?",
    options: [
      "Crear un trigger AFTER UPDATE que incremente un contador cada vez que un producto es actualizado.",
      "Crear un trigger AFTER INSERT que incremente un contador cada vez que se añade un nuevo producto.",
      "Crear un trigger BEFORE UPDATE que almacene una copia del producto en una tabla de historial antes de que se realice cualquier cambio.",
      "Crear un trigger BEFORE DELETE que almacene una copia del producto en una tabla de historial antes de eliminarlo."
    ],
    answer: 2,
    explanation: "**[Respuesta]** Crear un trigger BEFORE UPDATE que almacene una copia del producto en una tabla de historial antes de que se realice cualquier cambio.es la más adecuada para mantener un registro de las veces que un producto ha sido actualizado. Al almacenar una copia del producto en una tabla de historial antes de que se realice cualquier cambio, se puede tener un registro completo de todas las versiones anteriores del producto. Las otras opciones no abordan directamente el requisito de rastrear actualizaciones de productos.",
  },
  {
    id: 32,
    question: "32. PREGUNTA: ¿Cuál de las siguientes afirmaciones es cierta acerca de las tablas anidadas (nested tables) en Oracle PL/SQL?",
    options: [
      "Pueden tener una estructura jerárquica de datos.",
      "Las tablas anidadas se declaran utilizando la palabra clave VARRAY.",
      "No se pueden almacenar en una base de datos Oracle.",
      "Las tablas anidadas son siempre de tamaño fijo."
    ],
    answer: 0,
    explanation: "**[Respuesta]** Las tablas anidadas son estructuras dinámicas que pueden contener una colección de elementos de diferentes tipos de datos, lo que les permite tener una estructura jerárquica o incluso elementos anidados dentro de ellas. No tienen un tamaño fijo y se pueden utilizar en una base de datos Oracle.",
  },
  {
    id: 33,
    question: "33. PREGUNTA: ¿Qué tipo de cursor se utiliza para operaciones SELECT INTO que devuelven un único registro?",
    options: [
      "Declarado",
      "Explícito",
      "No se utiliza un cursor",
      "Implícito"
    ],
    answer: 3,
    explanation: "**[Respuesta]** Implícito",
  },
   {
    id: 34,
    question: "34. PREGUNTA: SOLUCIONARIO. Las preguntas que vienen a continuación han sido extraidas del libro. Y las anteriores de los modelos de examen de años anteriores.",
    options: ["", "", "", ""],
    answer: 0,
    explanation: ""
  },
  {
    id: 35,
    question: "35. PREGUNTA: Indica el orden correcto que debemos seguir para instalar SQL Developer de Oracle.\na) Descargar, descomprimir, desempaquetar y ejecutar\nb) Descargar, desempaquetar, ejecutar y descomprimir\nc) Descargar, desempaquetar, descomprimir y ejecutar\nd) Desempaquetar, descargar, descomprimir y ejecutar",
    options: ["Descargar, descomprimir, desempaquetar y ejecutar", "Descargar, desempaquetar, ejecutar y descomprimir", "Descargar, desempaquetar, descomprimir y ejecutar", "Desempaquetar, descargar, descomprimir y ejecutar"],
    answer: 2,
    explanation: null
  },
  {
    id: 36,
    question: "36. PREGUNTA: Las conexiones a BBDD no utilizan nunca de contraseña, ya que esta podría deshabilitar el usuario principal del sistema.\na) Verdadero\nb) Falso",
    options: ["Verdadero", "Falso"],
    answer: 1,
    explanation: null
  },
  {
    id: 37,
    question: "37. PREGUNTA: Un método estático es aquel que se puede invocar sin crear un objeto de la clase.\na) Verdadero\nb) Falso",
    options: ["Verdadero", "Falso"],
    answer: 0,
    explanation: null
  },
  {
    id: 38,
    question: "38. PREGUNTA: ¿Para qué nos proporciona métodos la clase Scanner?\na) Para leer enteros\nb) Para leer Strings\nc) Para leer floats\nd) Para leer bytes\ne) Todas las opciones son correctas",
    options: ["Para leer enteros", "Para leer Strings", "Para leer floats", "Para leer bytes", "Todas las opciones son correctas"],
    answer: 4,
    explanation: null
  },
  {
    id: 39,
    question: "¿Cómo pueden ser las visibilidades?\na) Private\nb) Package\nc) Protected\nd) Public\ne) Todas las opciones son correctas",
    options: ["Private", "Package", "Protected", "Public", "Todas las opciones son correctas"],
    answer: 4,
    explanation: null
  },
  {
    id: 40,
    question: "40. PREGUNTA: La sobrecarga de métodos nos permite crear un método con el mismo nombre, pero diferentes argumentos.\na) Verdadero\nb) Falso",
    options: ["Verdadero", "Falso"],
    answer: 0,
    explanation: null
  },
  {
    id: 41,
    question: "41. PREGUNTA: ¿Qué nos permite la sobreescritura de métodos?\na) Sobrescribir un método en la clase hijo.\nb) Marcar el método con @Override para que el compilador fuerce su comprobación.\nc) Cambiar la funcionalidad de un método heredado.\nd) Todas las respuestas son correctas.",
    options: ["Sobrescribir un método en la clase hijo.", "Marcar el método con @Override para que el compilador fuerce su comprobación.", "Cambiar la funcionalidad de un método heredado.", "Todas las respuestas son correctas."],
    answer: 3,
    explanation: null
  },
  {
    id: 42,
    question: "42. PREGUNTA: En Java estamos obligados a crear destructores.\na) Verdadero\nb) Falso",
    options: ["Verdadero", "Falso"],
    answer: 1,
    explanation: null
  },
  {
    id: 43,
    question: "43. PREGUNTA: ¿Cuál de las siguientes afirmaciones sobre los constructores es cierta?\na) Se llaman igual que la clase.\nb) Puede haber más de uno en una clase.\nc) El constructor que no recibe parámetros se llama constructor por defecto.\nd) Nos permiten crear un código muchos más entendible al poder tener dos métodos con el mismo nombre.\ne) Todas las opciones son correctas.",
    options: ["Se llaman igual que la clase.", "Puede haber más de uno en una clase.", "El constructor que no recibe parámetros se llama constructor por defecto.", "Nos permiten crear un código muchos más entendible al poder tener dos métodos con el mismo nombre.", "Todas las opciones son correctas."],
    answer: 4,
    explanation: null
  },
  {
    id: 44,
    question: "44. PREGUNTA: ¿Cuál de las siguientes opciones es un tipo de método en Java?\na) Static\nb) Abstract\nc) Final\nd) Native\ne) Synchronized\nf) Todas la opciones son correctas",
    options: ["Static", "Abstract", "Final", "Native", "Synchronized", "Todas la opciones son correctas"],
    answer: 5,
    explanation: null
  },
  {
    id: 45,
    question: "45. PREGUNTA: En Java, una clase puede heredar de dos clases diferentes.\na) Verdadero\nb) Falso",
    options: ["Verdadero", "Falso"],
      answer: 1,
      explanation: null
  },
   {
    id: 46,
    question: "46. PREGUNTA: En el bloque try/catch/finally, ¿qué ocurre con la parte correspondiente al finally?\na) Solo se ejecuta cuando se produce una excepción.\nb) Solo se ejecuta cuando NO se produce una excepción.\nc) Siempre se ejecuta se produzca o NO se produzca la excepción.\nd) Ninguna de las otras respuestas es correcta.",
    options: ["Solo se ejecuta cuando se produce una excepción.", "Solo se ejecuta cuando NO se produce una excepción.", "Siempre se ejecuta se produzca o NO se produzca la excepción.", "Ninguna de las otras respuestas es correcta."],
     answer: 2,
     explanation: null
   },
   {
    id: 47,
    question: "47. PREGUNTA: ¿Qué características tiene el conjunto de métodos que componen las interfaces?\na) Necesitan ser implementadas.\nb) No necesitan ser implementadas.\nc) Solo algunos deben ser implementados.\nd) Están implementados.",
    options: ["Necesitan ser implementadas.", "No necesitan ser implementadas.", "Solo algunos deben ser implementados.", "Están implementados."],
     answer: 1,
     explanation: null
   },
  {
    id: 48,
    question: "48. PREGUNTA: ¿Cuántas dimensiones pueden tener los arrays?\na) 1 dimensión.\nb) 2 dimensiones.\nc) 3 dimensiones.\nd) Todas las dimensiones que se deseen pero aumentará su complejidad.",
    options: ["1 dimensión.", "2 dimensiones.", "3 dimensiones.", "Todas las dimensiones que se deseen pero aumentará su complejidad."],
      answer: 3,
      explanation: null
  },
  {
    id: 49,
    question: "49. PREGUNTA: Los métodos genéricos permiten crear funciones que reciban varios tipos de parámetros.\na) Verdadero\nb) Falso",
    options: ["Verdadero", "Falso"],
      answer: 0,
      explanation: null
  },
    {
    id: 50,
    question: "50. PREGUNTA: Los tipos genéricos se usan para disminuir las restricciones de un tipo, lo que posibilita que un método pueda funcionar con una Lista de List<Tipo>, donde el tipo puede ser Integer, Double o Number.\na) Verdadero\nb) Falso",
    options: ["Verdadero", "Falso"],
      answer: 0,
      explanation: null
  },
   {
    id: 51,
    question: "51. PREGUNTA: ¿A qué BD permite conectarnos JDBC?\na) MySQL\nb) Oracle\nc) DB2\nd) Todas son correctas",
    options: ["MySQL", "Oracle", "DB2", "Todas son correctas"],
     answer: 3,
     explanation: null
   },
  {
    id: 52,
    question: "52. PREGUNTA: ¿Sobre qué interfaz se reciben los resultados sobre las consultas?\na) Result\nb) ResultSet\nc) SQLResult\nd) ResultSQL",
    options: ["Result", "ResultSet", "SQLResult", "ResultSQL"],
      answer: 1,
      explanation: null
  },
  {
    id: 53,
    question: "53. PREGUNTA: Indica qué propiedad no se aplica a las bases de datos objeto relacionales.\na) Encapsulación\nb) Abstracción\nc) Recursividad\nd) Herencia",
    options: ["Encapsulación", "Abstracción", "Recursividad", "Herencia"],
    answer: 2,
    explanation: null
  },
  {
    id: 54,
    question: "54. PREGUNTA: ¿Se puede guardar cualquier tipo de objeto Java en la BDOO.\na) Verdadero\nb) Falso",
      options: ["Verdadero", "Falso"],
    answer: 0,
    explanation: null
  },
   {
    id: 55,
    question: "55. PREGUNTA: ¿Qué quiere decir UML?\na) Unified modeling language\nb) Unique model language\nc) Undefined modeling language\nd) Unified map language",
     options: ["Unified modeling language", "Unique model language", "Undefined modeling language", "Unified map language"],
      answer: 0,
      explanation: null
   },
  {
    id: 56,
    question: "56. PREGUNTA: ¿Cuál de las siguientes opciones no es un tipo de privilegios dentro de una BBDD?\na) GRANT OPTION\nb) EXECUTE USER\nc) INSERT\nd) SELECT\ne) ALL\nf) DELETE",
    options: ["GRANT OPTION", "EXECUTE USER", "INSERT", "SELECT", "ALL", "DELETE"],
      answer: 1,
      explanation: null
  },
    {
    id: 57,
    question: "57. PREGUNTA: Los modos de acceso pueden ser de escritura y lectura.\na) Verdadero\nb) Falso",
    options: ["Verdadero", "Falso"],
      answer: 0,
      explanation: null
  },
  {
    id: 58,
    question: "58. PREGUNTA: En MySQL Workbench es posible conocer los detalles de conexión al servidor, ¿cuál de las siguientes opciones utilizaremos?\na) Server Status\nb) Check connection\nc) Data show\nd) Status variables",
    options: ["Server Status", "Check connection", "Data show", "Status variables"],
      answer: 0,
      explanation: null
  },
   {
    id: 59,
    question: "59. PREGUNTA: ¿Cuál de las siguientes opciones es una sintaxis válida para la creación de una colección de tipo cadena de texto?\na) CREATE TYPE colec AS VARRAY (10) OF VARCHAR2 (30);\nb) CREATE COLECTION colec AS ARRAY (10) OF VARCHAR2 (30);\nc) CREATE COL colec AS ARRAY (10) OF VARCHAR2 (30);\nd) CREATE OBJECT colec AS VARRAY (10) OF VARCHAR2 (30);",
    options: ["CREATE TYPE colec AS VARRAY (10) OF VARCHAR2 (30);", "CREATE COLECTION colec AS ARRAY (10) OF VARCHAR2 (30);", "CREATE COL colec AS ARRAY (10) OF VARCHAR2 (30);", "CREATE OBJECT colec AS VARRAY (10) OF VARCHAR2 (30);"],
    answer: 0,
    explanation: null
  },
  {
     id: 60,
     question: "60. PREGUNTA:  ¿Cuál de las siguientes sentencias es correcta como inserción del objeto persona que vemos en la imagen?\na) INSERT INTO departamento VALUES ('Contabilidad', 'Adrian', 55);\nb) INSERT INTO departamento VALUES ('AD', empleado(1,'Laura','Carvajal'), 'Madrid');\nc) INSERT INTO departamento VALUES (1, 'Ramon', 55);\nd) INSERT INTO departamento VALUES (1, empleado('Marina', 'Pecarova'), 'Lleida');",
     options: ["INSERT INTO departamento VALUES ('Contabilidad', 'Adrian', 55);", "INSERT INTO departamento VALUES ('AD', empleado(1,'Laura','Carvajal'), 'Madrid');", "INSERT INTO departamento VALUES (1, 'Ramon', 55);", "INSERT INTO departamento VALUES (1, empleado('Marina', 'Pecarova'), 'Lleida');"],
    answer: 3,
    explanation: null
  }
];