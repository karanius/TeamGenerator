const inq = require('inquirer');
const fs = require('fs');
const mainPage = require('./templates/main.js');
const managerTemp = require('./templates/manager.js');
const engineerTemp = require('./templates/engineer.js');
const internTemp = require('./templates/intern.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const clear = () =>{
    console.clear();
};

const print = async (x) => {
    if (x === 'welcome') {
        clear('screen');
        console.log(`
    
                By: Karanius
                github: karanius
    
    
        █░  █ ▄▀▀ █░  ▄▀▀▄ ▄▀▀▄ █▄ ▄█ ▄▀▀
        █░  █ █░  █░  █░   █░ █ █▀▄▀█ █░
        █   █ █▀▀ █   █░   █░ █ █ ▀ █ █▀▀
        █▄█▄█ ▀▄▄ █▄█ ▀▄▄█ ▀▄▄▀ █░  █ ▀▄▄
    
    
        
        ~ Lets generate page for YOU and YOUR TEAM!
    
    
    
        `);
    } else if (x === 'bye'){
        console.log(`


            ~~ BYE!



        `);
    } else if (x === 'generating') {
        clear()
        console.log(`

        
        By: Karanius      █████████
        ░░███████░░░░░░░░░░███▒▒▒▒▒▒▒▒███
        ░░█▒▒▒▒▒▒█░░░░░░░███▒▒▒▒▒▒▒▒▒▒▒▒▒███
        ░░░█▒▒▒▒▒▒█░░░░██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
        ░░░░█▒▒▒▒▒█░░░██▒▒▒▒▒██▒▒▒▒▒▒██▒▒▒▒▒███
        ░░░░░█▒▒▒█░░░█▒▒▒▒▒▒████▒▒▒▒████▒▒▒▒▒▒██
        ░░░█████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
        ░░░█▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒██
        ░██▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒██▒▒▒▒▒▒▒▒▒▒██▒▒▒▒██
        ██▒▒▒███████████▒▒▒▒▒██▒▒▒▒▒▒▒▒██▒▒▒▒▒██
        █▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒████████▒▒▒▒▒▒▒██
        ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
        ░█▒▒▒███████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
        ░██▒▒▒▒▒▒▒▒▒▒████▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒█
        ░░████████████░░░█████████████████
               
                    
        █░  █▀▀█ █▀▀█ █▀▀▄ ░▀░ █▀▀▄ █▀▀▀   ░   ░   ░
        █░  █░░█ █▄▄█ █░░█ ▀█▀ █░░█ █░▀█   ▄   ▄   ▄
        ▀▀▀ ▀▀▀▀ ▀░░▀ ▀▀▀░ ▀▀▀ ▀░░▀ ▀▀▀▀   █   █   █
        
        
        `)
    } else if ( x === 'error') {
        console.log(' ~~~~~~~~~Error?  ');
    } else if ( x === 'done' ){
        console.log(`

        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
        ░░░░░░░░░░░░░▄▄▄▄▄▄▄░░░░░░░░░
        ░░░░░░░░░▄▀▀▀░░░░░░░▀▄░░░░░░░
        ░░░░░░░▄▀░░░░░░░░░░░░▀▄░░░░░░
        ░░░░░░▄▀░░░░░░░░░░▄▀▀▄▀▄░░░░░
        ░░░░▄▀░░░░░░░░░░▄▀░░██▄▀▄░░░░
        ░░░▄▀░░▄▀▀▀▄░░░░█░░░▀▀░█▀▄░░░
        ░░░█░░█▄▄░░░█░░░▀▄░░░░░▐░█░░░
        ░░▐▌░░█▀▀░░▄▀░░░░░▀▄▄▄▄▀░░█░░
        ░░▐▌░░█░░░▄▀░░░░░░░░░░░░░░█░░
        ░░▐▌░░░▀▀▀░░░░░░░░░░░░░░░░▐▌░
        ░░▐▌░░░░░░░░░░░░░░░▄░░░░░░▐▌░
        ░░▐▌░░░░░░░░░▄░░░░░█░░░░░░▐▌░
        ░░░█░░░░░░░░░▀█▄░░▄█░░░░░░▐▌░
        ░░░▐▌░░░░░░░░░░▀▀▀▀░░░░░░░▐▌░
        ░░░░█░░░░░░░░░░░░░░░░░░░░░█░░
        ░░░░▐▌▀▄░░░░░░░░░░░░░░░░░▐▌░░
        ░░░░░█░░▀░░░░░░░░░░░░░░░░▀░░░
        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░


                        Done....
                            github: karanius
        
        `)      
    }


};

const ask = async (stage , nOfEmployee) => { 
    let toBeAsked = {};
    if (stage === 'ready') {
        toBeAsked = {
            type: 'confirm',
            name:'answer',
            message: 'Are tou ready to build YOUR team? :D \n\n answer:'
        };
    } else if (stage === 'teamMemberNumber') {
        clear()
        print('welcome')
        toBeAsked = {
            type:'input',
            name:'answer',
            message: `
            ~~ How Many Team Members Do You Have? (including you) ? \n     asnwer: `,
            validate: function(num){ const reg = /^\d+$/ ; const isValid = ( num !== '' && reg.test(num) && num !== 0 ) ; return isValid || 'Bad Input' }
        };
    } else if (stage === 'fName') {
        clear();
        print('welcome');
        toBeAsked = {
            type:'input',
            name:'answer',
            message: `
            ~~ What is the FIRST name of team mebmer number ${nOfEmployee} ? \n     asnwer: `,
            validate: function(name){ const isValid = ( name !== '' && isNaN(name) ) ; return isValid || 'Bad Input' }
        };
    } else if (stage === 'lName') {
        toBeAsked = {
            type:'input',
            name:'answer',
            message: `
            ~~ What is ${nOfEmployee}'s LAST name? \n     asnwer: `,
            validate: function(name){ const isValid = ( name !== '' && isNaN(name) ) ; return isValid || 'Bad Input' }
        };
    }  else if (stage === 'eMail') {
        toBeAsked = {
            type:'input',
            name:'answer',
            message: `
            ~~ What is ${nOfEmployee}'s Email? \n     asnwer: `,
            validate: function (email) { const isValid = ( (email !== '') &&  isNaN(email) ) ; return isValid || 'Bad Input' }
        };
    } else if (stage === 'role') {
        toBeAsked={
            type:'rawlist',
            name:'answer',
            message: `
            ~~ What is the ${nOfEmployee}'s role as a team number  ? \n\n    ***CHOOSE INDEX [1 or 2 or 3] \n`,
            choices: [ "Manager" ,  "Engineer" , "Intern" ],
        }
    } else if (stage === 'id'){
        toBeAsked = {
            type:'input',
            name:'answer',
            message: `
            ~~ What is ${nOfEmployee}'s TEAM ID number ? \n     asnwer: `,
            validate: function(num){ const reg = /^\d+$/ ; const isValid = ( num !== '' && reg.test(num) ) ; return isValid || 'Bad Input' }
        };
    } else if (stage === 'officeNumber'){
        toBeAsked = {
            type:'input',
            name:'answer',
            message: `
            ~~ What is ${nOfEmployee}'s office number ? \n     asnwer: `,
            validate: function(num){ const reg = /^\d+$/ ; const isValid = ( num !== '' && reg.test(num) ) ; return isValid || 'Bad Input' }
        };
    } else if (stage === 'github'){
        toBeAsked = {
            type:'input',
            name:'answer',
            message: `
            ~~ What is ${nOfEmployee}'s github account ? \n     asnwer: `,
            validate: function (account) { const isValid = ( (account !== '') &&  isNaN(account) ) ; return isValid || 'Bad Input' }
        };
    } else if (stage === 'school'){
        toBeAsked = {
            type:'input',
            name:'answer',
            message: `
            ~~ Where does ${nOfEmployee} go to school ? \n     asnwer: `,
            validate: function (account) { const isValid = ( (account !== '') &&  isNaN(account) ) ; return isValid || 'Bad Input' }
        };
    }

    return await inq
    .prompt([toBeAsked])
    .then(res=>{
            return res.answer ;
    }).catch(
        error=>{
            console.log('///////////////',error);
        }
    )

};

const askQuestions = async () => {
    const ready = await ask('ready');
    if (await ready === true){
        let num; 
        let teamArr = [];
        num = await ask("teamMemberNumber") - 1;
        while (teamArr.length <= num) {
            var memberObj = null;
            let nOfEmployee = teamArr.length + 1;
            global.member = {} 
            global.member['fName'] = await ask('fName' , nOfEmployee);
            global.member['lName'] = await ask('lName' , global.member['fName']);
            global.member['id'] = await ask('id', `${global.member['fName']} ${global.member['lName']}` );
            global.member['eMail'] = await ask( 'eMail' ,  `${global.member['fName']} ${global.member['lName']}` )
            global.member['role'] = await ask('role', `${global.member['fName']} ${global.member['lName']}`);
            if ( global.member['role'] ) {
                const { fName , lName , id , eMail , role } = global.member;
                if (role[0] === 'M'){
                    const officeNumber = await ask( 'officeNumber' , `${fName} ${lName}` )
                    memberObj = new Manager( `${fName} ${lName}` , id , eMail , officeNumber )
                } else if (role[0] === 'E'){
                    const github = await ask( 'github' , `${fName} ${lName}` )
                    memberObj = new Engineer( `${fName} ${lName}` , id , eMail , github )
                }else if (role[0] === 'I'){
                    const school = await ask( 'school' , `${fName} ${lName}` )
                    memberObj = new Intern( `${fName} ${lName}` , id , eMail , school )
                }
            }
            teamArr.push(memberObj);
        }
        return teamArr;
    } else {
        await print('bye');
        process.exit();
    };
};

const generatePge = (teamData) =>{
    let index = mainPage;
    let memberArr = []
    for (let i of teamData){
        let role = i.getRole();
        
        if (role === 'Manager'){
            let man = managerTemp;
            man = man.replace(/{{fullName}}/, i.getName());
            man = man.replace(/{{role}}/, role);
            man = man.replace(/{{id}}/, i.getID());
            man = man.replace(/{{eMail}}/, i.getEmail());
            man = man.replace(/{{officeNumber}}/, i.getOfficeNumber());
            memberArr.push(man)
        }else if (role === 'Engineer') {
            let eng = engineerTemp;
            eng = eng.replace(/{{fullName}}/, i.getName());
            eng = eng.replace(/{{role}}/, role);
            eng = eng.replace(/{{id}}/, i.getID());
            eng = eng.replace(/{{eMail}}/, i.getEmail());
            eng = eng.replace(/{{githubAccount}}/, i.getGithub());
            memberArr.push(eng)
        } else if ( role === 'Intern') {
            let int = internTemp;
            int = int.replace(/{{fullName}}/, i.getName());
            int = int.replace(/{{role}}/, role);
            int = int.replace(/{{id}}/, i.getID());
            int = int.replace(/{{eMail}}/, i.getEmail());
            int = int.replace(/{{school}}/, i.getSchool());
            memberArr.push(int)
        }
    }
    let text = '';
    for (let i of memberArr) {
        text = text + i;
    }
    index = index.replace(/{{.}}/ , text);
    return index
}


const savePage = async(page) => {
    await fs.writeFile('./output/index.html' , page , (err)=>{
        if (err){
            console.log(err)
        }
    })
}

const init = async () => {
    await print('welcome');
    const team = await askQuestions();
    if (team.length > 0){
        await print('generating')
        const page = await generatePge(team);
        if (page) {
            await savePage(page);
            print('done');
            print('bye');
        }else{
            clear()
            print("error");
            process.exit()
        }
    } else {
        clear()
        print('bye')
        process.exit()
    }
};


init();