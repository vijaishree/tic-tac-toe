describe('Play tic tac toe', () => {

    it('Displays a blank board' , () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="status"').eq(0).then(($button) => {expect($button.text()).to.equal('Next Chance X');});
        
        const squareId = '[data-testid="square"]';

        cy.get(squareId).eq(0).should(($button) => {expect($button.text()).to.equal('');});
        cy.get(squareId).eq(1).should(($button) => {expect($button.text()).to.equal('');});
        cy.get(squareId).eq(2).should(($button) => {expect($button.text()).to.equal('');});
        cy.get(squareId).eq(3).should(($button) => {expect($button.text()).to.equal('');});
        cy.get(squareId).eq(4).should(($button) => {expect($button.text()).to.equal('');});
        cy.get(squareId).eq(5).should(($button) => {expect($button.text()).to.equal('');});
        cy.get(squareId).eq(6).should(($button) => {expect($button.text()).to.equal('');});
        cy.get(squareId).eq(7).should(($button) => {expect($button.text()).to.equal('');});
        cy.get(squareId).eq(8).should(($button) => {expect($button.text()).to.equal('');});
        
    });

    it('Displays next moves', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid="status"')
            .eq(0)
            .then(($button) => {
                expect($button.text()).to.equal('Next Chance X');
            });


        const squareId = '[data-testid="square"]';

        cy.get(squareId).eq(0).click();
        cy.get('[data-testid="status"')
            .eq(0)
            .then(($button) => {
                expect($button.text()).to.equal('Next Chance O');
            });
        

        cy.get(squareId).eq(1).click();
        cy.get('[data-testid="status"')
            .eq(0)
            .then(($button) => {
                expect($button.text()).to.equal('Next Chance X');
            });
        
    });

    it('Displays X as the winner', () => {
        cy.visit('http://localhost:3000');

        const squareId = '[data-testid="square"]';

        cy.get(squareId).eq(0).click();
        cy.get(squareId).eq(1).click();
        cy.get(squareId).eq(4).click();
        cy.get(squareId).eq(2).click();
        cy.get(squareId).eq(8).click();

        cy.get('[data-testid="status"')
            .should(($div) => {
                expect($div).to.have.length(1)
                expect($div[0]).to.have.text('Winner X')
            });
    });

    it('Displays O as the winner', () => {
        cy.visit('http://localhost:3000');

        const squareId = '[data-testid="square"]';

        cy.get(squareId).eq(0).click();
        cy.get(squareId).eq(3).click();
        cy.get(squareId).eq(6).click();
        cy.get(squareId).eq(4).click();
        cy.get(squareId).eq(7).click();
        cy.get(squareId).eq(5).click();

        cy.get('[data-testid="status"')
            .should(($div) => {
                expect($div).to.have.length(1)
                expect($div[0]).to.have.text('Winner O')
            });
    });

});