/*
 * Web-based program for creating mods in Trailmakers
 * Copyright (C) 2025  lamersc
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

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