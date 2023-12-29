const home = '/';
const about = '/about';
const contact = '/contact';
const implementations = '/implementations';
const jobs = '/jobs';
const maintenance = '/maintenance';
const privacyPolicy = '/privacy-policy';
const services = '/services';
const software = '/software';
const solutions = '/solutions';

const routes = {
    home,
    about,
    contact,
    implementations,
    jobs,    
    maintenance,
    privacyPolicy,
    services,
    software,
    solutions,

    items: [{
        id: home, 
        text: 'Home'
    }, {
        id: about,
        text: 'O nas'
    }, {
        id: contact,
        text: 'Kontakt'
    }, {
        id: implementations,
        text: 'Realizacje'
    }, {
        id: jobs,
        text: 'Praca'
    }, {
        id: maintenance,
        text: 'Serwis'
    }, {
        id: privacyPolicy,
        text: 'Polityka prywatności'
    }, {
        id: services,
        text: 'Usługi'
    }, {
        id: software,
        text: 'Oprogramowanie'
    }, {
        id: solutions,
        text: 'Rozwiązania'
    }],

    getText(id: string): string {
        const item = this.items.find((u) => u.id === String(id));

        return item ? item.text : '';
    },
    getTextUpper(id: string): string {
        return this.getText(id).toUpperCase();
    }
};

export default routes;


