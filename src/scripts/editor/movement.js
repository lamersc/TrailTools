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

import * as THREE from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";

const movement_speed = 10;
const speed_multiplier = 2;

function update_camera(editor_keys, camera, delta_time) {
  let multiplier = 1;

  if (editor_keys.is_pressed("shift")) {
    multiplier *= speed_multiplier;
  }

  // Sagittal = for
  const forward_dir =
    Number(editor_keys.is_pressed("w")) - Number(editor_keys.is_pressed("s"));
  const right_dir =
    Number(editor_keys.is_pressed("d")) - Number(editor_keys.is_pressed("a"));
  if (forward_dir !== 0 || right_dir !== 0) {
    const direction = new THREE.Vector3(right_dir, 0, -forward_dir).normalize();
    direction.applyQuaternion(camera.quaternion);
    direction.multiplyScalar(movement_speed * multiplier * delta_time);
    camera.position.add(direction);
  }
}

export { update_camera };
