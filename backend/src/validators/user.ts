import { body } from "express-validator";

const makeNameValidator = () => {
  return body("name")
    .exists()
    .withMessage("name is required")
    .bail()
    .isString()
    .withMessage("name must be a string")
    .bail()
    .notEmpty()
    .withMessage("name cannot be empty");
};

const makeImgLinkValidator = () => {
  return body("profilePictureURL")
    .optional()
    .isString()
    .withMessage("profilPictureURL must be a string");
};

export const createUser = [makeNameValidator(), makeImgLinkValidator()];
