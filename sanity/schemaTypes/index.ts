import { type SchemaTypeDefinition } from "sanity";
import { aboutInfoType } from "./aboutInfo";
import { demoType } from "./demo";
import { collaborationType } from "./collaboration";
import { representationType } from "./representation";
import { equipmentType } from "./equipment";
import { contactType } from "./contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    aboutInfoType,
    demoType,
    collaborationType,
    representationType,
    equipmentType,
    contactType,
  ],
};
