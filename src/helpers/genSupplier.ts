import { EMAIL_DOMAINS } from "../data/domains";
import { STREET_NAMES, STREET_TYPES } from "../data/locations";
import { GIRLS_NAMES, LAST_NAMES, MEN_NAMES } from "../data/people";
import { ISupplier } from "../interfaces/supplier.interface";
import { fullname } from "../types/user.type";

const generatePerson = (): fullname => {
  const allNames: string[][] = [MEN_NAMES, GIRLS_NAMES];
  const menOrGirl: number = Math.floor(Math.random() * 2);
  let firstName: string =
    allNames[menOrGirl][Math.floor(Math.random() * allNames[menOrGirl].length)];

  let secondName: string;
  do {
    secondName =
      allNames[menOrGirl][
        Math.floor(Math.random() * allNames[menOrGirl].length)
      ];
  } while (firstName === secondName);

  let lastName: string =
    LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];

  return { firstName, secondName, lastName };
};

const generateUserFullName = (generalUser: fullname): string => {
  return (
    generalUser.firstName +
    " " +
    generalUser.secondName +
    " " +
    generalUser.lastName
  );
};

const generateAddress = (): string => {
  return (
    STREET_NAMES[Math.floor(Math.random() * STREET_NAMES.length)] +
    ", " +
    (Math.floor(Math.random() * 999) + 1) +
    ", " +
    STREET_TYPES[Math.floor(Math.random() * STREET_TYPES.length)]
  );
};

const generateUserEmail = (generalUser: fullname): string => {
  return (
    generalUser.firstName +
    generalUser.lastName +
    "@" +
    EMAIL_DOMAINS[Math.floor(Math.random() * EMAIL_DOMAINS.length)]
  );
};

const generateUserPhone = (): string => {
  return "+" + (Math.floor(Math.random() * 90000000000) + 10000000000);
};

export const genSuppliers = (n: Number = 10): ISupplier[] => {
  let suppliers: ISupplier[] = [];
  for (let i: number = 0; i < n; i++) {
    const userData: fullname = generatePerson();

    suppliers.push({
      //id: i + 1,
      supplierName: generateUserFullName(userData),
      address: generateAddress(),
      email: generateUserEmail(userData),
      phone: generateUserPhone(),
    });
  }
  return suppliers;
};
