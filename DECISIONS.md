# Decisiones Tomadas en el Proyecto

## 1. Enfoque General de la solución
- Utilicé un enfoque de monorepo con npm workspaces para gestionar el lado del Backend (API) y el Frontend (Cliente)
- La idea general de esta solución era mantener un espacio limpio del backend para que el frontend lograra presentar datos sin la necesidad de aplicar mucha lógica de JS
- Apliqué interfaces al tipado de Typescript para mantener la consistencia y claridad del código

## 2. Decisiones Técnicas Principales
- Utilicé npm workspaces para gestionar el monorepo
- El backend se encarga de renderizar videos y de calcular el nivel de Hype de cada uno para enviar una información clara al frontend
- Se ordenaron los videos por nivel de Hype de mayor a menor para mantener una claridad en la presentación
- Cree nuevas URL para las imágenes usando placeholder.co debido a que la URL proporcionada no estaba en funcionamiento. De esta manera se evitaron errores en el renderizado y se mantuvo la consistencia visual
- Se utilizó TailwindCSS para el diseño responsive y moderno del frontend
- Opté por no paginar la lista de videos para asemejar la interfaz a la de Youtube (página de referencia para el renderizado de videos y sus estadísticas)
- Cree una expresión regular que me permitió encontrar la palabra tutorial en cada video para hacer la multiplicación solicitada en la fórmula de Hype
- Condicioné el valor de la variable de Hype para validar la existencia de comentarios y evitar valores incorrectos que afectaran el frontend


## 3. Organización del Proyecto
- El proyecto se organizó como un Monorepo conteniendo el lado de la api (backend) y el lado del cliente (frontend) en dos carpetas distintas que no comparten código entre si para evitar confusiones y mantener la separación de responsabilidades
- Utilicé una distribución de carpetas ordenadas en donde se puede identificar fácilmente cada componente y archivo por su nombre y extensión. Por ejemplo: `videos-data.interface.ts`
- Los paquetes están organizados por nivel de responsabilidad. En la carpeta root (principal) están los paquetes comunes para ambos servicios api y cliente, mientras que en las carpetas de cada servicio están los paquetes específicos para cada uno

## 4. Supuestos o Simplificaciones Realizadas
- Asumí que el valor de Hype sería un número entero por temas de presentación visual para el usuario que consuma el frontend, incluso lo consideré como un porcentaje pero terminó siendo un número entero por ser un nivel
- Asumí que se querrian ver las estadísticas del video en el frontend (views, likes, comments)
- Asumí que se querrian los datos de los videos ordenados de mayor hype a menor hype

## 5. Problemas encontrados
- La URL de las imágenes no estaba en funcionamiento, por lo que tuve que crear nuevas URLs usando placeholder.co

## 6. prompts más relevantes utilizados, en caso de haber usado herramientas de IA
- Utilicé un prompt a openCode solicitando lo siguiente: "Haz que el video con mas Hype que es el primero de la lista se muestre de forma destacada en el frontend. Colocalo en la parte superior de la lista separado del grid de videos de 3 columnas y haz que sea mas grande que los demás con un borde que lo resalte mejor"
- Utilicé un promp a openCode solicitando lo siguiente: "Establece un plan de acción para crear un monorepo que me permita trabajar una api y un cliente de manera separada en el mismo proyecto para comenzar un proyecto de api con NestJS y un proyecto de cliente con React"