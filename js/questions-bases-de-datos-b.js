export const questions = [
  {
    question: "1. PREGUNTA: ¿Qué se utiliza en la declaración de un procedimiento o función para indicar que un parámetro es de entrada y no se modificará en el procedimiento?",
    options: ["IS-25", "IN", "OUT", "IN OUT"],
    answer: 1,
    explanation:
      '**[Respuesta]** La palabra clave "IN" se utiliza para declarar parámetros que son de entrada y cuyos valores no se modificarán dentro del procedimiento o función.',
  },
  {
    question: "2. PREGUNTA: ¿Qué tipo de trigger se ejecuta antes de que se realice la operación de la base de datos?",
    options: ["AFTER", "INSTEAD OF", "BEFORE", "DURING"],
    answer: 2,
    explanation:
      "**[Respuesta]** Los triggers BEFORE se ejecutan antes de que se complete la operación en la base de datos.",
  },
  {
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
    question:
      "4. PREGUNTA: ¿Cuál de las siguientes estructuras de control se utiliza en condicionales, para ejecutar un conjunto de instrucciones dependiendo de si se cumple una condición?",
    options: [
      "Estructura repetitiva básica.",
      "Estructura WHILE.",
      "Sentencia CASE.",
      "Todas las anteriores.",
    ],
    answer: 3,
    explanation: "**[Respuesta]** Todas las anteriores.",
  },
  {
    question:
      "5. PREGUNTA: ¿Qué excepción se produce si una sentencia SELECT devuelve más de una fila en una operación que espera un único registro?",
    options: ["TOO_MANY_ROWS", "TWO_MORE_ROWS", "NO_DATA_FOUND", "ZERO_DIVIDE"],
    answer: 0,
    explanation: "**[Respuesta]** TOO_MANY_ROWS",
  },
  {
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
        question: "9. PREGUNTA: ¿Cuál de las siguientes afirmaciones es cierta sobre los cursores implícitos en PL/SQL?",
        options: [
            "Los cursores implícitos no pueden utilizarse en triggers.",
            "Los cursores implícitos se cierran automáticamente al final del bloque PL/SQL.",
            "Los cursores implícitos deben ser declarados e inicializados antes de ser utilizados.",
             "Los cursores implícitos se utilizan exclusivamente en funciones."
        ],
        answer: 1,
        explanation: "**[Respuesta]** Los cursores implícitos en PL/SQL se utilizan automáticamente para manejar consultas en bloques PL/SQL y se cierran automáticamente al final del bloque, lo que simplifica la gestión de cursores en comparación con los cursores explícitos."
    },
  {
      question: "10. PREGUNTA: ¿Qué tipo de cursor se utiliza para operaciones SELECT INTO que devuelven un único registro?",
        options: ["No se utiliza un cursor", "Explícito", "Declarado", "Implícito"],
        answer: 3,
        explanation: "**[Respuesta]** Implícito",
  },
  {
    question: "11. PREGUNTA: Para poder crear tipos de objeto se debe hacer uso de la sentencia:",
    options: ["CREATE OBJECT", "CREATE TYPE", "CREATE OBJECT TYPE", "CREATE NAME TYPE"],
    answer: 2,
    explanation: "**[Respuesta]** CREATE TYPE",
  },
   {
        question: "12. PREGUNTA: Si desea obtener el valor real de un objeto al que apunta una referencia, ¿Qué palabra reservada usaría?",
        options: ["DEREF", "POINTER", "ACCESS", "REF"],
        answer: 0,
        explanation: "**[Respuesta]** DEREF se utiliza para obtener el valor de un objeto al que apunta una referencia."
    },
  {
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
    question: "15. PREGUNTA: Identifica cuál es el programa de desarrollo en Oracle para bases de datos:",
    options: ["SQL developer", "LinQ", "MySQL", "SQLi"],
    answer: 0,
    explanation: "**[Respuesta]** SQL developer",
  },
   {
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
        question: "17. PREGUNTA: ¿Qué es el encapsulamiento en la programación orientada a objetos?",
        options: [
            "El mecanismo para agrupar atributos y métodos dentro de una clase.",
            "La capacidad de definir múltiples funciones con el mismo nombre.",
            "La herencia de atributos y métodos de una superclase.",
            "La capacidad de tratar objetos derivados como si fueran de su superclase."
        ],
        answer: 0,
        explanation: "**[Respuesta]** El encapsulamiento se refiere a la agrupación de datos (atributos) y acciones (métodos) en una unidad lógica llamada clase."
    },
   {
        question: "18. PREGUNTA: ¿Qué representa el tipo REF en una base de datos objeto-relacional?",
        options: [
            "Una función para acceder a objetos.",
            "Un tipo de dato básico.",
            "Un objeto duplicado.",
            "Un puntero a un objeto."
        ],
        answer: 3,
         explanation: "**[Respuesta]** REF actúa como un puntero que contiene el OID de un objeto."
    },
  {
    question: "19. PREGUNTA: Se utiliza el polimorfismo cuando...",
    options: [
      "una clase derivada debe verse como la clase principal.",
      "una clase secundaria de verse como una clase derivada.",
      "una clase principal debe verse como una clase derivada.",
        "una clase derivada debe verse como una clase secundaria."
    ],
    answer: 2,
    explanation:
      "**[Respuesta]** El polimorfismo es un concepto fundamental en la programación orientada a objetos que permite que los objetos de clases derivadas se comporten como objetos de la clase principal.",
  },
   {
        question: "20. PREGUNTA: ¿Qué cláusula se utiliza para especificar la superclase en una definición de tipo objeto?",
        options: ["OVER", "SUPER", "ABOVE", "UNDER"],
        answer: 3,
        explanation: "**[Respuesta]** La cláusula UNDER se utiliza para especificar la superclase de un tipo objeto en bases de datos objeto-relacionales."
    },
    {
        question: "21. PREGUNTA: ¿Cuál es el propósito de los perfiles de usuario en una base de datos?",
        options: [
            "Definir el nombre de usuario y la contraseña.",
            "Establecer restricciones y límites para el uso de la base de datos por parte de un usuario.",
             "Controlar el acceso a la base de datos en función de la dirección IP del usuario.",
             "Asignar roles a los usuarios."
        ],
        answer: 1,
         explanation: "**[Respuesta]** Los perfiles de usuario se utilizan para definir restricciones y límites, como cuotas de espacio o límites de tiempo de sesión, para el uso de la base de datos por parte de un usuario."
    },
      {
         question: "22. PREGUNTA: ¿Cuál de las siguientes afirmaciones sobre las vistas personalizadas en bases de datos es correcta?",
         options: [
        "Las vistas personalizadas son siempre físicas y almacenan datos en una tabla.",
        "Las vistas personalizadas son objetos virtuales que muestran datos de una o varias tablas, pero no almacenan datos por sí mismas.",
        "Las vistas personalizadas se utilizan para eliminar datos de las tablas subyacentes.",
          "Las vistas personalizadas son similares a las tablas, pero no permiten operaciones de consulta."
         ],
         answer: 1,
         explanation: "**[Respuesta]** Las vistas personalizadas, también conocidas como vistas, son consultas predefinidas almacenadas en la base de datos que permiten a los usuarios acceder y consultar datos desde una o varias tablas como si fueran una sola tabla virtual. Aunque las vistas proporcionan una representación personalizada de los datos, no almacenan datos físicamente en sí mismas. En cambio, actúan como consultas guardadas que se ejecutan dinámicamente cuando se accede a ellas."
      },
        {
         question: "23. PREGUNTA: ¿Cuál de las siguientes afirmaciones es cierta acerca de los privilegios en una base de datos?",
         options: [
            "Los privilegios solo se aplican a los administradores de la base de datos.",
            "Los privilegios permiten a los usuarios realizar acciones específicas en objetos de la base de datos.",
              "Los privilegios solo se pueden asignar de manera explícita, no a través de roles.",
             "Los privilegios son irrelevantes para la seguridad de la base de datos."
         ],
         answer: 1,
         explanation: "**[Respuesta]** Los privilegios en una base de datos son permisos que se otorgan a los usuarios para realizar acciones específicas en objetos de la base de datos, como insertar, actualizar, eliminar o consultar datos. Estos privilegios son fundamentales para la seguridad y la gestión de la base de datos, ya que permiten controlar quién puede realizar qué acciones."
     },
        {
           question: "24. PREGUNTA: ¿Cuál es uno de los beneficios clave de utilizar vistas personalizadas en una base de datos?",
        options: [
            "Las vistas personalizadas mejoran la seguridad de la base de datos al ocultar todas las tablas subyacentes.",
           "Las vistas personalizadas permiten almacenar datos de manera eficiente y reducen la necesidad de tablas físicas.",
             "Las vistas personalizadas facilitan la eliminación de registros duplicados de las tablas subyacentes.",
            "Las vistas personalizadas aceleran las consultas al evitar la necesidad de escribir consultas SQL complejas."
        ],
        answer: 0,
        explanation: "**[Respuesta]** Una de las ventajas clave de las vistas personalizadas es que permiten ocultar la estructura y los detalles internos de las tablas subyacentes, lo que mejora la seguridad de la base de datos. Los usuarios pueden acceder a los datos a través de vistas sin necesidad de conocer la estructura exacta de las tablas o tener acceso directo a ellas. Esto proporciona un control de acceso más preciso y evita que los usuarios realicen operaciones no autorizadas en las tablas subyacentes, lo que contribuye a la seguridad general de la base de datos."
      },
    {
        question: "25. PREGUNTA: Una de las principales ventajas de la programación orientada a objetos (POO) es...",
        options: [
            "la inserción de estructuras repetitivas.",
            "la inserción de condicionales.",
            "Todas las respuestas son correctas.",
            "la herencia."
        ],
        answer: 3,
         explanation: "**[Respuesta]** la herencia."
    },
    {
        question: "26. PREGUNTA: ¿Cuál es la principal diferencia entre un procedimiento y una función en PL/SQL?",
        options: [
          "Los procedimientos pueden dar o no un valor de salida, mientras que las funciones siempre devuelven un valor.",
            "Los procedimientos no pueden contener sentencias SQL, mientras que las funciones sí.",
            "Los procedimientos no pueden ser reutilizados, mientras que las funciones sí.",
            "Los procedimientos pueden tener parámetros, mientras que las funciones no."
        ],
        answer: 0,
         explanation: "**[Respuesta]** La diferencia clave entre procedimientos y funciones radica en que las funciones siempre devuelven un valor, mientras que los procedimientos no siempre tienen un valor de retorno."
     },
    {
        question: "27. PREGUNTA: En relación con los métodos en objetos, selecciona la respuesta correcta:",
        options: [
            "Son punteros a un objeto",
            "Mejoramos la búsqueda de información",
            "Todas las respuestas son correctas",
            "Acciones que modelan el comportamiento de los objetos"
        ],
        answer: 3,
        explanation: "**[Respuesta]** Acciones que modelan el comportamiento de los objetos"
    },
    {
        question: "28. PREGUNTA: Si queremos heredar en el objeto \"tipo_coche\" los campos el objeto \"tipo_vehiculo\" cual es la instrucción que nos falta siguiendo este código. CREATE OR REPLACE TYPE tipo_vehiculo AS OBJECT ( id_v NUMBER, make VARCHAR2(15), modelo VARCHAR2(15) ) NOT FINAL NOT INSTANTIABLE; / CREATE TYPE tipo_coche ____?____ tipo_vehiculo ( convertible CHAR(1) );",
        options: [
             "REFERENCE",
            "UNDER",
            "FROM",
             "WITH"
        ],
         answer: 1,
         explanation: "**[Respuesta]** UNDER"
    },
    {
        question: "29. PREGUNTA: ¿Qué instrucción se usa para declarar un tipo como abstracto?",
        options: [
            "ABTRACT",
            "NOT INITIAL",
            "NOT INSTANTIABLE",
            "INSTANTIABLE"
        ],
         answer: 2,
         explanation: "**[Respuesta]** NOT INSTANTIABLE"
    },
    {
      question: "30. PREGUNTA: ¿Cuál de las siguientes partes es requerida como obligatoria en un bloque de PL/SQL?",
      options: [
        "Parte ejecutable",
        "Parte de tratamiento de excepciones",
        "Parte de declaraciones",
        "Todas las anteriores"
      ],
      answer: 0,
         explanation: "**[Respuesta]** La parte ejecutable es la única parte requerida en un bloque lógico PL/SQL. Esta sección contiene las instrucciones de programación y es esencial para que el bloque tenga funcionalidad."
     },
       {
        question: "31. PREGUNTA: Estás desarrollando un sistema de gestión de inventario y decides usar un trigger para mantener un registro de las veces que un producto ha sido actualizado en la base de datos y poder rastrear las actualizaciones de productos. ¿Cuál de las siguientes opciones sería la mejor manera de implementar este trigger?",
          options: [
             "Crear un trigger AFTER UPDATE que incremente un contador cada vez que un producto es actualizado.",
             "Crear un trigger AFTER INSERT que incremente un contador cada vez que se añade un nuevo producto.",
             "Crear un trigger BEFORE UPDATE que almacene una copia del producto en una tabla de historial antes de que se realice cualquier cambio.",
             "Crear un trigger BEFORE DELETE que almacene una copia del producto en una tabla de historial antes de eliminarlo."
        ],
          answer: 2,
        explanation: "**[Respuesta]** Crear un trigger BEFORE UPDATE que almacene una copia del producto en una tabla de historial antes de que se realice cualquier cambio.es la más adecuada para mantener un registro de las veces que un producto ha sido actualizado. Al almacenar una copia del producto en una tabla de historial antes de que se realice cualquier cambio, se puede tener un registro completo de todas las versiones anteriores del producto. Las otras opciones no abordan directamente el requisito de rastrear actualizaciones de productos."
     },
    {
          question: "32. PREGUNTA: ¿Cuál de las siguientes afirmaciones es cierta acerca de las tablas anidadas (nested tables) en Oracle PL/SQL?",
          options: [
              "Pueden tener una estructura jerárquica de datos.",
              "Las tablas anidadas se declaran utilizando la palabra clave VARRAY.",
              "No se pueden almacenar en una base de datos Oracle.",
              "Las tablas anidadas son siempre de tamaño fijo."
          ],
          answer: 0,
           explanation: "**[Respuesta]** Las tablas anidadas son estructuras dinámicas que pueden contener una colección de elementos de diferentes tipos de datos, lo que les permite tener una estructura jerárquica o incluso elementos anidados dentro de ellas. No tienen un tamaño fijo y se pueden utilizar en una base de datos Oracle."
    },
   {
        question: "33. PREGUNTA: ¿Qué tipo de cursor se utiliza para operaciones SELECT INTO que devuelven un único registro?",
        options: [
            "Declarado",
            "Explícito",
             "No se utiliza un cursor",
            "Implícito"
        ],
        answer: 3,
         explanation: "**[Respuesta]** Implícito"
    },
    {
        question: "34. PREGUNTA: ¿Cuál de las siguientes estructuras de control se utiliza en condicionales, para ejecutar un conjunto de instrucciones dependiendo de si se cumple una condición?",
          options: [
           "Todas las anteriores.",
              "Sentencia CASE.",
              "Estructura WHILE.",
                "Estructura repetitiva básica."
        ],
        answer: 0,
         explanation: "**[Respuesta]** Todas las anteriores."
    }
];