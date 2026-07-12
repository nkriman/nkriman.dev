---
title: "Deja de ajustar prompts. Construye el harness."
description: "La IA todavía se siente ingobernable. La solución es una disciplina de ingeniería tomada del propio pasado del software."
pubDate: 2026-07-12
draft: false
lang: es
translation: stop-tuning-prompts-build-the-harness
---

## El problema

La IA cambió la forma de trabajar de los equipos, y la va a seguir cambiando. Pero para la mayoría de las personas, usarla todavía se siente como alquimia. Cambias unas pocas palabras en un prompt, la salida vuelve completamente distinta, y nadie sabe decir bien por qué. Si ese es todo el método, la calidad depende de la suerte.

No es un problema menor, porque ya no afecta solo a los equipos de IA. Es la analista que genera un informe trimestral, el ingeniero que escribe pruebas, el líder de soporte que automatiza respuestas. Cualquiera que ponga un modelo a trabajar en serio choca con la misma pared: los resultados son buenos, después son incorrectos, y no hay ninguna perilla confiable que girar.

El campo pasó los últimos dos años descubriendo dónde están las perillas de verdad. Llegaron en tres etapas, y vale la pena conocer los nombres, porque cada uno marca una superficie más grande sobre la que se puede hacer ingeniería.

<figure class="fig">
  <div class="nest nest-harness">
    <span class="nest-label">3 · el harness: todo lo que construyes alrededor del modelo</span>
    <div class="nest nest-context">
      <span class="nest-label">2 · el contexto: todo lo que el modelo ve</span>
      <div class="nest nest-prompt">
        <span class="nest-label">1 · el prompt</span>
      </div>
    </div>
  </div>
  <figcaption>Las tres superficies. Cada una contiene a la anterior.</figcaption>
</figure>

## Etapa uno: prompt engineering

El prompt engineering fue lo primero que todos intentaron: redactar el pedido con astucia para conseguir una mejor respuesta. En código, es una sola línea:

```python
respuesta = modelo("Resume nuestros ingresos del tercer trimestre.")
# leerlo, esperar que esté bien, reformular cuando no lo esté
```

Funciona, un poco. Pero el prompt es una superficie inestable para construir encima. Pequeños cambios de redacción sacuden los resultados, el mismo prompt se comporta distinto el mes siguiente cuando el proveedor actualiza el modelo, y no existe una forma de probarlo que un ingeniero reconocería como prueba. Escribir buenos prompts es una habilidad real; solo que es del tipo que vive en la cabeza de una persona y se va cuando esa persona se va.

## Etapa dos: context engineering

La siguiente conclusión fue que el prompt es una fracción mínima de lo que el modelo ve en realidad. Todo lo demás que pones frente a él es **contexto**: los datos, los documentos recuperados, los ejemplos, las herramientas que puede llamar. Y el contexto sí se puede diseñar:

```python
numeros  = obtener_ingresos_q3(fuente="db_finanzas")   # datos reales, no recordados
ejemplos = cargar_informes_previos(n=2)                 # muestra la forma que esperas de vuelta
prompt   = ensamblar(instrucciones, numeros, ejemplos)
respuesta = modelo(prompt)
```

Andrej Karpathy, miembro fundador de OpenAI y ex jefe de IA en Tesla, lo describió como "el delicado arte y ciencia de llenar la ventana de contexto con exactamente la información correcta para el siguiente paso". El CEO de Shopify, Tobi Lütke, lo dijo más simple: "el arte de proveer todo el contexto para que la tarea sea plausiblemente resoluble por el LLM".

El modelo mental de Karpathy es el que conviene conservar. El modelo es como una CPU, y su ventana de contexto es como la RAM, una memoria de trabajo pequeña. Context engineering es el trabajo de decidir qué se carga en esa memoria, y en qué orden, antes de que el modelo corra. El mismo modelo puede verse brillante o descuidado en la misma tarea, según lo que hayas cargado.

## Etapa tres: harness engineering

El contexto es lo que el modelo ve. La confiabilidad necesita más que buenas entradas. Necesita también los controles a la salida del modelo, y las correcciones que evitan que el error de ayer se repita. Todo ese aparato es **el harness**.

El término viene de Mitchell Hashimoto, creador de Terraform y Ghostty, en un ensayo de febrero de 2026. Su fórmula: Agente = Modelo + Harness. El modelo es la parte que alquilas y no controlas; el harness es la parte que construyes y te pertenece. Su definición de la disciplina es una sola regla: "cada vez que encuentras que un agente comete un error, te tomas el tiempo de diseñar una solución tal que el agente nunca vuelva a cometer ese error".

Un error recurrente, en otras palabras, se elimina con ingeniería una sola vez, en lugar de esquivarlo con prompts cada vez que aparece.

## Qué contiene un harness en realidad

El software corre con ventaja aquí. Construyó exactamente esto hace décadas y lo llamó test harness: la maquinaria alrededor de una pieza de código que le entrega entradas controladas, la ejecuta bajo condiciones conocidas, captura lo que sale y lo compara contra lo que debía salir, de forma automática, igual todas las veces. El código era la parte que cambiaba todo el tiempo; el harness quedaba fijo, y ese aparato fijo era lo que hacía que el código fuera confiable.

El harness de un modelo es la misma idea, con más piezas, porque un modelo es menos predecible que el código. Puesto junto a los fragmentos anteriores, el modelo se reduce a una sola línea y todo lo que lo rodea es el trabajo:

```python
numeros  = obtener_ingresos_q3(fuente="db_finanzas")   # paso determinista: nunca es tarea del modelo
borrador = modelo(ensamblar(instrucciones, numeros))

informe  = parsear(borrador, esquema=InformeTrimestral) # contrato de salida: falla fuerte, no en silencio
if not concilia(informe.totales, numeros):              # verificación: detectarlo antes que el directorio
    informe = escalar_a_humano(borrador, "totales mal") # respaldo determinista
```

Así que un harness son en realidad cuatro cosas:

- **El contexto** que se arma antes de que corra el modelo.
- **El contrato de salida** que la respuesta debe cumplir.
- **La verificación** que atrapa una mala respuesta.
- **Los pasos deterministas** que mantienes fuera de las manos del modelo.

<figure class="fig">
  <div class="flow-frame">
    <span class="flow-frame-label">el harness: todo esto lo construyes y te pertenece</span>
    <div class="flow">
      <div class="flow-box"><strong>contexto</strong><span>datos, ejemplos, herramientas</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-box flow-model"><strong>modelo</strong><span>alquilado</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-box"><strong>contrato de salida</strong><span>estructura que debe cumplir</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-box"><strong>verificación</strong><span>revisada antes de que alguien actúe</span></div>
    </div>
  </div>
  <figcaption>El modelo es la única parte que alquilas. El resto es tuyo para diseñar y probar.</figcaption>
</figure>

El propio ejemplo de Hashimoto es un archivo de texto plano que mantiene en sus proyectos, AGENTS.md, donde cada línea se remonta a un error específico que el agente cometió una vez y no volverá a cometer:

```
# AGENTS.md: cada línea es un error que ocurrió exactamente una vez
- Ejecuta `make verify` antes de proponer cualquier cambio.
- Toma los ingresos de la API de finanzas; no los estimes.
- Todo informe nuevo debe pasar el control de conciliación en checks/totals.py.
```

Podrías leer ese harness completo en un minuto; los reales llegan a cientos de líneas así.

## Por qué esto no es solo de código

Nada de esto es específico de la programación, y esa es la parte que debería interesar a cualquiera más allá del equipo de ingeniería. Un harness es simplemente el sistema diseñado y comprobable alrededor de un modelo, y cualquier equipo que ponga IA a trabajar en serio está construyendo uno, lo llame así o no.

Tomemos el informe trimestral de la analista:

- El **prompt** es "resume el tercer trimestre".
- El **contexto** es qué números recibe el modelo, y de dónde.
- El **contrato de salida** es la estructura que el informe debe seguir.
- La **verificación** es el control que marca una cifra que no puede estar bien antes de que llegue al directorio.
- El **paso determinista** es el que mantienes lejos del modelo: tomar los números reales del sistema de registro en lugar de dejar que los recuerde.

El prompt es la pieza más chica de todo eso. El resto, desde el origen de los datos hasta el control de conciliación, es el harness, y es lo que permite correr el mismo informe el próximo trimestre y volver a confiar en él.

## Dónde deja esto tu inversión

Esto reencuadra una decisión que los líderes están tomando ahora mismo. El ajuste de prompts no es algo alrededor de lo cual puedas construir un equipo. No se acumula, y se rompe en cuanto cambia el modelo. Un harness es un activo de otra clase. Sobrevive a cualquier versión del modelo. Es donde viven tus controles y tu trazabilidad de auditoría, y es la parte de un sistema de IA que de verdad puedes probar y mejorar.

Así que cuando alguien pregunta cómo hacer que la IA sea confiable, la respuesta útil apunta lejos del modelo, porque puedes alquilar el mismo que tu competidor, y hacia el harness que construyes alrededor.

## Fuentes

- Mitchell Hashimoto, ["My AI Adoption Journey"](https://mitchellh.com/writing/my-ai-adoption-journey) (5 de febrero de 2026, en inglés)
- Simon Willison, ["Context engineering"](https://simonwillison.net/2025/Jun/27/context-engineering/) (fuente de las citas de Karpathy y Lütke; las traducciones son propias)
