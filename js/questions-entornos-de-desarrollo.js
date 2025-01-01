export const questions = [
    {
        question: "1: ¿Cuál de las siguientes herramientas de control de versiones se menciona como ejemplo en el texto?",
        options: ["Git", "IntelliJ IDEA", "Eclipse", "Swing"],
        answer: 0,
        explanation: "**[Respuesta - Página 117]** *Ejemplos de control de versiones son GIT o TFS.*"
    },
    {
        question: "2: ¿Qué elemento en la arquitectura de Von Neumann conecta la ALU con la memoria principal?",
        options: ["Unidad de control (UC)", "Registro de instrucción (RI)", "Decodificador de instrucción (DI)", "Bus de direcciones"],
        answer: 3,
        explanation: "**[Respuesta - Página 11]** *La unidad de control (UC) es el centro de la arquitectura y conecta con la unidad aritmético-lógica (UAL), los dispositivos de entrada y salida y con ambas memorias mencionadas anteriormente.*"
    },
    {
        question: "3: ¿Cuál de las siguientes opciones describe un IDE libre y multiplataforma mencionado en el texto?",
        options: ["Eclipse", "NetBeans", "Visual Studio", "CodeLite"],
        answer: 0,
        explanation: "**[Respuesta - Página 69]** *Eclipse: es un entorno de programación de código abierto y multiplataforma.*"
    },
    {
        question: "4: ¿Qué clasificación describe herramientas CASE utilizadas para capturas de requisitos y diseño?",
        options: ["Upper CASE", "Low CASE", "Herramientas de control de versiones", "Herramientas de mantenimiento"],
        answer: 0,
        explanation: "**[Respuesta - Página 78]** *Upper case: herramientas utilizadas en las etapas de capturas de requisitos, análisis y diseño.*"
    },
    {
        question: "5: ¿Qué herramienta CASE se utiliza para detectar errores en los diagramas?",
        options: ["CaseComplete", "Flow Chart Maker", "Bugzilla", "Doxygen"],
        answer: 0,
        explanation: "**[Respuesta - Página 78]** *Herramientas de análisis: estas herramientas analizan de forma automática si hay algún error en los diagramas o alguna inconsistencia. Así, por ejemplo, disponemos de la herramienta CaseComplete.*"
    },
      {
         question: "6: ¿Qué tipo de software está diseñado para realizar tareas específicas para el usuario?",
         options: ["Software de aplicación", "Software libre", "Software de sistema", "Software propietario"],
         answer: 0,
         explanation: "**[Respuesta - Página 8]** *Software de aplicación: aquí tendremos los programas que realizan tareas específicas para que el ordenador sea útil al usuario, por ejemplo, los programas ofimáticos, el software médico o el de diseño asistido, entre otros.*"
     },
    {
        question: "7: ¿Qué muestra la ventana \"Structure\" en el diseño de interfaces gráficas en Eclipse?",
        options: ["Los errores en el programa", "El código fuente del proyecto", "Las propiedades de un elemento seleccionado", "Los componentes de la ventana en forma jerárquica"],
        answer: 3,
          explanation: "**[Respuesta - Página 75]** *Structure: se verán de forma jerárquica los componentes que se han agregado a la ventana.*"
    },
      {
          question: "8: ¿Cuál de las siguientes opciones describe un lenguaje de alto nivel?",
        options: ["Es dependiente del hardware", "Usa sintaxis cercana al lenguaje natural humano", "Trabaja directamente con registros de memoria", "Especifica instrucciones en binario"],
        answer: 1,
         explanation: "**[Respuesta - Página 19]** *Lenguajes de alto nivel: este tipo de lenguaje es más fácil a la hora de aprender, ya que estos lenguajes utilizan nuestro lenguaje natural.*"
      },
    {
        question: "9: ¿Cuál es un ejemplo de software distribuido como shareware?",
        options: ["Firefox", "Malwarebytes", "CCleaner", "Microsoft Word"],
        answer: 1,
         explanation: "**[Respuesta - Página 8]** *Shareware: el usuario puede evaluar de forma gratuita el producto, pero con limitaciones en algunas características. Si realiza un pago, podrá disfrutar del software sin limitaciones. Por ejemplo, Malwarebytes.*"
    },
     {
        question: "10: ¿Qué función realiza el intérprete dentro de un IDE?",
          options: ["Depura errores del código fuente", "Administra el control de versiones", "Traduce y ejecuta el código línea por línea", "Traduce el código fuente directamente a lenguaje máquina"],
        answer: 2,
         explanation: "**[Respuesta - Página 69]** *Intérprete o interpretador. Realiza la traducción a medida que se ejecuta la instrucción. Son más lentos que los compiladores, pero no dependen de la máquina, sino del propio intérprete.*"
     },
    {
        question: "11: ¿Qué herramienta CASE permite reportar errores en el software durante su mantenimiento?",
        options: ["CaseComplete", "Bugzilla", "Doxygen", "Flow Chart Maker"],
        answer: 1,
        explanation: "**[Respuesta - Página 78]** *Herramientas de mantenimiento: nos ayudan a gestionar y organizar la fase de mantenimiento del software, reportando errores o analizando cuál puede ser la causa. Un ejemplo es la herramienta Bugzilla.*"
    },
    {
        question: "12: ¿Qué plugin debe instalarse en Eclipse para trabajar con Swing Designer?",
        options: ["Flow Chart Maker", "MySQL Workbench", "CodeLite", "WindowBuilder"],
        answer: 3,
         explanation: "**[Respuesta - Página 71]**  *Vamos a instalar WindowBuilder. Esto lo podremos hacer desde el propio Eclipse, seleccionando Help > Install New Software:*"
    },
    {
      question: "13: ¿Qué modelo de desarrollo combina prototipos con análisis de riesgos?",
        options: ["Modelo en espiral", "Modelo en V", "Modelo iterativo incremental", "Modelo en cascada con realimentación"],
        answer: 0,
        explanation: "**[Respuesta - Página 27]** *Este modelo combina el modelo en cascada con el modelo iterativo de construcción de prototipos. El proceso de desarrollo del software se representa como una espiral donde en cada ciclo se desarrolla una parte de este.*"
    },
    {
        question: "14: ¿Qué herramienta CASE se utiliza en la etapa de pruebas y mantenimiento?",
        options: ["Upper CASE", "Control de versiones", "Flow Chart Maker", "Low CASE"],
        answer: 3,
         explanation: "**[Respuesta - Página 78]** *Low case: herramientas utilizadas en las etapas de implementación, pruebas y mantenimiento.*"
    },
      {
          question: "15: ¿Qué tipo de prueba verifica los requisitos funcionales sin observar el funcionamiento interno del sistema?",
        options: ["Prueba de integración", "Prueba de caja negra", "Prueba de caja blanca", "Prueba de regresión"],
          answer: 1,
           explanation: "**[Respuesta - Página 81]** *En las pruebas de caja negra, tendremos acceso al código fuente y se analizan todas posibilidades de nuestro código.*"
      },
     {
        question: "16: ¿Cuál es la diferencia clave entre hardware y software?",
        options: ["El hardware es físico, mientras que el software es lógico", "El software almacena componentes físicos", "No hay diferencias entre hardware y software", "El hardware da instrucciones al software"],
          answer: 0,
         explanation: "**[Respuesta - Página 7]** *El ordenador está compuesto por dos partes: la parte física, que llamamos hardware y que está compuesta por elementos físicos como el teclado, el ratón, el monitor, los discos duros o la placa base... Por otro lado, el ordenador posee otra parte lógica llamada software...*"
    },
     {
        question: "17: ¿Qué herramienta en un IDE se encarga de traducir el código fuente a lenguaje máquina?",
          options: ["Editor de texto", "Compilador", "Intérprete", "Depurador"],
        answer: 1,
          explanation: "**[Respuesta - Página 69]** *Compilador: Se encarga de traducir el código fuente escrito en lenguaje de alto nivel a un lenguaje de bajo nivel que la máquina sea capaz de interpretar y ejecutar.*"
     },
     {
        question: "18: ¿Qué ventaja ofrece el Absolute Layout en Swing Designer?",
         options: ["Añade propiedades avanzadas a los componentes", "Permite colocar componentes en cualquier posición de la ventana", "Permite realizar cambios en el código fuente automáticamente", "Automatiza la creación de clases dentro del proyecto"],
         answer: 1,
         explanation: "**[Respuesta - Página 75]** *El Absolute layout, nos va a permitir colocar los componentes en cualquier parte de esta.*"
     },
       {
         question: "19: ¿Cuál es un ejemplo de herramienta CASE para la creación de documentación?",
          options: ["GitHub", "Doxygen", "MySQL Workbench", "Swing Designer"],
        answer: 1,
          explanation: "**[Respuesta - Página 78]** *Herramientas de documentación: recordamos que debemos documentar todo el proceso de ingeniería. Un ejemplo sería la herramienta Doxygen.*"
    },
     {
        question: "20: ¿Cuál es la función principal del depurador (debugger) en un IDE?",
        options: ["Detectar y corregir errores en el código fuente", "Crear interfaces gráficas automáticamente", "Compilar el código a lenguaje máquina", "Controlar las versiones del software"],
          answer: 0,
         explanation: "**[Respuesta - Página 69]** *Depurador (debugger). Depura y limpia los errores en el código fuente. Permite detener el programa en cualquier punto de ruptura para examinar la ejecución.*"
     },
    {
        question: "21: En la metodología ágil SCRUM, ¿qué representa un sprint?",
         options: ["Un proceso de pruebas final", "Una reunión diaria del equipo", "Una iteración de desarrollo incremental", "Un documento de planificación inicial"],
         answer: 2,
           explanation: "**[Respuesta - Página 61]** *Ciclos (sprints): en cada uno de estos ciclos se desarrolla un incremento o iteración.*"
     },
    {
        question: "22: ¿Cuál es el primer paso para instalar Eclipse IDE?",
         options: ["Seleccionar un repositorio de actualizaciones", "Crear un proyecto Java antes de iniciar el IDE", "Instalar Swing primero", "Descargar el editor desde su página oficial"],
         answer: 3,
        explanation: "**[Respuesta - Página 71]** *Accedemos a la web oficial de Eclipse para su descarga gratuita y descargamos la versión para desarrolladores de Java.*"
     },
      {
        question: "23: ¿Cuál es un ejemplo de software distribuido como adware?",
         options: ["CCleaner", "Microsoft Office", "Firefox", "Malwarebytes"],
           answer: 1,
         explanation: "**[Respuesta - Página 8]** *Adware: es un aplicativo donde se ofrece publicidad incrustada, incluso durante la instalación de este. Por ejemplo, CCleaner.*"
    },
     {
       question: "24: ¿Qué componente se debe configurar al iniciar Eclipse por primera vez?",
        options: ["El espacio de trabajo (workspace)", "El compilador por defecto", "El depurador (debugger)", "El editor de texto"],
         answer: 0,
         explanation: "**[Respuesta - Página 71]** *Ejecutamos el .exe y se nos abrirá una ventana donde nos pedirá el espacio de trabajo (workspace).*"
    },
   {
       question: "25: ¿Qué significa WIP en Kanban?",
      options: ["Trabajo en progreso", "Workload intercalado", "Workflow de implementación", "Widgets en progreso"],
        answer: 0,
         explanation: "**[Respuesta - Página 62]** *Limita tu WIP (work in progress). Asigna límites en lo que respecta a cuántos elementos puedan estar en progreso en cada estado.*"
    },
    {
      question: "26: ¿Qué es un entorno integrado de desarrollo (IDE)?",
       options: ["Un lenguaje de programación específico", "Un editor de texto para escribir documentos", "Una aplicación con herramientas de programación para agilizar el desarrollo", "Un sistema operativo especializado"],
        answer: 2,
         explanation: "**[Respuesta - Página 69]** *Un IDE (entorno integrado de desarrollo) es una aplicación informática que estará formada por un conjunto de herramientas de programación que simplifican la tarea al programador y agilizan el desarrollo de programas.*"
   },
    {
        question: "27: ¿Qué tipo de herramientas CASE se utilizan en la fase de mantenimiento?",
        options: ["Herramientas de reporte y análisis de errores", "Herramientas de creación de documentación", "Herramientas de compilación de código", "Herramientas para modelar diagramas UML"],
         answer: 0,
            explanation: "**[Respuesta - Página 78]** *Herramientas de mantenimiento: nos ayudan a gestionar y organizar la fase de mantenimiento del software, reportando errores o analizando cuál puede ser la causa.*"
    },
    {
       question: "28. ¿Qué tipo de software administra la parte física e interactúa entre el hardware y los usuarios?",
        options: ["Software de programación", "Software adware", "Software de aplicación", "Software de sistema"],
        answer: 3,
         explanation: "**[Respuesta - Página 7]** *Software de sistema: es el que hace que el hardware funcione. Está formado por programas que administran la parte física e interactúa entre los usuarios y el hardware.*"
   },
   {
       question: "29. ¿Qué técnica de prueba valida la estructura interna del sistema?",
       options: ["Prueba de caja negra", "Prueba de caja blanca", "Prueba de aceptación", "Prueba de regresión"],
         answer: 1,
           explanation: "**[Respuesta - Página 81]** *En las pruebas de caja blanca, tendremos acceso al código fuente y se analizan todas posibilidades de nuestro código.*"
    },
  {
      question: "30. ¿Cuál es una ventaja de las metodologías ágiles como SCRUM?",
      options: ["Facilitan la adaptación a cambios", "No requieren documentación del proyecto", "Eliminan la necesidad de reuniones diarias", "Evitan involucrar al cliente en el proceso"],
        answer: 0,
          explanation: "**[Respuesta - Página 61]** *Las metodologías ágiles son métodos de gestión que permiten adaptar la forma de trabajo al contexto y naturaleza de un proyecto, basándose en la flexibilidad y la inmediatez y teniendo en cuenta las exigencias del mercado y de los clientes.*"
   },
    {
        question: "31. ¿Qué registro de la CPU almacena el código de la instrucción que se está ejecutando?",
        options: ["Registro de instrucción (RI)", "Contador de programa (CP)", "Registro de intercambio de memoria (RIM)", "Registro de dirección de memoria (RDM)"],
         answer: 0,
         explanation: "**[Respuesta - Página 12]** *Registro de instrucción (RI): es el que contiene el código de la instrucción, se analiza dicho código.*"
    },
    {
       question: "32. ¿Qué registro en la CPU almacena temporalmente la dirección de la próxima instrucción?",
       options: ["Contador de programa (CP)", "Registro de dirección de memoria (RDM)", "Registro de instrucción (RI)", "Registro de intercambio de memoria (RIM)"],
        answer: 0,
          explanation: "**[Respuesta - Página 12]** *Contador de programa (CP): contendrá la dirección de la siguiente instrucción para realizar.*"
    },
    {
      question: "33. ¿Qué herramienta se utiliza en Java para generar documentación en HTML?",
      options: ["JSDoc", "Eclipse Documentation", "Javadoc", "PHPDocumentor"],
        answer: 2,
        explanation: "**[Respuesta - Página 78]** *La herramienta Javadoc genera páginas HTML partiendo de este tipo de comentarios.*"
     },
      {
        question: "34. ¿Qué describe mejor el concepto de complejidad ciclomática?",
         options: ["Mide la cantidad de caminos independientes en un programa", "Mide el esfuerzo necesario para entender el programa", "Mide el volumen del programa", "Mide la cantidad de operadores únicos en el programa"],
          answer: 0,
           explanation: "**[Respuesta - Página 96]** *La complejidad ciclomática es una métrica del software que nos proporciona una medida cuantitativa de la complejidad lógica de un programa.*"
    },
    {
        question: "35. ¿Qué elemento del control de versiones almacena una copia del proyecto para crear nuevas funcionalidades?",
        options: ["Etiqueta (tag)", "Repositorio (repository)", "Tronco (trunk)", "Rama (branch)"],
        answer: 3,
         explanation: "**[Respuesta - Página 117]** *Rama o ramificar (branch). Copias de carpetas, archivos o proyectos. Se pueden crear ramas para la creación de nuevas funcionalidades o comprobación de errores.*"
     },
    {
        question: "36. ¿Cuál es una ventaja de la refactorización?",
          options: ["Aumenta el tiempo de desarrollo", "Reduce la funcionalidad del sistema", "Facilita la detección de errores en el código", "Elimina la necesidad de pruebas unitarias"],
        answer: 2,
           explanation: "**[Respuesta - Página 109]** *La refactorización tiene como objetivo limpiar el código para que se entienda mejor y se pueda modificar de forma más fácil, lo que nos va a permitir una mejor lectura y comprensión de lo que se realiza.*"
    },
    {
         question: "37. ¿Cuál es la principal misión de las herramientas linter en la depuración de código?",
         options: ["Generar documentación automática", "Probar valores límites del código fuente", "Medir la complejidad ciclomática", "Detectar errores de análisis sintáctico"],
           answer: 3,
            explanation: "**[Respuesta - Página 103]** *En esta sección, hablaremos de las herramientas linter. Estas herramientas nos ayudan a detectar código confuso o incompatible, es decir, errores de programación del análisis sintáctico que realiza nuestro compilador.*"
      },
       {
         question: "38. ¿Cuál es la misión principal de las pruebas de caja blanca?",
         options: ["Detectar errores en la interfaz gráfica", "Probar los requisitos funcionales del software", "Ejecutar todas las sentencias del programa", "Validar la estructura interna del programa"],
         answer: 2,
            explanation: "**[Respuesta - Página 81]** *En las pruebas de caja blanca, tendremos acceso al código fuente y se analizan todas posibilidades de nuestro código.*"
      },
    {
      question: "39. ¿Cuál es el propósito principal de las etiquetas (tags) en control de versiones?",
        options: ["Actualizar los archivos en el repositorio", "Crear una rama para nuevas funcionalidades", "Marcar una versión específica como finalizada", "Confirmar los cambios realizados"],
        answer: 2,
          explanation: "**[Respuesta - Página 117]** *Etiquetar o rotular (tag). Las etiquetas se crean para localizar o recuperar en cualquier momento una versión concreta del desarrollo.*"
    },
   {
     question: "40. ¿Qué es un \"commit\" en control de versiones?",
       options: ["Recuperar un archivo del repositorio", "Crear una nueva rama", "Actualizar los cambios en el repositorio local", "Confirmar los cambios realizados en local"],
        answer: 3,
        explanation: "**[Respuesta - Página 117]** *Confirmar (commit o check-in). Se realiza cuando se confirman los cambios realizados en local para integrarlos al repositorio.*"
   },
   {
        question: "41. ¿Cuál de las siguientes métricas NO pertenece a las métricas de Halstead?",
        options: ["Longitud del código fuente", "Esfuerzo para entender el programa", "Número de aristas en un grafo de flujo", "Dificultad del código fuente"],
        answer: 2,
         explanation: "**[Respuesta - Página 105]** *Esta métrica está basada en contar los operadores y operandos que hay en un programa.*"
    },
    {
       question: "42. ¿Cuál es el enfoque principal de las pruebas funcionales?",
       options: ["Identificar errores en la interfaz gráfica", "Evaluar las características descritas en la documentación", "Medir la complejidad del código fuente", "Validar la estructura interna del programa"],
          answer: 1,
          explanation: "**[Respuesta - Página 81]** *En las pruebas funcionales, tendremos acceso al código fuente y se analizan todas posibilidades de nuestro código.*"
    },
    {
     question: "43. ¿Cuál es la ventaja principal de la integración incremental sobre la integración big bang?",
        options: ["Permite localizar fallos más fácilmente", "Requiere menos pruebas", "Se enfoca en los módulos más altos primero", "No requiere pruebas unitarias"],
          answer: 0,
          explanation: "**[Respuesta - Página 83]**  *La integración incremental permite detectar los errores más facilmente.*"
    },
    {
        question: "44. ¿Qué etiqueta de Javadoc indica el autor de una clase?",
         options: ["@author", "@param", "@version", "@return"],
           answer: 0,
           explanation: "**[Respuesta - Página 78]** *Las etiquetas de Javadoc van precedidas por \"@\" y las más utilizadas son: @author Autor de la clase.*"
    },
    {
        question: "45. ¿Cuál es el propósito principal de la herramienta Javadoc?",
         options: ["Detectar errores en el código", "Ejecutar pruebas automáticas", "Optimizar la estructura interna del programa", "Generar documentación HTML a partir del código fuente"],
           answer: 3,
           explanation: "**[Respuesta - Página 78]** *Javadoc genera páginas HTML partiendo de este tipo de comentarios.*"
    },
     {
         question: "46. ¿Cuál es el objetivo principal de la refactorización?",
          options: ["Mejorar la lectura y comprensión del código", "Disminuir la cantidad de líneas de código", "Aumentar la funcionalidad del software", "Mejorar la documentación del proyecto"],
          answer: 0,
           explanation: "**[Respuesta - Página 109]** *La refactorización tiene como objetivo limpiar el código para que se entienda mejor y se pueda modificar de forma más fácil, lo que nos va a permitir una mejor lectura y comprensión de lo que se realiza.*"
     },
    {
        question: "47. ¿Cuál de las siguientes opciones NO es una herramienta de pruebas de unidad?",
       options: ["CPPUnit", "GitHub", "JUnit", "PHPUnit"],
         answer: 1,
           explanation: "**[Respuesta - Página 81]** *Algunas herramientas usadas para estas pruebas son JUnit, CPPUnit, PHPUnit, entre otras.*"
    },
    {
       question: "48. ¿Qué ventaja ofrece el control de versiones en el desarrollo de proyectos colaborativos?",
      options: ["Permite llevar un registro de los cambios realizados", "Aumenta la complejidad del desarrollo", "Disminuye el número de errores del sistema automáticamente", "Reduce la necesidad de pruebas"],
        answer: 0,
          explanation: "**[Respuesta - Página 117]** *El control de versiones implica la capacidad de poder recordar todos los cambios que se han realizado tanto en la estructura de directorios como en el contenido de los archivos.*"
   },
   {
      question: "49. ¿Cuál es una desventaja común de la refactorización?",
      options: ["Disminuye la calidad del software", "Reduce la legibilidad del código", "Los cambios en bases de datos pueden requerir migración estructural", "Incrementa la complejidad del código"],
        answer: 2,
        explanation: "**[Respuesta - Página 109]** *Las bases de datos y las interfaces son áreas conflictivas para la refactorización. El cambio de base de datos tendría como consecuencia la migración de la estructura y de los datos.*"
    },
    {
       question: "50. ¿Qué prueba valida el software directamente con el usuario final en su entorno de trabajo?",
        options: ["Prueba alfa", "Prueba beta", "Prueba de integración", "Prueba de unidad"],
          answer: 1,
          explanation: "**[Respuesta - Página 83]**  *Prueba beta: realizada por los usuarios finales en su lugar de trabajo sin la presencia del desarrollador.*"
    },
    {
       question: "51. ¿Qué técnica se basa en dividir los valores de entrada en clases válidas y no válidas?",
        options: ["Prueba del camino básico", "Análisis de valores límite", "Partición de clases de equivalencia", "Prueba de integración"],
        answer: 2,
         explanation: "**[Respuesta - Página 83]** *La partición equivalente es un método de prueba de caja negra que divide los valores de los campos de entrada de un programa en clases de equivalencia.*"
   },
       {
        question: "52. ¿Cuándo se utilizan pruebas de regresión?",
        options: ["Durante las pruebas unitarias", "Al comienzo del desarrollo del sistema", "Antes de implementar el sistema", "Después de realizar cambios en el sistema"],
        answer: 3,
         explanation: "**[Respuesta - Página 81]** *Las pruebas de regresión consisten en volver a probar una parte del sistema o un componente determinado tras haber sido modificado.*"
       },
      {
        question: "53. ¿Qué herramienta se utiliza para realizar pruebas de caja blanca automatizadas en Java?",
         options: ["Eclipse", "NetBeans", "JUnit", "GitHub"],
           answer: 2,
         explanation: "**[Respuesta - Página 81]** *Algunas herramientas usadas para estas pruebas son JUnit, CPPUnit, PHPUnit, entre otras.*"
    },
   {
        question: "54. En las pruebas de caja negra, ¿qué elemento NO es necesario conocer?",
       options: ["La estructura interna del programa", "El comportamiento esperado del sistema", "Los requisitos funcionales del software", "Los valores de entrada y salida"],
         answer: 0,
           explanation: "**[Respuesta - Página 81]** *En las pruebas de caja negra, tendremos acceso al código fuente y se analizan todas posibilidades de nuestro código.*"
   },
    {
        question: "55. ¿Qué acción permite mover una clase de un paquete a otro en refactorización?",
        options: ["Move", "Change Method Signature", "Rename", "Extract Method"],
          answer: 0,
            explanation: ""
     },
    {
        question: "56. ¿Qué se mide con la fórmula N = N1 + N2 en las métricas de Halstead?",
         options: ["La productividad", "El esfuerzo para entender el programa", "El volumen del programa", "La longitud del programa"],
           answer: 0,
            explanation: "**[Respuesta - Página 105]** *Longitud: N = N₁ + N2. Es la medida del tamaño del programa.*"
    },
    {
      question: "57. ¿Qué bad smell indica que un método usa más elementos de otra clase que de la suya propia?",
       options: ["Código duplicado", "Cambio divergente", "Cirugía a tiro de pistola", "Envidia de funcionalidad"],
        answer: 3,
        explanation: "**[Respuesta - Página 110]** *Envidia de funcionalidad (feature envy). Ocurre cuando un método usa más elementos de otra clase que de la suya propia.*"
    },
    {
         question: "58. ¿Cuál es el objetivo principal de las pruebas de regresión?",
          options: ["Probar el comportamiento externo del sistema", "Evaluar la arquitectura del software", "Medir la complejidad del código fuente", "Detectar fallos introducidos tras modificaciones"],
         answer: 3,
         explanation: "**[Respuesta - Página 81]** *Las pruebas de regresión consisten en volver a probar una parte del sistema o un componente determinado tras haber sido modificado.*"
    },
    {
         question: "59. ¿Cuál de los siguientes es un ejemplo de un patrón de refactorización?",
          options: ["Runtime Exception", "Extract Method", "Compile Error", "Code Debugging"],
          answer: 1,
           explanation: ""
    },
    {
        question: "60. ¿Qué regla define que las pruebas deben cubrir los límites del rango de entrada?",
         options: ["Pruebas funcionales", "Análisis de valores límite", "Pruebas de caja negra", "Partición de clases de equivalencia"],
          answer: 1,
        explanation: "**[Respuesta - Página 101]** *En el análisis de valores límites, la hipótesis es que suelen ocurrir más errores en los valores extremos de los campos de entrada.*"
     },
    {
        question: "61. ¿Qué es la refactorización en desarrollo de software?",
         options: ["Reducir el tamaño del programa al máximo", "Optimizar el código sin cambiar su comportamiento", "Aumentar la complejidad del código para mejorar el rendimiento", "Eliminar funciones innecesarias del programa"],
          answer: 1,
            explanation: "**[Respuesta - Página 109]** *La refactorización nos va a permitir optimizar un código que se ha escrito previamente, realizando cambios en la estructura interna sin que afecten al comportamiento final del producto.*"
     },
    {
        question: "62. ¿Qué operación en control de versiones crea una copia del proyecto en el equipo local?",
         options: ["Checkout", "Export", "Commit", "Merge"],
        answer: 0,
          explanation: "**[Respuesta - Página 117]** *Desplegar (checkout). Copia del proyecto, archivos y carpetas en el repositorio del equipo local.*"
    },
   {
         question: "63. ¿Qué mide la complejidad ciclomática en un programa?",
         options: ["El número de líneas ejecutadas en un grafo", "La longitud del código fuente", "La cantidad mínima de casos de prueba necesarios", "El número de operadores únicos utilizados"],
           answer: 2,
        explanation: "**[Respuesta - Página 96]** *La complejidad ciclomática es una métrica del software que nos proporciona una medida cuantitativa de la complejidad lógica de un programa.*"
    },
   {
        question: "64. ¿Qué característica define a un programa con complejidad ciclomática mayor a 50?",
          options: ["Es sencillo y fácil de mantener", "Es moderadamente complejo", "Es de muy alto riesgo y no testeable", ""],
          answer: 2,
        explanation: "**[Respuesta - Página 97]** *Programas o métodos no testeables, muy alto riesgo.*"
    },
     {
        question: "65. ¿Qué significa el símbolo “+” en un diagrama de clases UML?",
        options: ["Miembro público", "Miembro privado", "Miembro del paquete", "Miembro protegido"],
          answer: 0,
            explanation: ""
    },
    {
        question: "66. ¿Qué propiedad permite que un objeto trascienda en el tiempo y el espacio?",
        options: ["Concurrencia", "Modularidad", "Tipificación", "Persistencia"],
        answer: 3,
        explanation: "**[Respuesta - Página 14]** *Persistencia: propiedad de un objeto en virtud de la cual su existencia trasciende en el tiempo y/o el espacio.*"
    },
     {
        question: "67. ¿Cuál es la función de un rombo en un diagrama de actividades?",
        options: ["Indicar el inicio del flujo de control.", "Mostrar el final del flujo de control.", "Representar bifurcaciones en el flujo de control.", "Definir acciones compuestas."],
          answer: 2,
            explanation: "**[Respuesta - Página 174]** *El grafo de flujo de las estructuras de control se representa de la siguiente forma: Rombo: condición lógica.*"
    },
    {
        question: "68. ¿Cuál de los siguientes diagramas muestra la interacción entre elementos en tiempo de ejecución?",
         options: ["Diagrama de comunicación", "Diagrama de actividad", "Diagrama de estado", "Diagrama de secuencia"],
          answer: 0,
            explanation: "**[Respuesta - Página 149]** *Los diagramas de interacción incluyen diagramas como el diagrama de secuencia, diagrama de comunicación, diagrama de tiempos y diagrama de vista global de interacción. Se centran en el flujo de control y datos entre los elementos del sistema modelado.*"
     },

     {
        question: "69: ¿Qué tipo de diagrama permite modelar el comportamiento del sistema desde el punto de vista del usuario?",
        options: ["Diagrama de actividad", "Diagrama de casos de uso", "Diagrama de estado", "Diagrama de secuencia"],
         answer: 1,
          explanation: "**[Respuesta - Página 150]** *Los casos de uso van a modelar el sistema desde el punto de vista del usuario.*"
     },
     {
         question: "70: ¿Cuál es la relación más común en un diagrama de casos de uso?",
         options: ["Relación de asociación", "Relación de extensión", "Relación de generalización", "Relación de inclusión"],
         answer: 0,
           explanation: "**[Respuesta - Página 150]** *La más común es una relación bidireccional entre actores y casos de uso representada con una línea continua.*"
     },
     {
         question: "71: ¿Cuál es el objetivo principal de un diagrama de clases?",
         options: ["Representar la estructura estática de un sistema.", "Describir estados y transiciones.", "Definir el flujo de control del sistema.", "Mostrar la interacción entre objetos."],
         answer: 0,
          explanation: "**[Respuesta - Página 134]** *Como ya hemos comentado, un diagrama de clases es una representación gráfica y estática de la estructura general de un sistema...*"
     },
     {
          question: "72: ¿Qué relación permite la existencia de una clase intermediaria con atributos propios?",
         options: ["Agregación", "Clase asociación", "Dependencia", "Herencia"],
           answer: 1,
         explanation: "**[Respuesta - Página 137]** *Hay asociaciones entre clases que podrán tener información necesaria para dicha relación, por lo que se creará una clase llamada clase asociación.*"
     },
      {
          question: "73: ¿Cuántos tipos de diagramas define UML 2.0?",
          options: ["8", "15", "13", "10"],
         answer: 2,
         explanation: "**[Respuesta - Página 179]** *UML 2.0 define 13 tipos de diagramas, divididos en 2 categorías.*"
     },
     {
       question: "74: ¿Qué tipo de relación indica que un caso de uso hijo hereda comportamiento del padre?",
       options: ["include", "Asociación", "extend", "Generalización"],
          answer: 3,
          explanation: "**[Respuesta - Página 150]** *La relación de generalización se usa cuando se poseen uno o más casos de uso que son especificaciones de un caso de uso más general.*"
     },
       {
         question: "75. ¿Qué herramienta permite crear diagramas de casos de uso según el texto?",
         options: ["Visual Paradigm", "Enterprise Architect", "StarUML", "Papyrus"],
          answer: 3,
          explanation: "**[Respuesta - Página 75]** *Para ello, utilizaremos Eclipse y deberemos instalar un plugin que nos permita este desarrollo. Vamos a instalar WindowBuilder. Esto lo podremos hacer desde el propio Eclipse, seleccionando Help > Install New Software:*"
      },
    {
          question: "76. ¿Qué tipo de relación permite navegar en ambos sentidos entre dos clases?",
          options: ["Asociación bidireccional", "Asociación unidireccional", "Dependencia", "Composición"],
           answer: 0,
            explanation: "**[Respuesta - Página 136]** *Una asociación bidireccional se puede recorrer en ambos sentidos entre las dos clases.*"
    },
      {
       question: "77. ¿Qué relación permite a una clase usar otra sin que haya un vínculo permanente?",
       options: ["Dependencia", "Herencia", "Composición", "Asociación"],
           answer: 0,
             explanation: "**[Respuesta - Página 138]**  *Es una relación unidireccional donde una clase utiliza a otra.*"
     },
     {
         question: "78. ¿Qué notación se utiliza para indicar que un caso de uso incluye el comportamiento de otro?",
          options: ["include", "extend", "asociación", "generalization"],
         answer: 0,
         explanation: "**[Respuesta - Página 153]** *include: un caso de uso base incorpora explícitamente el comportamiento de otro en algún lugar de su secuencia.*"
     },
     {
         question: "79. ¿Qué es UML?",
         options: ["Un lenguaje gráfico para modelar sistemas.", "Una herramienta de gestión de proyectos.", "Un método de diseño estructurado.", "Un lenguaje de programación."],
         answer: 0,
         explanation: "**[Respuesta - Página 179]** *UML (unified modeling language) es un lenguaje modelado unificado que visualiza, especifica y documenta todas las partes necesarias para desarrollar el software.*"
      },
      {
          question: "80. ¿Cuál es una característica clave de los diagramas de interacción?",
           options: ["Representan la estructura estática del sistema.", "Describen estados y transiciones.", "Se utilizan solo en sistemas de hardware.", "Se centran en el flujo de control y datos."],
          answer: 3,
           explanation: "**[Respuesta - Página 149]** *Los diagramas de interacción incluyen diagramas como el diagrama de secuencia, diagrama de comunicación, diagrama de tiempos y diagrama de vista global de interacción. Se centran en el flujo de control y datos entre los elementos del sistema modelado.*"
     },
      {
        question: "81. ¿Cuál de los siguientes programas NO fue mencionado explícitamente en el texto?",
         options: ["Enterprise Architect", "Modelio", "StarUML", "ArgoUML"],
           answer: 3,
         explanation: ""
      },
     {
        question: "82. ¿Cuál es una función del panel principal en Papyrus?",
         options: ["Seleccionar la arquitectura del proyecto.", "Definir relaciones entre elementos.", "Colocar los elementos del diagrama.", "Generar código automáticamente."],
           answer: 2,
         explanation: "**[Respuesta - Página 170]** *En el panel por defecto de la parte derecha tenemos el apartado nodes, donde elegimos los elementos de nuestro diagrama (actores, casos de uso, etcétera) y el apartado links, donde elegimos la relación de estos elementos (<<extend>>, <<include>>, entre otras).* "
     },
     {
        question: "83. ¿Cuál es el propósito principal de un diagrama de secuencia?",
        options: ["Representar estados y transiciones.", "Definir los requisitos del sistema.", "Mostrar la interacción de objetos a lo largo del tiempo.", "Indicar el flujo de control de actividades."],
           answer: 2,
            explanation: "**[Respuesta - Página 156]** *El diagrama de secuencia nos mostrará gráficamente los eventos que fluyen de los actores del sistema.*"
     },
    {
         question: "84. ¿Qué simboliza una línea de vida en un diagrama de secuencia?",
        options: ["La interacción de un objeto a lo largo del tiempo.", "La relación entre dos objetos.", "La finalización de un proceso.", "La creación de un objeto."],
           answer: 0,
          explanation: "**[Respuesta - Página 156]** *Cada objeto será representado por un rectángulo en la parte superior del diagrama, y cada uno tendrá una línea vertical llamada línea de vida, la cual describe la interacción a lo largo del tiempo.*"
     },
     {
          question: "85. ¿Qué elemento no puede ser un actor en un diagrama de casos de uso?",
         options: ["Un dispositivo externo", "Un sistema externo", "Una persona", "Un elemento interno del sistema."],
           answer: 3,
          explanation: "**[Respuesta - Página 150]** *Los actores son unidades externas que van a interactuar con el sistema.*"
      },
    {
        question: "86. En un diagrama de actividades, ¿qué se usa para representar un flujo concurrente?",
        options: ["Rombo", "Transición", "Unión y división", "Óvalo"],
        answer: 2,
         explanation: "**[Respuesta - Página 169]** *Puede que las tareas sean concurrentes y que se tengan que dividir o unir.*"
    },
      {
        question: "87. ¿Qué tipo de panel en Papyrus permite elegir elementos del diagrama?",
          options: ["Panel del proyecto", "Panel principal", "Panel de propiedades", "Panel de nodes"],
         answer: 3,
         explanation: "**[Respuesta - Página 170]** *En el panel por defecto de la parte derecha tenemos el apartado nodes, donde elegimos los elementos de nuestro diagrama...* "
      },
       {
         question: "88. ¿Qué versión de UML fue lanzada en torno a 2005?",
         options: ["UML 1.x", "UML 3.x", "UML 2.x", "UML 2.5"],
           answer: 2,
           explanation: "**[Respuesta - Página 179]** *UML 2.x: en torno a 2005 se difundió una nueva versión de UML.*"
       },
     {
         question: "89. ¿Qué tipo de mensaje no espera respuesta antes de continuar su actividad?",
        options: ["Mensaje de retorno", "Mensaje síncrono", "Mensaje reflexivo", "Mensaje asíncrono"],
          answer: 3,
           explanation: "**[Respuesta - Página 156]** *Mensaje asíncrono: cuando el emisor que envía un mensaje asíncrono continúa con su trabajo después de ser enviado, es decir, no espera a que el receptor finalice la ejecución del mensaje.*"
    },
     {
       question: "90. ¿Qué principio OO permite que diferentes clases respondan a un mismo método con comportamientos diferentes?",
         options: ["Polimorfismo", "Jerarquía", "Abstracción", "Tipificación"],
           answer: 0,
           explanation: "**[Respuesta - Página 14]** *Polimorfismo: nos va a permitir el envío de mensajes iguales a diferentes tipos de objetos.*"
     },
     {
          question: "91. ¿Qué permite el operador loop en un diagrama de secuencia?",
           options: ["Indicar varias alternativas posibles.", "Repetir una acción mientras se cumpla una condición.", "Representar un flujo opcional.", "Mostrar tareas concurrentes."],
           answer: 1,
            explanation: "**[Respuesta - Página 160]** *Si queremos representar un bucle, lo haremos con el operador loop seguido de una condición.*"
     },
     {
          question: "92. ¿Qué indica la multiplicidad “1..*” en una relación UML?",
         options: ["De varios a varios", "De cero a uno", "De uno a varios", "De uno a uno"],
         answer: 2,
            explanation: "**[Respuesta - Página 135]** *1..* De una a varias veces*"
     },
       {
         question: "93. En un diagrama de actividades, ¿cómo se indican tareas concurrentes?",
          options: ["Mediante bifurcaciones exclusivas.", "División y unión del flujo de control.", "Con nodos de acción simples.", "Con transiciones simples."],
          answer: 1,
          explanation: "**[Respuesta - Página 169]** *Puede que las tareas sean concurrentes y que se tengan que dividir o unir.*"
     },
    {
         question: "94. ¿Qué tipo de diagrama pertenece a los diagramas de comportamiento?",
           options: ["Diagrama de paquetes", "Diagrama de casos de uso", "Diagrama de objetos", "Diagrama de componentes"],
           answer: 1,
             explanation: "**[Respuesta - Página 149]** *Los diagramas de comportamiento mostrarán, como su propio nombre indica, el comportamiento de un sistema.*"
     },
     {
          question: "95. ¿Qué relación en UML permite compartir atributos y métodos entre una clase padre y sus subclases?",
         options: ["Asociación", "Herencia", "Agregación", "Composición"],
          answer: 1,
            explanation: "**[Respuesta - Página 57]** *Por eso, en cuanto a las clases se refiere, se dice que una clase hereda de otra cuando adquiere características y métodos de la clase padre.*"
     },
      {
        question: "96. ¿Qué significa el operador alt en un diagrama de secuencia?",
         options: ["Representa alternativas en el flujo.", "Define un flujo de control opcional.", "Indica un bucle.", "Muestra tareas concurrentes."],
          answer: 0,
          explanation: "**[Respuesta - Página 160]** *Usando operador alt seguido de varias condiciones y al final la palabra clave else. Se dividirá en varias zonas según las condiciones que haya.*"
    },
      {
         question: "97. ¿Qué elemento en un diagrama de casos de uso delimita el sistema?",
        options: ["Óvalo", "Rectángulo", "Flecha continua", "Círculo"],
         answer: 1,
           explanation: "**[Respuesta - Página 150]** *También podemos tener un rectángulo que delimite el sistema.*"
     },
      {
        question: "98. ¿Qué principio de orientación a objetos permite que una subclase herede atributos y métodos de su superclase?",
        options: ["Encapsulación", "Modularidad", "Jerarquía", "Polimorfismo"],
         answer: 2,
         explanation: "**[Respuesta - Página 14]** *Jerarquía: nos referimos a que vamos a tener una serie de objetos que desciendan de otros.*"
     }
    ];