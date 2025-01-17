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
  static hook(editor_api, alphine) {
    this._import_assets(editor_api, alphine);
  }
  static _import_assets(api) {
    // linked to #_asset_menu
    api.Alpine.data("import_assets", () => ({
      status: "import",
      import_assets() {
        const files = this.$refs.input_files.files;
        if (!files.length) {
          this.status = "No files were provided.";
          setTimeout(() => {
            this.status = "Import";
          }, 2000);
          return;
        }

        //const asset_files = form.elements["files"].files;
        //const close_button = form.elements["_close"];
        //const submit_button = form.elements["_submit"];
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const name = file.name;
          const ext = name.split(".").pop().toLowerCase();
          console.log(ext);
          if (ext === "obj") {
            api.assets.objects.set(name);
          } else if (ext === "png") {
          }
        }
        this.status = "importing...";
      },
    }));
  }
}

export { UserInterface };
