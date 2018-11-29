import { Selector } from 'testcafe'

fixture `Test select element`
    .page `${process.env.SITE_URL}`


const districtSelect = Selector(`select`)
const districtOption = districtSelect.find(`option`)
const cardGoal = Selector(`.card-goal`)

test(`Select an option from the drop-down menu and exists return card goal`, async t => {
    
    await t
        .click(districtSelect)
        .click(districtOption.withText(`Anhanguera`))
        .expect(cardGoal.exists).ok()

})