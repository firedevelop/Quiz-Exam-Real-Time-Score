export const questions = [
    {
        id: 1,
        question: "1: ¿En cuántos tipos de marcas podemos dividir los lenguajes de marcas?",
        options: ["Un tipo", "Dos tipos", "Tres tipos", "Cuatro tipos"],
        answer: 3,
        explanation: "d) Todas las opciones son correctas."
    },
    {
        id: 2,
        question: "2: ¿Qué tipos de herramientas podemos utilizar en un documento XML?",
        options: ["Editores de texto básicos", "Editores de texto avanzados", "Editores XML", "Todos los anteriores"],
        answer: 3,
        explanation: "d) Todas las opciones son correctas."
    },
    {
        id: 3,
        question: "3: ¿De qué forma se organiza la información de un documento XML?",
        options: ["Lineal", "Jerárquica", "Relacional", "En red"],
        answer: 1,
        explanation: "a) Jerárquica."
    },
    {   
        id: 4,
        question: "4: ¿Qué nombre falta en la etiqueta p1?\n<profesor>\n  <nombre> Roberto </nombre>\n  <apellido> Nadal <p1>\n</profesor>",
        options: ["/nombre", "/apellido", "apellido", "nombre"],
        answer: 0,
        explanation: "a) /apellido."
    },
    {
        id: 5,
        question: "5: En el siguiente ejemplo XML, ¿cuál es el elemento raíz?\n<alumno>\n  <nombre>Roberto</nombre>\n  <segundo_nombre>Mesa</segundo_nombre>\n  <edad>19</edad>\n</alumno>",
        options: ["nombre", "edad", "alumno", "segundo_nombre"],
        answer: 2,
        explanation: "a) alumno."
    },
    {
        id: 6,
        question: "6: ¿Cuántos \"hermanos\" tiene la etiqueta <nombre> en el siguiente ejemplo XML?\n<alumno>\n  <nombre>Roberto</nombre>\n  <segundo_nombre>Mesa</segundo_nombre>\n  <edad>19</edad>\n</alumno>",
        options: ["1", "2", "3", "No tiene"],
        answer: 1,
        explanation: "b) 2."
    },
    {
        id: 7,
        question: "7: Se definen una serie de reglas que asignan unas restricciones sobre la estructura del documento XML.",
        options: ["Atributos", "Definición tipo de documento (DTD)", "Texto", "Espacio de nombres"],
        answer: 1,
        explanation: "a) Definición tipo de documento (DTD)."
    },
    {
        id: 8,
        question: "8: Todos aquellos ficheros que contengan documentos HTML van a tener como extensión .html o .htm.",
        options: ["Verdadero", "Falso"],
        answer: 0,
        explanation: "a) Verdadero."
    },
    {
        id: 9,
        question: "9: Definen una serie de elementos que forman el léxico del lenguaje HTML. Se encuentran entre los signos de menor que (<) y mayor que (>). ¿De qué estamos hablando?",
        options: ["Atributos", "Etiquetas", "Documentos", "Imágenes"],
        answer: 1,
        explanation: "a) Etiquetas."
    },
    {
        id: 10,
        question: "10: Las etiquetas abiertas cuentan con una única palabra reservada para indicar el inicio y fin de la etiqueta a la vez. Señala cuál de las siguientes etiquetas son de tipo abierto.",
        options: ["<img>", "<br>", "<hr>", "Todas las opciones son correctas"],
        answer: 3,
        explanation: "d) Todas las opciones son correctas."
    },
    {
        id: 11,
        question: "11: Es la etiqueta que se utiliza para el inicio del cuerpo.",
        options: ["<body>", "<title>", "<head>", "Ninguna opción es correcta"],
        answer: 0,
        explanation: "a) <body>."
    },
    {
        id: 12,
        question: "12: ¿Cómo se representan los comentarios en lenguaje HTML?",
        options: ["<!--Esto es un comentario-->", "//Esto es un comentario", "(Esto es un comentario)", "Todas las opciones son válidas"],
        answer: 0,
        explanation: "a) <!--Esto es un comentario-->."
    },
    {
        id: 13,
        question: "13: ¿Cuál de estas etiquetas muestra el texto más grande VISUALMENTE en HTML?",
        options: ["<h2>Texto MUY GRANDE </h2>", "<bigFont> Texto MUY GRANDE </bigFont>", "<h12>Texto MUY GRANDE </h12>", "<h1>Texto MUY GRANDE </h1>"],
        answer: 3,
        explanation: "d) <h1>Texto MUY GRANDE </h1>."
    },
    {
        id: 14,
        question: "14: ¿Cómo se escribe un texto en forma de párrafo mediante el lenguaje HTML?",
        options: ["<p>", "<br>", "<tr>", "<td>"],
        answer: 0,
        explanation: "a) <p>."
    },
    {
        id: 15,
        question: "15: ¿Cómo se llama el atributo que nos ofrece la posibilidad de crear un hiperenlace? Debemos indicar una URL que va a ser la que queramos acceder al hacer clic en el hiperenlace.",
        options: ["href", "<a>", "<u>", "<i>"],
        answer: 0,
        explanation: "a) href."
    },
    {
        id: 16,
        question: "16: Queremos listar de forma numerada los nombres que hay a continuación, ¿qué nombre le pondremos a la etiqueta p2?\n<p2>\n  <li>Marta</li>\n  <li>Sara</li>\n  <li>Ana</li>\n</p2>",
        options: ["ol", "ul", "il", "li"],
        answer: 0,
        explanation: "a) ol."
    },
    {
        id: 17,
        question: "17: En HTML, es la marca que sirve para agrupar varios elementos dentro de un bloque y permite asignarle un identificador.",
        options: ["<div></div>", "<dl></dl>", "<form></form>", "<img>"],
        answer: 0,
        explanation: "a) <div></div>."
    },
    {
        id: 18,
        question: "18: En el lenguaje HTML, ¿mediante qué comando se define un formulario?",
        options: ["<form> </form>", "<table> </table>", "<fom> </fom>", "<img>"],
        answer: 0,
        explanation: "a) <form> </form>."
    },
    {
        id: 19,
        question: "19: ¿Qué nombre pondremos en la etiqueta <XXX> del siguiente HTML?\n<!DOCTYPE html>\n<html>\n  <body>\n    <h2>Introduce un titulo</h2>\n    <table>\n      <XXX>\n        <YYY>Adios</YYY>\n      </XXX>\n    </table>\n  </body>\n</html>",
        options: ["<tr> </tr>", "<td></td>", "<form></form>", "<img>"],
        answer: 0,
        explanation: "a) <tr> </tr>."
    },
    {
        id: 20,
        question: "20: Señala que etiqueta podría faltar en lugar de <YYY>.\n<!DOCTYPE html>\n<html>\n <body>\n    <h2>Introduce un titulo</h2>\n    <table>\n      <XXX>\n       <YYY>Adios</YYY>\n      </XXX>\n    </table>\n </body>\n</html>",
        options: ["<tr> </tr", "<td></td>", "<form></form>", "<img>"],
        answer: 1,
        explanation: "b) <td></td>."
    },
    {
        id: 21,
        question: "21: Indica cuantas formas existen de añadir hojas de estilo a los documentos HTML.",
        options: ["Una forma", "Dos formas", "Tres formas", "Todas las opciones son correctas"],
        answer: 3,
        explanation: "d) Todas las opciones son correctas."
    },
    {
        id: 22,
        question: "22: Indica otra forma de representar el siguiente contenido CSS.\nh1{Font-family: Verdana;}\nh1{color:red;}",
        options: ["h1{Font-family: Verdana; color: red;}", "h1[{Font-family: Verdana} & {color: red;}]", "h1 [Font-family: Verdana} ; {color: red;}]", "Ninguna opción es posible"],
        answer: 0,
        explanation: "a) h1{Font-family: Verdana; color: red;}."
    },
    {
        id: 23,
        question: "23: Los atributos tienen distintas formas de seleccionar elementos. ¿Cómo lo representaremos si queremos elementos que tienen el mismo atributo con el valor que se pasa?",
        options: ["[atributo=valor]", "[atributo]", "[atributo |= valor]", "Ninguna opción es coherente"],
        answer: 0,
        explanation: "a) [atributo=valor]."
    },
    {
        id: 24,
        question: "24: En las hojas de estilo en cascada, indica cuál/es de las siguientes formas son válidas para incorporar color al contenido de la etiqueta <p>.",
        options: ["p {color: #ffo}", "p {color: rgb(255, 255, 0)}", "p {color: rgb (100%, 100%, 0)}", "Todas las opciones son correctas"],
        answer: 3,
        explanation: "d) Todas las opciones son correctas"
    },
    {
        id: 25,
        question: "25: Primero de todo, es necesario saber que el objetivo de un DTD es especificar aquellos elementos que deben aparecer, junto con el orden que deben seguir. ¿A qué se refiere la siguiente definición: es una declaración de un tipo de elemento que nos señala si existe un elemento a un determinado documento XML?",
        options: ["<!ELEMENT>", "<!ATTLIST>", "<!NOTIFICATION>", "Ninguna opción es correcta"],
        answer: 0,
        explanation: "a) <!ELEMENT>."
    },
    {
        id: 26,
        question: "26: ¿Cuál de las siguientes opciones es un atributo que podemos diferenciar en un DTD?",
        options: ["CDATA", "ID", "NMTOKEN", "IDREF", "Todas las opciones son correctas"],
        answer: 4,
        explanation: "e) Todas las opciones son correctas."
    },
    {
        id: 27,
        question: "27: ¿Cómo se representa en el documento XML teniendo la siguiente declaración del atributo en el DTD?\n<!ATTLIST hora zona CDATA \"GMT+1\" #REQUIRED>",
        options: ["<hora zona=\"GTM+1\">13:00</hora>", "<zona hora=\"GTM+1\">13:00</zona>", "<hora zona=\"GTM+1\">13:00</zona>", "Ninguna opción es correcta"],
        answer: 0,
        explanation: "a) <hora zona=\"GTM+1\">13:00</hora>."
    },
    {
        id: 28,
        question: "28: Indica cuál de las siguientes opciones es un componente que utilizamos para declarar un elemento y comprobar si existe en el documento XML.",
        options: ["xs:element", "xs:attribute", "xs:schema", "Todas las opciones son correctas"],
        answer: 0,
        explanation: "a) xs:element."
    },
    {
        id: 29,
        question: "29: ¿Cuál de las siguientes afirmaciones sobre los tipos de datos complejos es correcta?",
        options: ["Se asignan a aquellos elementos que poseen elementos o atributos descendientes", "Puede estar vacío, es decir, que no tiene contenido, aunque sí atributos", "Puede tener contenido mixto, que significa, mezcla de contenido textual con elementos descendientes", "Todas las opciones son correctas"],
        answer: 3,
        explanation: "d) Todas las opciones son correctas."
    },
    {
        id: 30,
        question: "30: Es un lenguaje derivado del XML y tiene como función principal compartir o distribuir la información que se encuentra en la web.",
        options: ["RSS", "XQuery", "XSchema", "Ninguna opción es correcta"],
        answer: 0,
        explanation: "a) RSS."
    },
    {
        id: 31,
        question: "31: Indica cuál de las siguientes opciones son elementos se necesita en la etiqueta <channel> para describir la fuente RSS.",
        options: ["<title>, <link> y <description>", "<rating>, <language> y <link>", "<title>, <description> y <rating>", "<description>, <language> y <link>"],
        answer: 0,
        explanation: "a) <title>, <link> y <description>."
    },
    {
        id: 32,
        question: "32: Dentro del elemento <channel>, ¿qué etiqueta permite información inmediata de los cambios de canal?",
        options: ["<cloud>", "<copyright>", "<generator>", "<pubDate>"],
        answer: 0,
        explanation: "a) <cloud>."
    },
    {
        id: 33,
        question: "33: ¿Cómo se llama el elemento que cuenta con la posibilidad de poder definir un determinado artículo en el canal RSS?",
        options: ["<item>", "<title>", "<link>", "<channel>"],
        answer: 0,
        explanation: "a) <item>."
    },
    {
        id: 34,
        question: "34: Dentro del elemento <item>, ¿qué etiqueta permite incluir un archivo multimedia?",
        options: ["<enclosure>", "<guid>", "<source>", "<author>"],
        answer: 0,
        explanation: "a) <enclosure>."
    },
    {
        id: 35,
        question: "35: Una vez creado el archivo RSS, ¿mediante qué herramienta podemos validarlo?",
        options: ["W3C", "PDF validator", "WC3", "3WC"],
        answer: 0,
        explanation: "a) W3C."
    },
    {
        id: 36,
        question: "36: ¿Cuál es el lector RSS que se puede instalar en el ordenador de un usuario?",
        options: ["Agregador de escritorio", "Agregador en línea", "Agregador como plug-in", "Todas las opciones son correctas"],
        answer: 0,
        explanation: "a) Agregador de escritorio."
    },
    {
        id: 37,
        question: "37: ¿Cuál es el lenguaje que puede transformar aquellos documentos XML a diferentes formatos?",
        options: ["XSLT", "XPath", "XSL-FO", "Ninguna opción es correcta"],
        answer: 0,
        explanation: "a) XSLT."
    },
    {
        id: 38,
        question: "38: Completa el esquema de procesamiento XSLT.\nDocumento XML\n1\t2\t3",
        options: ["1: Hoja de transformaciones XSLT – 2: Procesador XSLT - 3: Documento transformado", "1: Procesador XSLT – 2: Hoja de transformaciones XSLT – 3: Documento transformado", "1: Procesador XSLT – 2: Hoja de transformaciones XSLT – 3: Documento inicial", "1: Documento inicial – 2: Procesador XSLT - 3: Hoja de transformaciones XSLT"],
        answer: 0,
        explanation: "a) 1: Hoja de transformaciones XSLT – 2: Procesador XSLT - 3: Documento transformado."
    },
    {
        id: 39,
        question: "39: Dentro de los elementos básicos de una hoja de transformaciones, es el elemento encargado de definir el formato del documento de salida. Este elemento corresponde a un nivel superior y tiene que aparecer como \"hijo de”. ¿De qué elementos estamos hablando?",
        options: ["xsl: output", "xsl: stylesheet", "xsl: template", "Ninguna de las opciones es correcta"],
        answer: 0,
        explanation: "a) xsl: output."
    },
    {
        id: 40,
        question: "40: Dentro de las instrucciones de control, permite repetir una lista de elementos para poder realizar diferentes transformaciones sobre ellos. ¿De qué estamos hablando?",
        options: ["xsl: for- each", "xsl: sort", "xsl: if", "Ninguna opción es correcta"],
        answer: 0,
        explanation: "a) xsl: for- each."
    },
    {
        id: 41,
        question: "41: En referencia a los objetos de formateo XSL-FO, coloca la región correspondiente en el número 4.\n\t1\n\t2\t region-body \t3\n4",
        options: ["region-before", "region-after", "region-start", "región-end"],
        answer: 1,
        explanation: "b) region- after."
    },
    {
        id: 42,
        question: "42: En referencia a los objetos de formateo XSL-FO, ¿cuál es la región correspondiente en el número 1?\n1\n\t2\t region-body \t3\n4",
        options: ["region-before", "region-start", "region-end", "region-after"],
        answer: 0,
        explanation: "a) region-before."
    },
    {
        id: 43,
        question: "43: ¿Cuál de las siguientes herramientas de control de versiones se menciona como ejemplo en el texto?",
        options: ["Git", "IntelliJ IDEA", "Eclipse", "Swing"],
        answer: 0,
        explanation: "**[Respuesta - Página 117]** *Ejemplos de control de versiones son GIT o TFS.*"
    },
    {
        id: 44,
        question: "44: Como ya sabemos, un documento XML posee una estructura árbol que tiene su origen en un elemento raíz, y que se va a ir derivando en sus respectivos hijos que, a su vez, pueden ser raíz de otras estructuras árbol. ¿Qué es Xpath?",
        options: ["Un lenguaje diseñado para acceder a documentos XML", "Un lenguaje diseñado para transformar documentos XML", "Un lenguaje diseñado para dar formato de salida a los documentos XML", "Todas las opciones anteriores son correctas"],
        answer: 3,
        explanation: "d) Todas las opciones anteriores son correctas."
    },
    {
        id: 45,
        question: "45: ¿Cuál de las siguientes afirmaciones son ciertas en XQuery?",
        options: ["Permite realizar consultas", "Permite extraer información", "Es orientado a bases de datos", "Permite procesar información", "Todas las opciones anteriores son correctas"],
        answer: 4,
        explanation: "e) Todas las opciones anteriores son correctas."
    },
    {
        id: 46,
        question: "46: ¿Qué significa el siguiente código de expresión en lenguaje XPath: e1/e2?",
        options: ["Elemento e2 es hijo directo de su padre e1", "Elemento e1 es hijo directo de su padre e2", "Elemento e2 es el directorio raíz", "Todas las opciones son correctas"],
        answer: 0,
        explanation: "a) Elemento e2 es hijo directo de su padre e1."
    },
    {
        id: 47,
        question: "47: ¿Qué significa el siguiente código de expresión en lenguaje XPath: @atrib?",
        options: ["Atributo que se identifica con el nombre atrib", "Atributo que se identifica con el nombre atributo", "Atributo que se identifica con el nombre Atrib", "Todas las opciones son correctas"],
        answer: 0,
        explanation: "a) Atributo que se identifica con el nombre atrib."
    },
    {
        id: 48,
        question: "48: ¿Qué son los sistemas ERP?",
        options: ["Distintas herramientas que tienen como fin facilitar a los empleados los cambios que tengan que modificar", "Las distintas herramientas que vamos a emplear para analizar datos y resultados hasta que podamos sacar las conclusiones oportunas", "Aplicaciones con un amplio rango de funcionalidades", "Aplicaciones integrales y modulares"],
        answer: 3,
        explanation: "d) Aplicaciones integrales y modulares."
    },
    {
        id: 49,
        question: "49: ¿Cómo se definen las aplicaciones de inteligencia de negocio?",
        options: ["Aplicaciones que se manejan de forma inteligente y hacen todo por el usuario", "Aplicaciones que consiguen, entre otras cosas, automatizar y agilizar procesos, registrar resultados y favorecer la extracción de conclusiones", "Procesos del mundo de los negocios donde todo se gestiona y centraliza en una misma aplicación", "No existen las aplicaciones de inteligencia de negocio, es un término usado para vender ciertas aplicaciones de una forma más atractiva."],
        answer: 1,
        explanation: "b) Aplicaciones que consiguen, entre otras cosas, automatizar y agilizar procesos, registrar resultados y favorecer la extracción de conclusiones."
    },
    {
        id: 50,
        question: "50: ¿Cuál de los siguientes programas es ejemplo de EPR?",
        options: ["SAP", "Odoo", "OpenBravo", "Todas las opciones son correctas"],
        answer: 3,
        explanation: "d) Todas las opciones son correctas."
    },
    {
        id: 51,
        question: "51: ¿Cuál de las siguientes opciones es una característica/as de la planificación de recursos empresariales (ERP)?",
        options: ["Integral", "Modular", "Parametrizable", "Escalable", "Todas las opciones son correctas"],
        answer: 4,
        explanation: "e) Todas las opciones son correctas."
    },
    {
        id: 52,
        question: "52: Indica cuál de las siguientes opciones es una desventaja de los ERP.",
        options: ["La instalación y puesta en marcha de un sistema ERP es una inversión que cuesta dinero y tiempo.", "Optimización de los procesos que se desarrollen en la empresa.", "Análisis del estado de la empresa desde una visión global.", "Acceso a toda la información de una empresa de manera modular y basada en roles."],
        answer: 0,
        explanation: "a) La instalación y puesta en marcha de un sistema ERP es una inversión que cuesta dinero y tiempo."
    },
    {
        id: 53,
        question: "53: Indica los módulos que podemos encontrar en un ERP.",
        options: ["Módulo de Recursos Humanos", "Módulo de logística", "Módulo de finanzas", "Módulo de ventas", "Módulo de facturación", "Todas las opciones son correctas"],
        answer: 5,
        explanation: "f) Todas las opciones son correctas."
    },
    {
        id: 54,
        question: "54: ¿Cuáles son las principales tareas de la gestión de relaciones con el cliente (CRM)?",
        options: ["Almacenar datos", "Lanzar ofertas", "Realizar informes", "Llevar a cabo campañas publicitarias", "Todas las opciones son correctas"],
        answer: 4,
        explanation: "e) Todas las opciones son correctas."
    }
];