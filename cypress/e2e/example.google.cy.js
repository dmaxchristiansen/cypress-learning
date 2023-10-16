const noThanksButton = 'button[aria-label="No, thanks"]'
const searchTextarea = 'textarea[aria-label="Search"]';

const imagesCta = 'Images';
const searchText = 'foo';

describe('Example Google search', () => {
    it(`Navigates to the Google homepage and executes an images search for ${searchText}`, () => {
        cy.visit('https://www.google.com');

        cy.get(searchTextarea).type(searchText).type('{enter}');

        cy.get('span').contains(imagesCta).click();
    });
});
