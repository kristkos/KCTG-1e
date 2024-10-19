import {MODULE_ID} from "../kctg-1e.js";

export class Notes extends Application {
    constructor(object, options = {}) {
        super(object, options);
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id: "notes",
            title: "Thank you for downloading",
            template: "modules/kctg-1e/templates/notes.html",
            width: 750,
            height: 600,
            classes:[ "kctg"]
        });
    }

    activateListeners(html) {
        super.activateListeners(html);
        $('.clear', html).bind("click", () => {
            game.settings.set(MODULE_ID, "show-warning", false);
            this.close();
        });

        $('.just-close', html).bind("click", () => {
            this.close();
        });
    }
}