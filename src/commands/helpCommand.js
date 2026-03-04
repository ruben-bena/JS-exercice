import AbstractCommand from './abstractCommand.js'

export default class HelpCommand extends AbstractCommand {
    execute() {
        console.log("\n=================================================");
        console.log("                   📖  AYUDA  📖");
        console.log("=================================================\n");

        console.log("  🆘  help | ajuda");
        console.log("      → Muestra la lista de comandos.\n");

        console.log("  📂  carregar partida 'nom_arxiu.json'");
        console.log("      → Carga una partida guardada.\n");

        console.log("  💾  guardar partida 'nom_guardar.json'");
        console.log("      → Guarda la partida actual.\n");

        console.log("  🕵️  trampes | cheats");
        console.log("      → Muestra u oculta el tablero con las casillas destapadas.\n");

        console.log("  🎯  XY   (ej: B3)");
        console.log("      → Destapa la casilla e indica la distancia al tesoro más cercano.\n");

        console.log("  🏆  puntuacio | score");
        console.log("      → Muestra la puntuación y las tiradas restantes.\n");

        console.log("=================================================\n");
    }
}