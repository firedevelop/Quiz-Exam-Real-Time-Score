export const questions = [
    {
        question: "¿Qué se utiliza en la declaración de un procedimiento o función para indicar que un parámetro es de entrada y no se modificará en el procedimiento?",
        options: ["IS-25", "IN", "OUT", "IN OUT"],
        answer: 1,
        explanation: 'La palabra clave "IN" se utiliza para declarar parámetros que son de entrada y cuyos valores no se modificarán dentro del procedimiento o función.'
    },
    {
        question: "¿Qué tipo de trigger se ejecuta antes de que se realice la operación de la base de datos?",
        options: ["AFTER", "DURING", "INSTEAD OF", "BEFORE"],
        answer: 3,
        explanation: 'Los triggers BEFORE se ejecutan antes de que se complete la operación en la base de datos.'
    },
     {
        question: "¿Cuál es la principal diferencia entre un procedimiento y una función en PL/SQL?",
         options: ["Los procedimientos no pueden contener sentencias SQL, mientras que las funciones sí.", "Los procedimientos no pueden ser reutilizados, mientras que las funciones sí.", "Los procedimientos pueden dar o no un valor de salida, mientras que las funciones siempre devuelven un valor.", "Los procedimientos pueden tener parámetros, mientras que las funciones no."],
        answer: 2,
       explanation: "La diferencia clave entre procedimientos y funciones radica en que las funciones siempre devuelven un valor, mientras que los procedimientos no siempre tienen un valor de retorno."
    },
    {
        question: "¿Cuál de las siguientes estructuras de control se utiliza en condicionales, para ejecutar un conjunto de instrucciones dependiendo de si se cumple una condición?",
        options: ["Estructura repetitiva básica.", "Estructura WHILE.", "Sentencia CASE.", "Todas las anteriores."],
        answer: 3,
    },
    {
        question: "¿Qué excepción se produce si una sentencia SELECT devuelve más de una fila en una operación que espera un único registro?",
        options: ["TOO_MANY_ROWS", "TWO_MORE_ROWS", "NO_DATA_FOUND", "ZERO_DIVIDE"],
        answer: 0,
    },
      {
        question: "¿Cuál de las siguientes afirmaciones sobre los roles en una base de datos es cierta?",
        options: ["Los roles permiten asignar permisos a nivel de columna.", "Los roles son exclusivos de MySQL y no se utilizan en Oracle.", "Los roles son conjuntos de privilegios que se pueden asignar a usuarios.", "Los roles simplifican la administración de usuarios, pero no pueden contener privilegios."],
        answer: 2,
        explanation: "Los roles son conjuntos de privilegios que se pueden asignar a usuarios."
    },
    {
         question: "¿Cuál es el propósito de la sentencia SET SERVEROUTPUT ON en Oracle Database?",
         options: ["Desactivar la visualización de mensajes en la consola.", "Habilitar la ejecución de bloques PL/SQL.", "Definir variables de entorno en la base de datos.", "Activar la visualización de mensajes en la consola."],
         answer: 3,
        explanation: "La sentencia SET SERVEROUTPUT ON se utiliza para activar la visualización de mensajes en la consola de Oracle Database, lo que permite ver los resultados de las sentencias dbms_output.put_line."
    },
     {
       question: "¿Cuál es uno de los beneficios clave de utilizar vistas personalizadas en una base de datos?",
       options: ["Las vistas personalizadas mejoran la seguridad de la base de datos al ocultar todas las tablas subyacentes.", "Las vistas personalizadas facilitan la eliminación de registros duplicados de las tablas subyacentes.", "Las vistas personalizadas aceleran las consultas al evitar la necesidad de escribir consultas SQL complejas.", "Las vistas personalizadas permiten almacenar datos de manera eficiente y reducen la necesidad de tablas físicas."],
       answer: 0,
       explanation: "Una de las ventajas clave de las vistas personalizadas es que permiten ocultar la estructura y los detalles internos de las tablas subyacentes, lo que mejora la seguridad de la base de datos. Los usuarios pueden acceder a los datos a través de vistas sin necesidad de conocer la estructura exacta de las tablas o tener acceso directo a ellas. Esto proporciona un control de acceso más preciso y evita que los usuarios realicen operaciones no autorizadas en las tablas subyacentes, lo que contribuye a la seguridad general de la base de datos."
   },
  {
       question: "¿Cuál de las siguientes afirmaciones es cierta sobre los cursores implícitos en PL/SQL?",
        options: ["Los cursores implícitos no pueden utilizarse en triggers.", "Los cursores implícitos se cierran automáticamente al final del bloque PL/SQL.", "Los cursores implícitos deben ser declarados e inicializados antes de ser utilizados.", "Los cursores implícitos se utilizan exclusivamente en funciones."],
        answer: 1,
       explanation: "Los cursores implícitos en PL/SQL se utilizan automáticamente para manejar consultas en bloques PL/SQL y se cierran automáticamente al final del bloque, lo que simplifica la gestión de cursores en comparación con los cursores explícitos."
   },
   {
        question: "¿Qué tipo de cursor se utiliza para operaciones SELECT INTO que devuelven un único registro?",
        options: ["No se utiliza un cursor", "Explícito", "Declarado", "Implícito"],
         answer: 3,
    },
    {
        question: "Para poder crear tipos de objeto se debe hacer uso de la sentencia:",
          options: ["CREATE OBJECT", "CREATE TYPE", "CREATE OBJECT TYPE", "CREATE NAME TYPE"],
        answer: 2,
    },
     {
       question: "Si desea obtener el valor real de un objeto al que apunta una referencia, ¿Qué palabra reservada usaría?",
        options: ["DEREF", "POINTER", "ACCESS", "REF"],
        answer: 0,
      explanation: "DEREF se utiliza para obtener el valor de un objeto al que apunta una referencia."
    },
     {
       question: "Selecciona la opción incorrecta sobre las características de la herencia:",
        options: ["Pueden crearse subtipos de objetos a partir de otros", "Los subtipos no pueden definir sus propios atributos y métodos", "Gracias a la herencia se pueden crear superclases abstractas", "Se puedan crear subclases más específicas"],
         answer: 1,
    },
    {
       question: "¿Cuál de las siguientes afirmaciones es verdadera sobre una variable de tipo VARRAY en Oracle PL/SQL?",
       options: ["Los elementos de un VARRAY deben ser del mismo tipo de datos.", "Se declaran utilizando la palabra clave NESTED TABLE.", "Los VARRAYs siempre ocupan una cantidad fija de espacio en memoria.", "Pueden tener un número variable de elementos."],
        answer: 0,
         explanation: "En un VARRAY (Variable Array), todos los elementos deben ser del mismo tipo de datos, y el número de elementos se define when se declara el VARRAY."
    },
       {
        question: "Identifica cuál es el programa de desarrollo en Oracle para bases de datos:",
        options: ["SQL developer", "LinQ", "MySQL", "SQLi"],
          answer: 0,
    },
      {
         question: "Centrándonos en las colecciones de objetos, selecciona la respuesta correcta:",
         options: ["Son tablas anidadas", "Es un grupo de elementos del mismo tipo", "Tienen atributos atómicos", "Ninguna de las respuestas es correcta"],
          answer: 1,
    },
      {
        question: "¿Qué es el encapsulamiento en la programación orientada a objetos?",
        options: ["El mecanismo para agrupar atributos y métodos dentro de una clase.", "La capacidad de definir múltiples funciones con el mismo nombre.", "La herencia de atributos y métodos de una superclase.", "La capacidad de tratar objetos derivados como si fueran de su superclase."],
          answer: 0,
          explanation: "El encapsulamiento se refiere a la agrupación de datos (atributos) y acciones (métodos) en una unidad lógica llamada clase."
        },
    {
       question: "¿Qué representa el tipo REF en una base de datos objeto-relacional?",
       options: ["Una función para acceder a objetos.", "Un tipo de dato básico.", "Un objeto duplicado.", "Un puntero a un objeto."],
       answer: 3,
        explanation: "REF actúa como un puntero que contiene el OID de un objeto."
        },
        {
            question: "Se utiliza el polimorfismo cuando...",
           options: ["una clase derivada debe verse como la clase principal.", "una clase secundaria de verse como una clase derivada.", "una clase principal debe verse como una clase derivada.", "una clase derivada debe verse como una clase secundaria."],
           answer: 0,
           explanation: "El polimorfismo es un concepto fundamental en la programación orientada a objetos que permite que los objetos de clases derivadas se comporten como objetos de la clase principal."
        },
        {
            question: "¿Qué cláusula se utiliza para especificar la superclase en una definición de tipo objeto?",
              options: ["OVER", "SUPER", "ABOVE", "UNDER"],
              answer: 3,
            explanation: "La cláusula UNDER se utiliza para especificar la superclase de un tipo objeto en bases de datos objeto-relacionales."
        },
         {
            question: "¿Cuál de las siguientes afirmaciones es cierta sobre los cursores implícitos en PL/SQL?",
            options: ["Los cursores implícitos deben ser declarados e inicializados antes de ser utilizados.", "Los cursores implícitos se utilizan exclusivamente en funciones.", "Los cursores implícitos se cierran automáticamente al final del bloque PL/SQL.", "Los cursores implícitos no pueden utilizarse en triggers."],
            answer: 2,
             explanation: "Los cursores implícitos en PL/SQL se utilizan automáticamente para manejar consultas en bloques PL/SQL y se cierran automáticamente al final del bloque, lo que simplifica la gestión de cursores en comparación con los cursores explícitos."
         },
      {
         question: "¿Qué tipo de trigger se ejecuta antes de que se realice la operación de la base de datos?",
            options: ["AFTER", "INSTEAD OF", "BEFORE", "DURING"],
            answer: 2,
             explanation: "Los triggers BEFORE se ejecutan antes de que se complete la operación en la base de datos."
         },
          {
            question: "¿Cuál es el propósito de los perfiles de usuario en una base de datos?",
             options: ["Definir el nombre de usuario y la contraseña.", "Establecer restricciones y límites para el uso de la base de datos por parte de un usuario.", "Controlar el acceso a la base de datos en función de la dirección IP del usuario.", "Asignar roles a los usuarios."],
             answer: 1,
              explanation: "Los perfiles de usuario se utilizan para definir restricciones y límites, como cuotas de espacio o límites de tiempo de sesión, para el uso de la base de datos por parte de un usuario."
          },
          {
            question: "¿Qué se utiliza en la declaración de un procedimiento o función para indicar que un parámetro es de entrada y no se modificará en el procedimiento?",
             options: ["IS-25", "IN", "OUT", "IN OUT"],
            answer: 1,
             explanation: 'La palabra clave "IN" se utiliza para declarar parámetros que son de entrada y cuyos valores no se modificarán dentro del procedimiento o función.'
         },
         {
            question: "¿Cuál de las siguientes afirmaciones sobre los roles en una base de datos es cierta?",
            options: ["Los roles son conjuntos de privilegios que se pueden asignar a usuarios.", "Los roles permiten asignar permisos a nivel de columna.", "Los roles son exclusivos de MySQL y no se utilizan en Oracle.", "Los roles simplifican la administración de usuarios, pero no pueden contener privilegios."],
            answer: 0,
            explanation: "Los roles son conjuntos de privilegios que se pueden asignar a usuarios."
         },
         {
           question: "¿Cuál de las siguientes afirmaciones sobre las vistas personalizadas en bases de datos es correcta?",
            options: ["Las vistas personalizadas son siempre físicas y almacenan datos en una tabla.", "Las vistas personalizadas son objetos virtuales que muestran datos de una o varias tablas, pero no almacenan datos por sí mismas.", "Las vistas personalizadas se utilizan para eliminar datos de las tablas subyacentes.", "Las vistas personalizadas son similares a las tablas, pero no permiten operaciones de consulta."],
            answer: 1,
            explanation: "Las vistas personalizadas, también conocidas como vistas, son consultas predefinidas almacenadas en la base de datos que permiten a los usuarios acceder y consultar datos desde una o varias tablas como si fueran una sola tabla virtual. Aunque las vistas proporcionan una representación personalizada de los datos, no almacenan datos físicamente en sí mismas. En cambio, actúan como consultas guardadas que se ejecutan dinámicamente cuando se accede a ellas."
        },
        {
          question: "Planificar la prevención, vigilar y proteger la salud frente a los riesgos laborales es una obligación de...",
          options: ["El trabajador.", "El gobierno.", "No es ninguna obligación.", "El empresario."],
          answer: 3,
          explanation: "En materia preventiva, los principales derechos de los trabajadores son: ...Y, el cumplimiento de las obligaciones que los empresarios deben cumplir."
         },
         {
            question: "En la prestación por nacimiento y cuidado del menor se cobra el...",
             options: ["100%", "75%", "65%", "50%"],
            answer: 0,
             explanation: "La prestación económica por nacimiento y cuidado del menor, tanto en su modalidad contributiva como no contributiva, consistirá en un sub-sidio equivalente al 100% de la misma base reguladora..."
         },
         {
           question: "En este tipo de contrato no existe una limitación temporal en la relación de trabajo:",
            options: ["Temporal.", "Contrato de formación en alternancia.", "Contrato formativo para la obtención de la práctica profesional.", "Indefinido."],
            answer: 3,
            explanation: "Es aquel que se concierta sin establecer un límite de tiempo en la prestación de los servicios, es decir, no tiene duración. Puede ser verbal o escrito."
        },
        {
          question: "Este sector es capaz de producir servicios altamente intelectuales:",
             options: ["Sector secundario.", "Sector primario.", "Sector terciario.", "Sector cuaternario."],
            answer: 3,
            explanation: "Sector cuaternario: Este sector es el que se encarga de producir servicios altamente intelectuales."
        },
      {
          question: "El sector industrial forma parte del...",
           options: ["Sector secundario.", "Sector primario.", "Sector cuaternario.", "Sector terciario."],
           answer: 0,
             explanation: "Sector secundario: El sector secundario es aquel que transforma materias primas en pro-ductos terminados o semielaborados... Sector industrial: tiene la finalidad de transformar las materias primas en productos utilizando maquinarias y recursos de soporte."
        },
        {
             question: "Señala el elemento que NO se fija en los convenios de trabajo:",
            options: ["Productividad", "Obligaciones", "Condiciones de trabajo", "Condiciones de climatización."],
            answer: 3,
            explanation: "No se encuentra explícitamente en el documento, pero se deduce del contexto"
        },
        {
           question: "El derecho a huelga por parte de los trabajadores para defender sus intereses está reconocido en el artículo _________ de la Constitución Española.",
           options: ["15", "30", "28", "10"],
           answer: 2,
             explanation: "El derecho a huelga por parte de los trabajadores para defender sus intereses está reconocido en el artículo 28 de la Constitución española."
          },
          {
             question: "La Administración Pública, y en concreto la local, destaca en los últimos tiempos por la creación de nuevos puestos de trabajo, relacionados sobre todo con:",
              options: ["El tratamiento de residuos", "La reparación de vehículos", "La atención a los animales", "La atención a las personas"],
              answer: 3,
             explanation: "Con la consolidación del Estado del bienestar, las Administraciones públicas, y más concretamente las Administraciones locales, como por ejemplo, los ayuntamientos, destacan por la creación de nuevos pues-tos de trabajo, mayormente relacionados con la atención a las personas y a la prestación de servicios a la comunidad."
         },
         {
             question: "El cierre patronal:",
             options: ["Ni se recoge en la Constitución Española ni es un derecho fundamental.", "Es un derecho fundamental.", "No se reconoce en la Constitución Española.", "Es un derecho fundamental y se reconoce en la Constitución Española."],
              answer: 0,
              explanation: "El cierre patronal, a diferencia de la huelga, ni se recoge en la Constitución española ni es un derecho fundamental."
         },
         {
            question: "Es un inconveniente del trabajo en equipo...",
             options: ["La integración de los miembros, así como la implicación en el trabajo hacen que disminuya el absentismo laboral.", "Favorece la productividad: el resultado es mayor que si cada persona trabajara individualmente al máximo de su capacidad. Es producto de la sinergia.", "El dominio por parte de un miembro o grupo de miembros puede distorsionar el buen funcionamiento del equipo.", "Mejora de la capacidad creativa por el intercambio de información procedente."],
             answer: 2,
              explanation: "El buen funcionamiento del equipo puede verse dis-torsionado por el dominio por parte de un miembro o grupo de miembros."
         },
          {
            question: "Completa la frase: En caso de dimisión, el trabajador debe avisar previamente con _____ días de antelación, aunque no debe alegar ninguna causa.",
              options: ["15 días.", "30 días.", "7 días.", "20 días."],
            answer: 0,
             explanation: "En caso de dimisión, el trabajador debe avisar previamente con 15 días de antelación, aunque no debe alegar ninguna causa, salvo que el contrato tenga una duración menor a un año."
          },
           {
               question: "Un ______ es cualquier objeto, sustancia o característica de la organización que contribuye a provocar un daño en la salud del trabajador.",
                options: ["Simulacro de incendio.", "Conato de emergencia.", "Factor de riesgo.", "Accidente."],
                 answer: 2,
              explanation: "Un factor de riesgo es cualquier objeto, sustancia o característica de la organización que contribuye a provocar un daño en la salud del trabajador."
            },
              {
                  question: "Después del reconocimiento y evaluación en una situación con múltiples heridos, se coloca atada al brazo o a la pierna de cada víctima una tarjeta de color que indica la urgencia de actuación, ¿qué quiere decir la tarjeta gris?",
                  options: ["No requiere atención, ya que son fallecidos o víctimas con pocas posibilidades de supervivencia.", "No urgente, para heridos leves que no requieren atención hospitalaria inmediata.", "Extrema urgencia, para heridos inconscientes, que no respiran, con heridas muy graves y que requieren asistencia y evacuación inmediata.", "Urgente, para heridos graves que necesitan atención hospitalaria pero que pueden esperar todavía a ser evacuados."],
                    answer: 0,
                explanation: "No se encuentra explícitamente en el documento, pero este es un dato común en los protocolos de actuación ante catástrofes"
              },
             {
                question: "La _______ es en la que incurren los trabajadores por el incumplimiento de las obligaciones en materia de prevención de riesgos laborales. No es atribuible a los empresarios.",
                 options: ["Responsabilidad social.", "Responsabilidad disciplinaria.", "Responsabilidad penal.", "Responsabilidad administrativa."],
                answer: 1,
                explanation: "No se encuentra explícitamente en el documento, pero se deduce del contexto"
             },
              {
                question: "Una empresa de 501 a 1000 trabajadores tendrá...",
                 options: ["4 delegados.", "5 delegados.", "Es opcional que tenga delegados.", "10 delegados."],
                  answer: 0,
                   explanation: "El número de delegados en la empresa dependerá del tamaño de esta y del número de trabajadores:\nEntre 501 y 1.000: 4 delegados."
             },
            {
               question: "Dentro de los factores derivados de los agentes biológicos, ¿cuáles pueden vivir fuera de un ser vivo?",
               options: ["Bacterias.", "Hongos.", "Protozoos.", "Virus."],
                answer: 0,
                explanation: "No se encuentra explícitamente en el documento, pero se deduce del contexto"
           },
            {
              question: "No es un agente físico...",
              options: ["Iluminación.", "Vibraciones.", "Compañeros.", "Ruido."],
              answer: 2,
               explanation: "Estos agentes físicos son el ruido, las vibraciones, las radiaciones, la temperatura y la iluminación..."
           },
           {
               question: "Situación de tensión en el trabajador que aparece por un exceso de trabajo y la incapacidad de poder asumirlo y alcanzar los objetivos establecidos. Se puede traducir en ansiedad, agresividad, frustración o sensación de impotencia. Todo ello repercute en la salud del trabajador y acaba derivando en una baja laboral.",
               options: ["Síndrome de \"Burn Out\".", "Insatisfacción.", "Fatiga.", "Estrés."],
               answer: 3,
                 explanation: "Estrés: se da ante una situación de tensión en la que el trabajador siente un exceso de trabajo e incapacidad de poder llegar a asumirlo y de alcanzar los objetivos que se le han establecido. Este estrés se puede traducir en agresividad, ansiedad, sensación de impotencia o frustración. Todo esto afectará a la salud del trabajador y derivará fi-nalmente en una baja laboral."
           },
            {
                question: "Se conoce coloquial y popularmente como “estar quemado\". Se da después de un estado de estrés prolongado, motivado principalmente por la sensación de que todo el esfuerzo y todo el trabajo no se ve compensado ni reconocido, ni a nivel personal ni profesional.",
                options: ["Insatisfacción.", "Síndrome de \"Burn Out\".", "Estrés.", "Fatiga."],
                 answer: 1,
                 explanation: "El burnout (o síndrome del quemado)."
            },
             {
                question: "Los ________ son seres vivos o estructuras biológicas que ocasionan cualquier tipo de infección, alergia o toxicidad cuando penetran en el organismo.",
                options: ["Agentes dañinos.", "Agentes químicos.", "Agentes médicos.", "Agentes biológicos."],
                   answer: 3,
                explanation: "Los agentes biológicos son seres vivos o estructuras biológicas que ocasionan infecciones, alergia o toxicidad cuando penetran en el orga-nismo."
             },
             {
                 question: "Para parar una hemorragia externa se debe...",
                 options: ["No tocar la herida nunca.", "Hacer una compresión directa sobre la herida. Si falla, se debe hacer una compresión arterial.", "Desinfectar con agua oxigenada y no presionar.", "Hacer una compresión arterial en primer lugar."],
                   answer: 1,
                 explanation: "Para detener una hemorragia, debemos realizar compresión directa sobre la herida y, en caso de que esto fallara, se debe realizar compre-sión arterial. Para hacer la compresión directa, comprimiremos la herida con un trapo o tela limpia."
           },
           {
              question: "Ante una emergencia, el protocolo a seguir a nivel básico es...",
              options: ["SAP (socorrer, auxiliar, proteger)", "PAS (proteger, auxiliar y socorrer).", "ASP (auxiliar, socorrer y proteger.", "No intervenir nunca, solo avisar a emergencias."],
               answer: 1,
                explanation: "El protocolo que se debe seguir en estos casos puede resumirse con las siglas PAS (proteger, avisar y socorrer):"
           },
            {
                question: "En un incendio, ________ es material sólido, líquido o gaseoso capaz de entrar en combustión después de calentarse por medio de la reacción química a un comburente.",
                options: ["Combustible.", "Calor.", "Reacción en cadena.", "Oxígeno."],
                answer: 0,
                explanation: "Combustible: material líquido, gaseoso o sólido capaz de entrar en combustión tras calentarse mediante la reacción química que se pro-duce ante un comburente."
            },
           {
                question: "¿Qué es el conjunto de usos, costumbres y conocimientos que se destinan a prevenir los accidentes laborales y las enfermedades profesionales?",
                 options: ["Cultura de riesgos.", "Cultura laboral.", "Cultura preventiva.", "Cultura popular."],
                 answer: 2,
                 explanation: "La cultura preventiva es el conjunto de usos, costumbres y conoci-mientos que se destinarán a prevenir las enfermedades profesionales y los accidentes laborales."
            },
            {
                question: "El _______ debe definir la secuencia de actuaciones a llevar a cabo para controlar inicialmente una emergencia cuando se produzca y planificar la organización humana con los medios necesarios que la posibiliten. Además, debe dar respuesta a las preguntas: ¿Qué se hará?, ¿Quién lo hará?, ¿Cuándo?, ¿Cómo?, ¿Dónde?",
                 options: ["Plan de urgencias.", "Plan de autoprotección.", "Plan de emergencia.", "Plan contra incendios."],
                answer: 2,
                 explanation: "El plan de emergencia debe definir la secuencia de actuaciones que hay que llevar a cabo para controlar inicialmente una emergencia y planifi-car la organización humana con los medios necesarios... Además, debe dar respuesta a las preguntas: ¿qué se hará?, ¿quién lo hará?, ¿cuándo?, ¿cómo?, ¿dónde?"
           },
           {
                question: "Dentro de los daños que suelen producirse para la salud de los trabajadores, ¿cuáles incluyen fracturas, heridas, traumatismos, asfixia, cortes, quemaduras, amputaciones...?",
                options: ["Condiciones psicofísicas y psicosociales.", "Condiciones medioambientales.", "Circunstancias personales.", "Características generales o estructurales."],
                answer: 3,
                explanation: "Características generales o estructurales: fracturas, heridas, trau-matismos, asfixia, cortes, quemaduras, amputaciones..."
            },
            {
              question: "En los factores derivados de agentes físicos, ______ es cualquier sonido no deseado y molesto que interfiere en la actividad humana.",
              options: ["Vibraciones.", "Ruido.", "Iluminación.", "Radiaciones."],
              answer: 1,
                explanation: "En los factores derivados de agentes físicos, Ruido es cualquier sonido no deseado y molesto que interfiere en la actividad humana."
            },
           {
              question: "Cansancio físico o mental, real o imaginario, que tiene un trabajador y que disminuye su capacidad de trabajo. Existen tres niveles.",
               options: ["Síndrome de \"Burn Out\".", "Fatiga.", "Insatisfacción.", "Estrés."],
               answer: 1,
                explanation: "Fatiga: es el cansancio mental o físico, imaginario o real, que tiene un trabajador y hace que su capacidad de trabajo disminuya. Existen tres niveles de fatiga."
           },
            {
                question: "Está claro que cuando hablamos de cultura preventiva estamos hablando de una forma de _______ y de una forma de ________.",
                options: ["Actuar y decidir.", "Definir y contextualizar.", "Revisar y programar.", "Ser y pensar."],
                  answer: 3,
                  explanation: "Pero está claro que, cuando hablamos de cultura preventiva, estamos hablando de una forma de ser y de una forma de pensar."
           },
           {
                question: "Las emergencias, según su gravedad, se clasifican en...",
                 options: ["Emergencia leve, emergencia grave, emergencia muy grave.", "Emergencia mínima y máxima.", "Conato de emergencia, emergencia parcial, emergencia general.", "No hay una clasificación específica."],
                answer: 2,
                 explanation: "Las emergencias, según su gravedad, se clasifican en: Conato de emergencia, Emergencia parcial y Emergencia general."
           },
           {
                question: "En un incendio, __________ es necesario para iniciar la combustión.",
                 options: ["Reacción en cadena.", "Calor.", "Comburente.", "Combustible."],
                answer: 1,
                 explanation: "Calor: necesario para iniciar la combustión."
           },
            {
                question: "El _______ es el documento, aprobado por la dirección de la empresa, que recoge el plan de trabajo para poner en práctica los principios de acción preventiva. Deben conocerlos todos los trabajadores y directivos de la empresa.",
                options: ["Plan de actuación.", "Plan de emergencia.", "Plan de prevención.", "Plan de acción."],
                 answer: 2,
                explanation: "El plan de prevención es un documento, el cual ha sido aprobado por la dirección de la propia empresa, que recogerá el plan de trabajo para poder poner en práctica los diferentes principios de acción preventiva."
            },
             {
                 question: "El hecho de que un trabajo se haga por necesidad y no por gusto o de que, simplemente, el trabajador se aburra, esté falto de interés, se estrese o no tenga autonomía.",
                options: ["Estrés.", "Insatisfacción.", "Fatiga.", "Síndrome de \"Burn Out\"."],
                  answer: 1,
                  explanation: "Insatisfacción: se da, sobre todo, cuando el trabajo se realiza por ne-cesidad y no por gusto o, simplemente, cuando el trabajador se aburre o tiene estrés, falta de interés o de autonomía."
             },
             {
               question: "El primer paso de la evaluación de la prevención es...",
               options: ["Comprar extintores y medidas antiincendios.", "Nombrar a un responsable en prevención.", "Identificar los posibles riesgos laborales.", "Ponerse en contacto con el ministerio de trabajo."],
                 answer: 2,
                explanation: "El primer paso en la evaluación de la prevención es identificar los po-sibles riesgos laborales."
            },
             {
                 question: "Cuando socorres a una víctima, si está inconsciente, pero respira, se debe colocar...",
                 options: ["Boca abajo.", "Con la cabeza en alto.", "Horizontalmente (siempre que estén descartadas lesiones de columna) en posición lateral de seguridad (PLS) y vigilarlo constantemente.", "Boca arriba."],
                answer: 2,
                 explanation: "Si la persona está inconsciente, pero respira (siempre y cuando no sospechemos de lesiones en la columna), la acomodaremos en po-sición lateral de seguridad y la supervisaremos en todo momento."
             },
            {
                question: "Si hablamos de los delegados de prevención. Una empresa de entre 501 a 1.000 trabajadores tendrá...",
                options: ["5 delegados.", "10 delegados.", "Es opcional que tenga delegados.", "4 delegados."],
                 answer: 3,
                 explanation: "El número de delegados en la empresa dependerá del tamaño de esta y del número de trabajadores: Entre 501 y 1.000: 4 delegados."
             },
             {
                 question: "Los accidentes que tienen lugar en los trayectos de ida o vuelta del trabajo son...",
                 options: ["In itinere.", "En misión.", "No se consideran accidentes.", "De tramitación."],
                answer: 0,
                 explanation: "La LGSS también considera como accidentes de trabajo: Los que tienen lugar en los trayectos de ida o vuelta del trabajo (in itinere)."
            },
              {
                question: "Uno de los puntos del protocolo de actuación dentro del plan de emergencia es la identificación y clasificación de las emergencias, que se refiere a...",
                options: ["Detección y alerta, mecanismos de alarma (quién dará el aviso y la identificación al centro de coordinación de atención de emergencias de protección civil), mecanismos de respuesta, evacuación o confinamiento, prestación de los primeros auxilios, y formas de recepción de las ayudas externas.", "Registrar todos los hechos susceptibles de desencadenar en una emergencia como un incendio, una inundación, una amenaza de bomba, una explosión...", "Identificar las funciones de las personas y de los equipos en caso de emergencia.", "Identificación del responsable de poner en marcha el plan de emergencias."],
                  answer: 1,
                explanation: "Identificación y clasificación de las emergencias: registrar todos aquellos hechos que sean susceptibles de llegar a ser una emergen-cia, como por ejemplo, un incendio, una inundación, una amenaza de bomba o una explosión, entre otros."
            },
            {
                 question: "Dentro de los daños que suelen producirse para la salud de los trabajadores, ¿cuáles incluyen irritabilidad, taquicardia, hipotermia, deshidratación, hepatitis, rabia, tuberculosis, infecciones, lesiones oculares, sordera, dermatitis...?",
                 options: ["Circunstancias personales.", "Características generales o estructurales.", "Condiciones psicofísicas y psicosociales.", "Condiciones medioambientales."],
                 answer: 2,
                 explanation: "Condiciones medioambientales: irritabilidad, taquicardia, hipo-termia, deshidratación, hepatitis, rabia, tuberculosis, infecciones, lesiones oculares, sordera, dermatitis..."
            },
             {
                question: "En un incendio, ________ es el oxidante necesario para la combustión como el oxígeno del aire.",
                options: ["Combustible.", "Calor.", "Comburente.", "Reacción en cadena."],
                  answer: 2,
                explanation: "LIBRO - Página 143] Comburente: se necesita un oxidante para la combustión, como por ejemplo, el oxígeno del aire en el ambiente."
            },
            {
               question: "En el caso de las responsabilidades _________ la responsabilidad se produce por el incumplimiento de las normas legales, reglamentarias y cláusulas normativas de los convenios colectivos, y, por tanto, únicamente es atribuible a los empresarios.",
               options: ["Judiciales.", "Sociales.", "Administrativas.", "Leves."],
                answer: 2,
                explanation: "LIBRO - Página 164] En el caso de las responsabilidades administrativas, la responsa-bilidad se produce por el incumplimiento de las normas legales y reglamentarias; por tanto, únicamente es atribuible a los empresarios."
            },
           {
                question: "Dentro de los factores derivados de los agentes biológicos, ¿cuáles son formas de vida vegetal con hábitat en el suelo pero que se pueden convertir en parásitos de animales y vegetales, son los microorganismos que generan los riesgos?",
                 options: ["Hongos.", "Bacterias."],
                  answer: 0,
            }
];