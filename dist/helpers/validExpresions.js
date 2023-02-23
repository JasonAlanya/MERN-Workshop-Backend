"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validPhotoType = void 0;
/*import { TypePhoto } from "../enums/type-photo.enum";

export const validPhototype = (photoType: string) => {
  if (!(photoType in TypePhoto)) {
    throw new Error("Phototipe is enum");
  }
};
*/
const type_photo_enum_1 = require("../enums/type-photo.enum");
const validPhotoType = (photoType) => {
    if (!Object.values(type_photo_enum_1.TypePhoto).includes(photoType)) {
        throw new Error("photoType is enum Photo, Document or Kml");
    }
    return true;
};
exports.validPhotoType = validPhotoType;
//# sourceMappingURL=validExpresions.js.map