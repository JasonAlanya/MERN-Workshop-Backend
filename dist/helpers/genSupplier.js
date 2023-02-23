"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genSuppliers = void 0;
const domains_1 = require("../data/domains");
const locations_1 = require("../data/locations");
const people_1 = require("../data/people");
const generatePerson = () => {
    const allNames = [people_1.MEN_NAMES, people_1.GIRLS_NAMES];
    const menOrGirl = Math.floor(Math.random() * 2);
    let firstName = allNames[menOrGirl][Math.floor(Math.random() * allNames[menOrGirl].length)];
    let secondName;
    do {
        secondName =
            allNames[menOrGirl][Math.floor(Math.random() * allNames[menOrGirl].length)];
    } while (firstName === secondName);
    let lastName = people_1.LAST_NAMES[Math.floor(Math.random() * people_1.LAST_NAMES.length)];
    return { firstName, secondName, lastName };
};
const generateUserFullName = (generalUser) => {
    return (generalUser.firstName +
        " " +
        generalUser.secondName +
        " " +
        generalUser.lastName);
};
const generateAddress = () => {
    return (locations_1.STREET_NAMES[Math.floor(Math.random() * locations_1.STREET_NAMES.length)] +
        ", " +
        (Math.floor(Math.random() * 999) + 1) +
        ", " +
        locations_1.STREET_TYPES[Math.floor(Math.random() * locations_1.STREET_TYPES.length)]);
};
const generateUserEmail = (generalUser) => {
    return (generalUser.firstName +
        generalUser.lastName +
        "@" +
        domains_1.EMAIL_DOMAINS[Math.floor(Math.random() * domains_1.EMAIL_DOMAINS.length)]);
};
const generateUserPhone = () => {
    return "+" + (Math.floor(Math.random() * 90000000000) + 10000000000);
};
const genSuppliers = (n = 10) => {
    let suppliers = [];
    for (let i = 0; i < n; i++) {
        const userData = generatePerson();
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
exports.genSuppliers = genSuppliers;
//# sourceMappingURL=genSupplier.js.map