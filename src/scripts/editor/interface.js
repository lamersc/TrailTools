class UserInterface {
    static hook(editor_api) {
        this._asset_menu(editor_api);
    }
    static _asset_menu(api) { // linked to #_asset_menu
        const form = document.forms["_asset_menu_form"];
        const asset_files = form.elements["files"].files;
        const close_button = form.elements["_close"];
        const submit_button = form.elements["_submit"];
        submit_button.onclick = () => {
            close_button.toggleAttribute("disabled");
            submit_button.innerText = "Importing...";
            
        }
    }
}

export { UserInterface };