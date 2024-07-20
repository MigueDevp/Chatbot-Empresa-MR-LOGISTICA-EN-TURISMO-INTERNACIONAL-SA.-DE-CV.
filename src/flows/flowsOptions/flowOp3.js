const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");

const flowSubmenuOp1 = require("../flowOptionsSubmenu/flowSubmenuOp1");
const flowSubmenuOp2 = require("../flowOptionsSubmenu/flowSubmenuOp2");
const flowSubmenuOp3 = require("../flowOptionsSubmenu/flowSubmenuOp3");
const flowSubmenuOp4 = require("../flowOptionsSubmenu/flowSubmenuOp4");
const flowSubmenuOp5 = require("../flowOptionsSubmenu/flowSubmenuOp5");
const flowSubmenuOp6 = require("../flowOptionsSubmenu/flowSubmenuOp6");

const flowOp3 = addKeyword(EVENTS.ACTION)
  .addAnswer(
    "Elegiste *Cotizar otros servicios*, con gusto te damos seguimiento"
  )
  .addAnswer(
    "Elige qué servicio estás interesado en cotizar:\n" +
      "\n" +
      "1. Autobús 🚌\n" +
      "2. Van 🚐\n" +
      "3. Sprinter 🚎\n" +
      "4. Auto 🚗\n" +
      "5. Traslados 🚖\n" +
      "6. Tour 🏞️\n" +
      "7. Salir" +
      "\n" +
      "*Por favor ingresa una opción acorde a su número* \n" +
      "\n" +
      "Por ejemplo: *1*",
    { capture: true },
    async (ctx, { gotoFlow, fallBack, flowDynamic }) => {
      const option = ctx.body.trim();
      if (!["1", "2", "3", "4", "5", "6", "7"].includes(option)) {
        return fallBack(
          "Respuesta no válida, por favor selecciona una de las opciones."
        );
      }

      switch (option) {
        case "1":
          return gotoFlow(flowSubmenuOp1);
        case "2":
          return gotoFlow(flowSubmenuOp2);
        case "3":
          return gotoFlow(flowSubmenuOp3);
        case "4":
          return gotoFlow(flowSubmenuOp4);
        case "5":
          return gotoFlow(flowSubmenuOp5);
        case "6":
          return gotoFlow(flowSubmenuOp6);
        case "7":
          return await flowDynamic(
            "Has salido. Puedes volver al menú principal escribiendo la palabra *MENU*."
          );
      }
    }
  );

module.exports = flowOp3;
